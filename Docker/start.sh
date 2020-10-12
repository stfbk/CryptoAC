docker rm docker_rm_1
docker rm docker_ms_1
docker rm docker_ds_1
docker rm docker_proxy_1

docker rmi docker_rm
docker rmi docker_ms
docker rmi docker_ds
docker rmi docker_proxy

docker-compose --env-file .env.dev -f ./docker-compose-staticIP.yml up
