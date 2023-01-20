#!/bin/bash

newgrp docker << END
    docker build -t cryptoac_mosquitto_dynsec --file ./DockerFileMosquittoDynSec .
    docker build -t cryptoac_mosquitto_no_dynsec --file ./DockerFileMosquittoNoDynSec .
END