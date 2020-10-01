# CryptoAC | CryptoAC | Documentation | Util

> Last Update: 01/10/2020

## Introduction

The utilities of *CryptoAC* include cryptographic functionalities, constant values, Plain Old Java Objects (POJO) and enumerators.

## Command Line Utilities

Utility methods and constant values for parameters acquisition. Below, the usage of *CryptoaC*ç

```bash
usage: CryptoAC [-a <arg>] [-ca <arg>] [-ch <arg>] [-ck <arg>] [-cp <arg>]
       [-cs <arg>] [-f <arg>] [-l <arg>] [-m <arg>] [-n <arg>] -od | -op |
       -or <arg>   [-p <arg>] [-s <arg>] [-t <arg>]

CryptoAC enforces cryptographic access control on data hosted in partially
trusted environments

 -a,--adminID <arg>                            The ID of the admin [default is "admin"]
 -ca,--PKCAlgorithm <arg>                      The algorithm used to generate PKC keys [default is "RSA"]
 -ch,--symmetricAlgorithm <arg>                The algorithm used for symmetric encryption [default is "AES"]
 -ck,--symmetricKeysLength <arg>               The length of symmetric keys [default is "128"]
 -cp,--PKCKeysLength <arg>                     The length of PKC keys [default is "1024"]
 -cs,--PKCSigningAlgorithm <arg>               The algorithm used for signing with PKC private keys/verifying with PKC public keys [default is "SHA512withRSA"]
 -f,--staticFilesExpirationTimeSeconds <arg>   The static files expiration time in seconds [default is "600"]
 -l,--logFileName <arg>                        The name of the log file to enable file-level logging [default is "CryptoAC.log"]. If this option 
                                               is not provided, logs will be redirected to the standard output
 -m,--maxThreadsNumber <arg>                   The max number of threads the server will spawn [default is "4"]
 -n,--minThreadsNumber <arg>                   The min number of threads the server will spawn [default is "1"]
 -od,--operationModeDS                         To launch this instance of CryptoAC as a data storage
 -op,--operationModeProxy                      To launch this instance of CryptoAC as a proxy
 -or,--operationModeRM <arg>                   To launch this instance of CryptoAC as a reference monitor. Parameters are the metadata storage URL, 
                                               metadata storage password, metadata storage port, metadata storage username, data storage URL, data 
                                               storage port (separator is the white space)
 -p,--port <arg>                               The port the server will use to listen to connections [default is 7777]
 -s,--sessionExpirationTimeSeconds <arg>       The users session expiration time in seconds [default is "300"]
 -t,--threadsTimeoutMilliseconds <arg>         The timeout of idling threads in milliseconds [default is "30000"]

Please report issues to sberlato@fbk.eu
```


## Constant Values

A collection of constant values such as internal paths for saving temporary files, users' profiles and parameters keys. These constant values are group by inner classes. Some of these constant values are used by the Apache Velocity Engine to render HTML templates. This means that the Apache Velocity Engine has placeholders like "$FormParameters.kUserLoggingIn" and automatically converts the placeholder to the actual value of the "kUserLoggingIn" constant. It also means that, **if you change** the name of a constant, **you have to** change the placeholders in the HTML templates as well.

## File Utilities

The class **FileUtil** is a general purpose utility class for interacting with *CryptoAC* file system (not the system storage after the DAO interface). In particular, **FileUtil** exposes the methods for safely save and delete files on and from the disk.

## POJOs

As pairs of cryptographic keys of roles are often encrypted, the class **EncryptedPKCKeyPair** is a POJO for the encrypted version of pairs of keys.


## Operation Outcome Code

Whenever a method needs to report on the status of an operation, an Operation Outcome Code can be used. The class **OperationOutcomeCode** collects all the numeric codes used in CryptoAC, along with the related message. Apart from 0, all codes are error codes; some codes refer to errors in the logic of the algorithm, some to generic errors, some to specific DAO instances (e.g. AWS) errors and some to server errors. Before creating a new code, check whether an already existing code suits your situation.


## Cryptographic Utilities

TODO after Veronica Cristiano's internship and thesis