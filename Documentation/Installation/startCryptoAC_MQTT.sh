#!/bin/bash

newgrp docker << END
    docker-compose --env-file .mqtt.env.dev -f ./docker-compose-mqtt.yml up $1
END