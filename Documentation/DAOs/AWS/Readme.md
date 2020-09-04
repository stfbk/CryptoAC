# CryptoAC | CryptoAC | Documentation | DAOs | AWS

> Last Update: 27/07/2020

## AWS DAO interface implementation

The **DAOInterfaceAWS** class provides support for using [Amazon Web Services (AWS)](https://aws.amazon.com/) as storage system for *CryptoAC*. As this implementation inherits from the **DAOInterfaceMySQL** abstract class for handling metadata, only methods uploading and downloading files are implemented. 

Currently, this implementation expects the presence of the follwing AWS services:
* **S3** - the simple storage service (S3) by AWS allows for storing files in "*buckets*", i.e., directories over which we can apply Access Control (AC) policies. In particular, we use one bucket (**cryptoac-files-temporary**) for uploading files and one bucket (**cryptoac-files**) for downloading files (more details below).
* **Lambda Function** - the cloud functions offered by AWS (i.e., Lambda) are snippets of code executed AWS-side either triggered by events (e.g. upload of a new file) or invoked directly. In this implementation, a Lambda function acts as the **Reference Monitor** to mediate users' accesses to sensitive data (more details below).
* **IAM** - the Identity and Access Management service of AWS has the concepts of "users", "roles" and "groups"; each user in CryptoAC has a corresponding user in AWS IAM. CryptoAC automatically create and delete IAM AWS users, except for the administrator user that has to be provided. Roles in CryptoAC do NOT have a corresponding role in AWS IAM ROLE.

> All AWS services should be deployed in the same AWS region
> AWS limits the number of users to 5 thousand
> Future plans are automatize the configuring of the S3, Lambda and IAM services 


## Why Two Buckets?

The default behaviour of AWS S3 buckets is to allow users to overwrite stored files by uploading another file with the same name. To avoid this behaviour, users will have **putObject** permission over the first bucket and **getObject** permission over the second bucket. The Lambda function takes care of validating and moving files from the first to the second bucket. In this way, the first bucket will always be empty, and there will be no (or very little) risk to overwrite the file of another user. 

An alternative may be to upload a file toward the Lambda function. However, Lambda functions are billed based on execution time, i.e., uploading a file toward a Lambda function would be very expensive.


## Lambda Function

We developed a single Lambda function (**"CryptographicRBACLambda"**) with superprivileges to validate files uploaded in the **cryptoac-files-temporary** bucket and move them in the **cryptoac-files** bucket. The Lambda function handles the **Add** and **Write** file operations by checking the correctness of metadata (e.g. file version number is 1 for new files, permission is granted to the admin) and digital signatures of tuples.

> Note: if the MySQL database is AWS RDS, the Lambda function needs to have an IAM execution role that can access the database.



### Installation TODO da rivedere

In order to use CryptoAC with AWS, you first have to set up the needed AWS services>:
    1. [Create an administrator AWS account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account) in case you do not have one already. AWS offers a free tier for the first 12 months of use.
    2. [Create an (RDS) database](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html) along with all the tables and views needed (remember to set the route table to redirect 0.0.0.0/0 to the internet gateway). You can run the [SQL script](../database.sql) from *MySQL Workbench* to automatically create all tables and the user admin. Of course, remember to change the admin database credentials.
    3. [Create two buckets](https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) where to store all the encrypted files. The name of the buckets should then be hard-coded in the **[Lambda function](../../CryptographicRBACLambda/)** and, when prompted, in the GUI of the *CryptographicRBACClient* program.
    4. [Configure and upload the Lambda function](https://aws.amazon.com/lambda). Remember to configure all the variables like the bucket name, credentials, database endpoint, etc. Then [create and upload](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) the Lambda. When using the code of the Lambda function, remember to modify the parameters inside the **lambda.properties** file.
    5. Modify the [CryptographicRBACClient configuration files](./../../../CryptographicRBACClient/resources/) and launch the tests to check that everything works.