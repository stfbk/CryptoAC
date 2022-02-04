#!/bin/bash

newgrp docker << END
    docker build -t cryptoac_mysql --file ./DockerFileMySQL .
END