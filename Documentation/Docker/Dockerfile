# https://runnable.com/docker/java/dockerize-your-java-application

# Dockerfile

FROM  phusion/baseimage:0.9.17

MAINTAINER  Berlato Stefano sberlato@fbk.eu

RUN echo "deb http://archive.ubuntu.com/ubuntu trusty main universe" > /etc/apt/sources.list

RUN apt-get -y update

# This enables add-apt-repository for use later in the process.
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y -q python-software-properties software-properties-common

