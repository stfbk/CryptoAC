#!/bin/bash

newgrp docker << END
    docker rm -f installation_cryptoac_mosquitto_1 installation_cryptoac_mysql_1 installation_cryptoac_redis_1 installation_cryptoac_opa_1 installation_cryptoac_proxy_1 installation_cryptoac_rm_1 installation_cryptoac_dm_1

    docker rmi -f cryptoac_mosquitto cryptoac_mysql cryptoac_redis cryptoac_opa cryptoac_cryptoac
END