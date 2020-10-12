docker rm cryptoac_rm_1
docker rm cryptoac_ms_1
docker rm cryptoac_ds_1
docker rm cryptoac_proxy_1

docker rmi cryptoac_rm
docker rmi cryptoac_ms
docker rmi cryptoac_ds
docker rmi cryptoac_proxy

docker-compose --env-file .env.dev -f ./docker-compose-staticIP.yml up
