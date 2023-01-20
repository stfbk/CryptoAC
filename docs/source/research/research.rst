***************
Research topics
***************

Below, we present the research topics (that can be either completed, on-going or just future directions) regarding CryptoAC.


Completed
#########

* **TradeOffBoard** - optimization methodology based on a Multi-Objective Combinatorial Optimization Problem (MOCOP) to select the best possible architecture (i.e., the assignment of entities to security domains) to deploy a CAC scheme for the trust assumptions and requirements of a given Cloud-based scenario :ref:`[1, 2] <References>`;
* **COERCIVE** - short for CryptOgraphy killEd (the honest but) cuRious Cloud servIce proVidEr, COERCIVE is a toolchain composed of two tools: TradeOffBoard (discussed in :ref:`[1, 2] <References>`) and CryptoAC, which enforces Role-based CAC for data at-rest in the Cloud by deploying the architecture selected with TradeOffBoard :ref:`[3] <References>`;
* **E2E Protection for IoT** - being the confidentiality and integrity of data in IoT scenarios of the utmost importance, we enhance CryptoAC by designing (and implementing) a novel Role-based CAC scheme for data in-transit in publish-subscribe protocols for IoT scenarios :ref:`[4] <References>`.


On-going
########

* **Workflow-based Performance Evaluation Methodology** - methodology providing the means to measure the performance of (cryptographic but not only) AC enforcement mechanisms through the simulation of realistic deployment scenarios;
* **ABE for CryptoAC** - design of an attribute-based CAC scheme capable of protecting both data at-rest in the Cloud and data in-transit in publish-subscribe protocols (work stemming from :ref:`[5] <References>`).


Future Directions
#################

* **CAC in Decentralised and Distributed Scenarios** - design and implementation of a CAC scheme for cross-organizational multi-administrator scenarios based on the blockchain technology (work stemming from :ref:`[6, 7] <References>`). Besides revising the design proposed in :ref:`[6] <References>` (e.g., can the RM collude with a user assigned to an unauthorised role?), this includes the implementation and evaluation of the proposed approach;
* **Hybrid AC Enforcement and Negative Permissions** - design a cryptographic mechanism to enforce negative permissions and allow hybrid AC enforcement (i.e., joining cryptographic and traditional enforcement);
* **Protection for Data In-Use** - investigate the use of hardware (e.g., TEE) and software (e.g., functional/homomorphic encryption) solutions to protect the confidentiality of sensitive data in-use;
* **Key Recovery for CAC** - investigate the feasibility and use of key recovery protocols in CAC to mitigate eventual key losses;
* **Multi-Party Computation for CAC** - investigate the feasibility and use of multi-party computation protocols in CAC to enhance the security of (shared) secret cryptographic keys.
