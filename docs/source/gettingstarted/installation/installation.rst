.. role:: bash(code)
   :language: bash

************
Installation
************

CryptoAC applies to a large variety of scenarios involving--possibly articulated--deployments with several entities controlled by various agents (e.g., a Cloud service provider, a third-party organization), as explained in the :ref:`Design <Architecture>` section. In other words, CryptoAC is not a simple tool that one just install on her computer. However, it is certainly possible simulate one of these scenarios locally with microservices and containers, as explained below.

.. note::
    If you are interested in a real deployment, feel free to contact the developers at **sberlato@fbk.eu**.


Local Deployment
################

To try a local deployment of CryptoAC on your machine:

0. install `Docker <https://docs.docker.com/get-docker/>`_ and `Docker Compose <https://docs.docker.com/compose/install/>`_;

1. download or clone the `repository <https://github.com/stfbk/CryptoAC>`_ of CryptoAC;

2. open a terminal at this directory and run :bash:`./cleanAllAndBuild.sh && ./startCryptoAC_ALL.sh`. This step may take a while, depending on your internet connection;

3. done! You can now interact with CryptoAC at :bash:`https://0.0.0.0:8443`--ignore the alert concerning the self-signed HTTPS certificate--as described in the :ref:`How To <How To>` section.


Ktor Configuration
##################

CryptoAC uses the following :bash:`application.conf` file as Ktor's configuration. Default values (pointing to a self-signed certificate) can be modified with :ref:`command line arguments <Command Line Configuration>`.

.. code-block:: console

    ktor {
        deployment {
            sslPort = 8443
            sslPort = ${?ktoAtRuntime.deployment.sslPort}
            watch = [ http2 ]
        }
        application {
            modules = [ eu.fbk.st.cryptoac.MainKt.module ]
        }
        security {
            ssl {
                keyStore = server/temporary.jks
                keyAlias = alias
                keyStorePassword = password
                privateKeyPassword = password
                keyStore = ${?ktoAtRuntime.security.keyStore}
                keyAlias = ${?ktoAtRuntime.security.keyAlias}
                keyStorePassword = ${?ktoAtRuntime.security.keyStorePassword}
                privateKeyPassword = ${?ktoAtRuntime.security.privateKeyPassword}
            }
        }
    }


Command Line Configuration
##########################

CryptoAC can be configured with command line arguments supplied through the entrypoint in the :bash:`docker-compose-all.yml` file. For instance, to change the port on which CryptoAC listens to HTTPS connections from (the default) :bash:`8443` to :bash:`8444`, modify the entrypoing command from :bash:`entrypoint: [ "/cryptoac/bin/CryptoAC", "-op"]` to :bash:`entrypoint: [ "/cryptoac/bin/CryptoAC", "-op", "-port=8444"]`. See below for the complete list of options.


.. code-block:: console

    -a,--adminID <arg>                         The ID of the admin [default is admin]
    -i,--key_alias <arg>                       The key alias [default is alias]
    -k,--logLevel <arg>                        The log level [default is info]
    -l,--logFileName <arg>                     The name of the log file [default is CryptoAC.log]
    -od,--operationModeDM                      Run CryptoAC as a DM
    -op,--operationModeCryptoAC                Run CryptoAC as a proxy
    -or,--operationModeRM                      Run CryptoAC as an RM
    -p,--port <arg>                            The HTTPS port the server will use to listen to connections [default is 8443]
    -r,--keystore_private_key_password <arg>   The password of the private key [default is password]
    -s,--keystore <arg>                        The keystore [default is server/temporary.jks]
    -w,--keystore_password <arg>               The password of the keystore[default is password]

    Please report issues at https://github.com/stfbk/CryptoAC/issues or to sberlato@fbk.eu

