#!/bin/bash

newgrp docker << END
    docker build -t cryptoac_redis --file ./DockerFileRedis .
END