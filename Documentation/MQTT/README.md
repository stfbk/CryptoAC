# CryptoAC | Documentation | MQTT

> Last Update: 04/02/2022


## Introduction

*CryptoAC* implements a role-based CAC scheme based on hybrid cryptography to allow entities to securely exchange messages through an MQTT broker. The use of hybrid cryptography combines traditional asymmetric cryptography and digital certificates with symmetric cryptography for fast en/decryption. A single administrator creates topics and allows entities to subscribe and publish messages, while the integration with the Mosquitto Dynamic Security Plugin (dynsec) provides an additional layer of security.