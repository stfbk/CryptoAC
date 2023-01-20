.. role:: bash(code)
   :language: bash

***************************
Java Cryptographic Provider
***************************

At Java level, CryptoAC uses the `SUN Java cryptographic provider <https://docs.oracle.com/en/java/javase/11/security/oracle-providers.html>`_.

CryptoAC uses the Rivest-Shamir-Adleman (RSA) algorithm (2048 bits) to generate public-private keys and RSA with SHA512 for digital signatures (2048 bits). The SUN provider supports authenticated encryption with associated data (AEAD), which is a more robust and secure variant of authenticated encryption allowing to bind the ciphertext to the context where it is supposed to be used (to, e.g., avoid replay attacks). In this regard, CryptoAC uses 256-bit AES in Galois/Counter Mode (GCM).
