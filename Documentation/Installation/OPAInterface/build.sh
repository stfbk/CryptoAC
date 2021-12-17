#!/bin/bash

newgrp docker << END
    docker build -t cryptoac_opa --file ./DockerFileOPA .
END