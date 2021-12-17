#!/bin/bash

newgrp docker << END
    docker-compose --env-file .proxy.env.dev -f ./docker-compose-proxy.yml up $1
END