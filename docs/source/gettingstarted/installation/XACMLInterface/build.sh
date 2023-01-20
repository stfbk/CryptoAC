#!/bin/bash

newgrp docker << END
    docker build -t cryptoac_xacml --file ./DockerFileXACML .
END