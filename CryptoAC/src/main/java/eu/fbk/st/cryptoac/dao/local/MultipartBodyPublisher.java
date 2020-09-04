package eu.fbk.st.cryptoac.dao.local;

import java.net.http.HttpRequest;
import java.nio.charset.StandardCharsets;
import java.util.*;

/**
 * As (weirdly), the HTTP library does not support multipart requests, this class
 * is a publisher for a multipart body HTTP request for the new Java 11 HTTP library.
 * Unfortunately note that, as the HttpRequest.BodyPublishers.ofByteArrays() publisher
 * method is implemented, you cannot have a file (or more generally a stream) as one
 * of the parts. Indeed, first "ofByteArrays()" would read the stream to know the length
 * of the part, then it would read it again to put it in the body (but the stream was
 * already emptied).
 */
public class MultipartBodyPublisher {

    /**
     * The list of parts to add in the body.
     */
    private final List<PartsSpecification> partsSpecificationList = new ArrayList<>();


    /**
     * A random string to act as a boundary between parts.
     */
    private final String boundary = UUID.randomUUID().toString();

    /**
     * This method builds the body for sending the request.
     * @return the body publisher
     */
    public HttpRequest.BodyPublisher build() {
        if (partsSpecificationList.size() == 0) {
            throw new IllegalStateException("Must have at least one part to build multipart message.");
        }
        addFinalBoundaryPart();
        return HttpRequest.BodyPublishers.ofByteArrays(PartsIterator::new);
    }

    /**
     * getter for the random boundary.
     * @return the random boundary
     */
    public String getBoundary() {
        return boundary;
    }

    /**
     * Add a new string part to the body.
     * @param name the name of the part
     * @param value the value of the part
     * @return this for concatenation
     */
    public MultipartBodyPublisher addPart(String name, String value) {
        PartsSpecification newPart = new PartsSpecification();
        newPart.type = PartsSpecification.TYPE.STRING;
        newPart.name = name;
        newPart.value = value;
        partsSpecificationList.add(newPart);
        return this;
    }

    /**
     * Add the final boundary after the last part.
     */
    private void addFinalBoundaryPart() {
        PartsSpecification newPart = new PartsSpecification();
        newPart.type = PartsSpecification.TYPE.FINAL_BOUNDARY;
        newPart.value = "--" + boundary + "--";
        partsSpecificationList.add(newPart);
    }

    /**
     * A part in the multipart request.
     */
    static class PartsSpecification {

        /**
         * The supported kinds of parts.
         */
        public enum TYPE {
            STRING, FINAL_BOUNDARY
        }

        /**
         * The kind of part.
         */
        PartsSpecification.TYPE type;

        /**
         * The kind of the part.
         */
        String name;

        /**
         * The value of the part.
         */
        String value;
    }


    /**
     * Iterator over the parts (it returns array of bytes).
     */
    class PartsIterator implements Iterator<byte[]> {

        /**
         * The index of the part to return.
         */
        int currentIndexOfParts;

        /**
         * The total number of parts to return.
         */
        int numberOfParts;

        /**
         * Constructor without parameters.
         */
        PartsIterator() {
            currentIndexOfParts = 0;
            numberOfParts = partsSpecificationList.size();
        }

        @Override
        public boolean hasNext() {
            return currentIndexOfParts < numberOfParts;
        }

        @Override
        public byte[] next() {
            if (!hasNext()) throw new NoSuchElementException();
            byte[] next;
            next = computeNext();
            return next;
        }

        /**
         * get the next part as a byte array.
         * @return the next part as a byte array
         */
        private byte[] computeNext() {

            byte[] bytesToReturn;

                if (currentIndexOfParts >= numberOfParts)
                    bytesToReturn = null;
                else {

                    PartsSpecification nextPart = partsSpecificationList.get(currentIndexOfParts);

                    if (PartsSpecification.TYPE.STRING.equals(nextPart.type)) {
                        String part =
                                "--" + boundary + "\r\n" +
                                        "Content-Disposition: form-data; name=" + nextPart.name + "\r\n" +
                                        "Content-Type: text/plain; charset=UTF-8\r\n\r\n" +
                                        nextPart.value + "\r\n";
                        bytesToReturn = part.getBytes(StandardCharsets.UTF_8);
                    }
                    else {
                        bytesToReturn = nextPart.value.getBytes(StandardCharsets.UTF_8);
                    }
                    currentIndexOfParts = currentIndexOfParts + 1;
                }

            return bytesToReturn;
        }
    }
}