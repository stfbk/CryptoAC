.. role:: bash(code)
   :language: bash

*****************************
Sodium Cryptographic Provider
*****************************

`Sodium <https://libsodium.gitbook.io/doc/>`_ is a modern cryptographic library whose security has been thoroughly `audited <https://www.privateinternetaccess.com/blog/libsodium-audit-results/>`_. To use Sodium from CryptoAC, we rely on an open-source `Kotlin multiplatform wrapper <https://github.com/ionspin/kotlin-multiplatform-libsodium>`_. 

Sodium uses the Elliptic Curves Diffie-Hellman (ECDH) algorithm (X25519) to generate public-private keys and the Edwards-curve Digital Signature Algorithm (EdDSA) for digital signatures (Ed25519). Sodium supports authenticated encryption with associated data (AEAD), which is a more robust and secure variant of authenticated encryption allowing to bind the ciphertext to the context where it is supposed to be used (to, e.g., avoid replay attacks). In this regard, Sodium proposes the use of the XSalsa20 symmetric stream cypher (i.e., Salsa20 with 192-bit nonce extension) together with the Poly1305 universal hash function as the best option, instead of using 256-bit AES in Galois/Counter Mode (GCM) with, e.g., the SHA-384 hash function. Indeed, XSalsa20 is faster than (not hardware-accelerated) AES and it achieves homogeneous performance independently of the underlying hardware, enhancing portability.
