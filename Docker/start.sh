sudo docker rm docker_rm_1
sudo docker rm docker_ms_1
sudo docker rm docker_ds_1
sudo docker rm docker_proxy_1

sudo docker rmi docker_rm
sudo docker rmi docker_ms
sudo docker rmi docker_ds
sudo docker rmi docker_proxy

sudo docker-compose --env-file .env.dev -f ./docker-compose-staticIP.yml up
