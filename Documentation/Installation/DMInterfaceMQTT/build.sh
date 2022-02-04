#!/bin/bash

newgrp docker << END
    docker build -t cryptoac_mosquitto --file ./DockerFileMosquitto .
END