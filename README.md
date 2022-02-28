# CryptoAC

Cloud-Edge services and the Internet of Things have become pervasive in our society leading to the rise of, to mention a few application scenarios, industry 4.0, smart cities and intelligent mobility. All these interconnected devices and services **use, store and exchange** across the network a large amount of **sensitive data**. However, the confidentiality and integrity of these data are often threatened by external attackers, malicious insiders and "honest-but-curious" service providers.

*CryptoAC* is an open-source tool for the E2E protection of sensitive data through cryptographic enforcement of access control policies. In other words, *CryptoAC* employs cryptography to guarantee the security of sensitive data in-transit, in-use and at-rest while regulating accesses to the data. Differently from traditional security solutions, *CryptoAC* can be deployed even when **a central fully-trusted agent is missing**. Hence, organizations can use *CryptoAC* in scenarios involving untrusted or partially-trusted agents only, such as curious Cloud-Edge service providers, unattended IoT devices and generic third parties. 

*CryptoAC* is written in (multiplatform) Kotlin and comes with an easy **microservice-based architecture** including an optimisation step to maximize the performance and security of the deployment. Moreover, *CryptoAC* is highly modular, can easily be extended to fit the needs of new scenarios and its APIs allow for straightforward integration with other services.


## How To Run *CryptoAC*

CryptoAC is still under development. To try a local installation through Docker, please give a quick read to the [**documentation**](./Documentation/) and check the [**installation instructions**](./Documentation/Installation/). If you are interested in a real deployment or you are just curious and want to know more, feel free to contact the developers at **sberlato@fbk.eu**.


## TradeOffBoard

It is possible to optimize the security and performance of the architecture of *CryptoAC* with a dedicated web dashboard called *TradeOffBoard*. In detail, *TradeOffBoard* allows identifying the architecture striking the best possible balance between security goals and objectives of other nature (e.g., performance requirements such as scalability and reliability).


## Related Publications

*CryptoAC* is the subject of several scientific publications describing its design, architecture and features:
* [**[1] A Pragmatic Approach to Handle “Honest but Curious” Cloud Service Providers: Cryptographic Enforcement of Dynamic Access Control Policies**](https://github.com/StefanoBerlato/Master-Thesis) - this master thesis presented at the University of Trento in 2019 illustrated the early concept and design of *CryptoAC*;
* [**[2] Exploring Architectures for Cryptographic Access Control Enforcement in the Cloud for Fun and Optimization**](https://stefanoberlato.it/publications/pdf/CryptoAC.pdf) - this conference paper formalizes an architectural model for cryptographic access control schemes and proposes an optimisation problem to find the best architecture for a given Cloud-based scenario;
* [**[3] Cryptographic Enforcement of Access Control Policies in the Cloud: Implementation and Experimental Assessment**](https://stefanoberlato.it/publications/pdf/SECRYPT21.pdf) - this conference paper combines *CryptoAC* and an early version of *TradeOffBoard* in a toolchain named COERCIVE, short for CryptOgraphy killEd (the honest but) cuRious Cloud servIce proVidEr;
* [**[4] Formal Modelling and Automated Trade-Off Analysis of Enforcement Architectures for Cryptographic Access Control in the Cloud**](https://stefanoberlato.it/publications/pdf/TOPS21.pdf)- this journal article extends the work in [2] with a more detailed trade-off analysis and further security considerations.
