#!/bin/bash

echo "Downloading the base docker image for the MQTT broker."
docker pull eclipse-mosquitto

echo "Building a custom docker image with a different conf file for the MQTT broker."
docker build -t mosquitto --file ./DockerFileMosquitto .
