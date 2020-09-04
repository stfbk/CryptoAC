
package eu.fbk.st.cryptoac.dao.aws;

import com.amazonaws.services.lambda.invoke.LambdaFunction;

import static eu.fbk.st.cryptoac.dao.aws.DAOInterfaceAWSParameters.lambdaID;

/**
 * Interface to model the AWS Lambda function that can be invoked from the users.
 */
public interface CryptoACLambda {

    /**
     * This method is invoked whenever a user wants to either add or write a file.
     * Since it would be possible for the users to overwrite files they don't have
     * access to, these requests are redirected to the Lambda function that will
     * take care of making the proper checks.
     * @param input pojo representing the input to the Lambda function
     * @return pojo representing the output from the Lambda function
     */
    @LambdaFunction(functionName=lambdaID)
    OutputFromCryptoACLambda invokeLambda(InputToCryptoACLambda input);
}