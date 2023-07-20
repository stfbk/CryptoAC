#!/bin/bash

newgrp docker << END
    docker build -t cryptoac_cryptoac --file ./DockerFileCryptoAC .
END