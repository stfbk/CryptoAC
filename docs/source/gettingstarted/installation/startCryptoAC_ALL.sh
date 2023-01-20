#!/bin/bash

newgrp docker << END
    docker-compose --env-file .all.env.dev -f ./docker-compose-all.yml up $1
END