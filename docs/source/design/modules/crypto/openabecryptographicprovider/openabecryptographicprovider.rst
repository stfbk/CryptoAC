.. role:: bash(code)
   :language: bash

******************************
OpenABE Cryptographic Provider
******************************

`OpenABE <https://github.com/zeutro/openabe>`_ is an open source cryptographic library providing attribute-based encryption, i.e., allowing to enforce attribute-based access control policies through cryptography. To use OpenABE from CryptoAC, we rely on an open-source `Kotlin multiplatform wrapper <https://github.com/StefanoBerlato/kotlin-multiplatform-openabe>`_. 

OpenABE uses cryptography based on elliptic curves to generate public-private keys and relies on `OpenSSL <https://www.openssl.org/>`_ for digital signatures. OpenABE supports authenticated encryption with associated data (AEAD), which is a more robust and secure variant of authenticated encryption allowing to bind the ciphertext to the context where it is supposed to be used (to, e.g., avoid replay attacks). In this regard, OpenABE proposes the use of 256-bit AES in Galois/Counter Mode (GCM) from the OpenSSL library.
