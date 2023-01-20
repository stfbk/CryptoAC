# Remove old files
rm ca.key ca.csr ca.srl ca.crt server.crt server.csr server.key server-nopass.key mosquittoCACertificate.jks

# Create a key pair for the CA
openssl genrsa -des3 -out ca.key 2048

# Create a certificate request for the CA
openssl req -new -out ca.csr -key ca.key

# Create a certificate for the CA
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt -days 3650 -sha256 -extfile v3.ext

# Create a server key pair that will be used by the broker
openssl genrsa -out server.key 2048

# I password protected the server key and the broker could not read it. I found this command which will remove the passphrase from the key
openssl rsa -in server.key -out server-nopass.key

# Create a certificate request .csr. When filling out the form the common name is important and is usually the domain name of the server (or the IP)
openssl req -new -out server.csr -key server-nopass.key

# We use the CA key to verify and sign the server certificate. This creates the server.crt file
openssl x509 -req -in server.csr -out server.crt -CA ca.crt -CAkey ca.key -CAcreateserial -days 365 -extfile v3_2.ext

# Convert CRT to JKS for MQTT clients
keytool -import -file ca.crt -alias ca -keystore mosquittoCACertificate.jks -storepass password

# Delete the old JKS file for the CryptoAC container
rm ../CryptoAC/mosquittoCACertificate.jks

# Copy the new JSK file for the CryptoAC container
cp mosquittoCACertificate.jks ../CryptoAC/mosquittoCACertificate.jks