.. role:: bash(code)
   :language: bash

*****************
What is CryptoAC?
*****************

CryptoAC (*Cryptographic Access Control*) provides end-to-end protection of sensitive data--such as documents, files and messages--through **cryptographic enforcement of access control policies**.

CryptoAC is an open-source tool written in the (multiplatform) Kotlin language; it comes either with an easy **microservice-based** :ref:`architecture <Architecture>` including an :ref:`optimisation step <TradeOffBoard>` to maximise the performance and the security of the deployment or, potentially, even as a programming library or plugin. CryptoAC is highly :ref:`modular <CryptoAC Modules>`, can be easily extended to fit the needs of new scenarios and its :ref:`APIs <CryptoAC APIs>` allow for straightforward integration with other services.

.. note::
   CryptoAC can be deployed in JVM-based environments only. Support for native and mobile environments is currently under development.

   


Motivation
##########

Cloud-Edge services, blockchain-based applications and the Internet of Things (IoT) have become pervasive in our society leading to the rise of, to mention a few scenarios, industry 4.0, smart cities and intelligent mobility. All these interconnected devices and services **use, store and exchange** a large amount of **sensitive data**. However, the `steady rise <https://www.enisa.europa.eu/publications/enisa-threat-landscape-2020-data-breach>`_ of cyber attacks--along with increasingly stringent privacy regulations and the presence of "honest but curious" service providers--requires greater security guarantees for data protection, especially given the impossibility to rely solely on curious providers for enforcing access control policies (see :ref:`[2] <References>`).

In this context, CryptoAC guarantees end-to-end protection of sensitive data through **cryptographic access control**. Differently from traditional security mechanisms enforcing centralized access control such as `XACML <https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=xacml>`_ and `OPA <https://www.openpolicyagent.org/>`_, CryptoAC enforces access control in a decentralized fashion, being therefore suitable for use in complex scenarios involving untrusted or partially trusted agents. For more details on CryptoAC, see the :ref:`Design <Architecture>` section.


Ok, But What Does CryptoAC Actually Do?
***************************************

Consider an organization (e.g., a medical center) in the process of digitalizing its IT infrastructure and moving it to the **Cloud**. Besides technical concerns, the organization has to reason about the security of its (**possibly sensitive**) data and those of its customers, as :ref:`previously discussed <Motivation>`. In this context, CryptoAC can be installed on the employees' devices to help the organization in protecting the data so that neither **external attackers** nor **malicious insiders** (e.g., disgruntled employees) nor the "honest but curious" Cloud service provider itself can access the data. In other words, CryptoAC allows employees to upload, share and collaborate over sensitive files and documents through the Cloud securely.

Concretely, CryptoAC employs advanced and robust cryptographic primitives to enforce rich and expressive access control policies over sensitive data--a methodology known as **cryptographic access control**--which amounts at encrypting data through symmetric cryptography and then distributing the symmetric keys--which embody the permission to read the encrypted data--to authorized users with asymmetric cryptography. This is far from being trivial, especially when considering the issues--such as balancing performance with the need of refreshing cryptographic keys and the associated ciphertexts--arising when, e.g., distributing and revoking permissions (see :ref:`[1--4] <References>`).

Intuitively, this is just one possible scenario; for more information on how CryptoAC can be used, see the :ref:`Design <Architecture>` section.


Features
########

.. warning::
   This section is under construction.


..
   See below for potential content of this section
   * **Video** - include video

   * **Flexibile** - CryptoAC has master and service operation modes to fit the need of several scenarios 

   * **Open-source** - CryptoAC combines cutting-edge **academic research** with emerging and established development paradigms and technologies, guaranteeing advanced functionalities and security in a portable and flexible tool. CryptoAC is the subject of several scientific publications describing its design, architecture and features:

   * **Developed in Kotlin** - CryptoAC is developed in `Kotlin <https://kotlinlang.org/>`_, a modern programming language allowing multiplatform deployment covering native (macOS, Linux, Windows), mobile (Android, iOS) and JVM-based environments. Hence, CryptoAC can potentially be used in several platforms as a library or plugin of a larger project. 

   .. note::
      As of now, CryptoAC can be deployed in JVM-based environments only; native and mobile support is currently under development.

   * **As a Microservice** - CryptoAC also comes as a Docker microservice exposing RESTful APIs returning :bash:`JSON` responses to favour flexibility, modularity, scalability and easy integration with other services.

   * **Optimisation Step** - TradeOffBoard 

   * **Adapt to Any Scenario** - CryptoAC is highly modular, service/master, etc

   * **Easily Extensible** - CryptoAC is highly modular, service/master, etc


Background
##########

CryptoAC is the subject of several scientific publications describing its design, architecture and features:

.. note::
   Always refer to this documentation for up-to-date information on CryptoAC, as the following publications may be outdated.

* `End-to-End Protection for IoT Through Cryptographic Access Control <https://stefanoberlato.it/publications/pdf/DBSec22.pdf>`_ - extending the capabilities of CryptoAC for IoT environments based on the MQTT protocol;
* `Formal Modelling and Automated Trade-Off Analysis of Enforcement Architectures for Cryptographic Access Control in the Cloud <https://stefanoberlato.it/publications/pdf/TOPS21.pdf>`_ - extending previous work with a more detailed trade-off analysis and further security considerations;
* `Cryptographic Enforcement of Access Control Policies in the Cloud: Implementation and Experimental Assessment <https://stefanoberlato.it/publications/pdf/SECRYPT21.pdf>`_ - including an optimisation step to maximize the performance and the security of the deployment of CryptoAC;
* `Exploring Architectures for Cryptographic Access Control Enforcement in the Cloud for Fun and Optimization <https://stefanoberlato.it/publications/pdf/CryptoAC.pdf>`_ - formalising an architectural model for cryptographic access control schemes and proposing an optimisation problem on the best architecture for Cloud-based scenarios;
* `A Pragmatic Approach to Handle “Honest but Curious” Cloud Service Providers: Cryptographic Enforcement of Dynamic Access Control Policies <https://github.com/StefanoBerlato/Master-Thesis>`_ - presenting the early concept and design of CryptoAC;


Authors
#######

CryptoAC is being developed and maintained by the `Security&Trust <https://st.fbk.eu/>`_ research unit of the `Bruno Kessler Foundation <https://fbk.eu/>`_, Italy. If you are interested in using CryptoAC or you are just curious and want to know more, feel free to contact the developers at `sberlato@fbk.eu`.


License
#######

.. warning::
   This section is under construction.

..
   CryptoAC is open source licensed under the GNU AGPL v3.0 license when including the `Kotlin bindings <https://github.com/StefanoBerlato/kotlin-multiplatform-openabe>`_ for the `OpenABE cryptographic library <https://github.com/zeutro/openabe>`_. Otherwise, CryptoAC is open source licensed under the Apache License 2.0 license.
