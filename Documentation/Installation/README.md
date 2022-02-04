# CryptoAC | Documentation | Installation

> Last Update: 04/12/2022


## Introduction

Up to now, *CryptoAC* supports two different scenarios, i.e., Cloud and MQTT. Please refer to the installation guide for the chosen scenario.


## CLOuD - Toy Deployment

To try *CryptoAC* locally on your machine for emulating the CLOuD scenario, follow the instructions below:

1. an environment with internet access and "docker" and "docker-compose" packages installed is required;
2. open a terminal and navigate to the directory where this file is located;
3. run "chmod +x *.sh";
4. run "sudo "./cleanAndBuildAll.sh" to build all Docker containers. This step may take up to some minutes, depending on your internet connection;
5. run "sudo ./startCryptoAC_CLOUD.sh". Please wait at least ten seconds to be sure all services are up and running (you may want to check the log of the docker-compose in the terminal);
6. open a browser at https://0.0.0.0:8443 to interact with *CryptoAC*.
7. for the toy deployment, you can log in with any username. The username of the admin is "admin";
8. click on the "Dashboard" option in the sidebar on the left;
9. click on the upload icon next to "Edit or Upload Profile" and select the [**adminCLOUD.json file**](./adminCLOUD.json) you find in this directory;
10. you can now interact with the scenario (e.g., add users, roles, topics) as you please. Note that, whenever you create a user, you will be provided with a JSON file: that file is the profile of the user, so download it and save it;
11. To tear down the environment, run "sudo ./clean.sh" and wait until the Docker containers are removed.


## MQTT - Toy Deployment

To try *CryptoAC* locally on your machine for emulating the MQTT scenario, follow the instructions below:

1. an environment with internet access and "docker" and "docker-compose" packages installed is required;
2. open a terminal and navigate to the directory where this file is located;
3. run "chmod +x *.sh";
4. run "sudo "./cleanAndBuildAll.sh" to build all Docker containers. This step may take up to some minutes, depending on your internet connection;
5. run "sudo ./startCryptoAC_MQTT.sh". Please wait at least ten seconds to be sure all services are up and running (you may want to check the log of the docker-compose in the terminal);
6. open a browser at https://0.0.0.0:8443 to interact with *CryptoAC*.
7. for the toy deployment, you can log in with any username. The username of the admin is "admin";
8. in the "Select the Core Type" card choose "RBAC for MQTT". In the "Select the Metadata Manager" card choose "Redis". Then, click on the "Dashboard" option in the sidebar on the left;
9. click on the upload icon next to "Edit or Upload Profile" and select the [**adminMQTT.json file**](./adminMQTT.json) you find in this directory;
10. you can now interact with the scenario (e.g., add users, roles, topics) as you please. Note that, whenever you create a user, you will be provided with a JSON file: that file is the profile of the user, so download it and save it;
11. To tear down the environment, run "sudo ./clean.sh" and wait until the Docker containers are removed.


## Troubleshooting

* if you do not see the login page of the proxy at 'https://0.0.0.0:8443', ensure that (i) the Docker containers started (check the logs in the terminal), (ii) you are connecting to port 8443 and (iii) you are using a browser on the same host on which you started the Docker containers;
* if you ever get an error alert saying "USER DOES NOT EXIST OR WAS NOT INITIALIZED OR WAS DELETED (Code 37)", probably you created the user but did not initialize it. To do so, log in as the user and configure the profile by uploading the JSON file you downloaded when creating the user.
* for other issues, feel free to contact the developers at sberlato@fbk.eu.


## Real Deployment

Please feel free to get in touch with the developers (sberlato@fbk.eu) for more information on a real deployment.