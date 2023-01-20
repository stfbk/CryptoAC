#!/bin/bash

echo "clean_all_start_of_script"

containersToRM=$(docker ps -a --filter=name="installation_cryptoac_*" -q | tr '\n' ' ')
imagesToRM=$(docker images --filter=reference="cryptoac_*" -q | tr '\n' ' ')

newgrp docker << END
    docker rmi -f $imagesToRM
END

newgrp docker << END
    docker rm -f $containersToRM
END

echo "clean_all_end_of_script"
