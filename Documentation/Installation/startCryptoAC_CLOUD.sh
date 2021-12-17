#!/bin/bash

newgrp docker << END
    docker-compose --env-file .cloud.env.dev -f ./docker-compose-cloud.yml up $1
END