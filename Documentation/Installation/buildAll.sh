#!/bin/bash

newgrp docker << END
    docker rmi cryptoac_mosquitto cryptoac_mysql cryptoac_redis cryptoac_opa cryptoac_cryptoac
END

for d in */ ; do
    cd $d
    chmod +x "./build.sh" 
    "./build.sh"
    cd ..
done

echo "built_all_end_of_script"
