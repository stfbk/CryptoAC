# CryptoAC | Documentation | MQTT

*CryptoAC* allows MQTT clients (e.g., IoT devices) to securely exchange messages through an MQTT broker by providing E2E protection for sensitive data in-transit. 

In detail, *CryptoAC* employs hybrid cryptography combining traditional asymmetric cryptography and digital certificates with symmetric cryptography for fast en/decryption.  A single administrator creates topics and allows entities to subscribe and publish messages, while the integration with the Mosquitto Dynamic Security Plugin (DYNSEC) provides an additional layer of security.

The documentation is still under writing; if you are interested in a real deployment or you are just curious and want to know more, feel free to contact the developers at **sberlato@fbk.eu**.