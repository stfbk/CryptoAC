# CryptoAC | CryptoAC | Documentation | Installation

> Last Update: 05/02/2020

## One Docker to rule them all

*CryptoAC* is shipped in a Docker container for an easy orchestration and portability across different platforms. To enhance maintenability and simplify deployments, each instance of *CryptoAC* (i.e., each docker container) can be configured to act as a proxy, as the RM or as the DS. In this way, CryptoAC can be used in multiple ways and support the entire deployment. The configuration of the entity that an instance of *CryptoAC* is acting as is called "**Operation Mode**".


## Toy Deployment

To try *CryptoAC* on your machine:

1. an environment with internet access and "docker" and "docker-compose" is required. We recommend (but it is not mandatory) to use a virtual machine, so to avoid installing additional software on your laptop. We suggest VirtualBox (https://www.virtualbox.org/) as VM manager and OsBoxes (https://www.osboxes.org/ubuntu/) to download the VM.
2. ensure ports 80 and 3306 are available for binding; 
3. open a terminal and navigate to the directory where this file is located;
4. type 'chmod +x start.sh'. Then, run 'sudo ./start.sh' and wait until the Docker containers started. Please wait a minute to be sure all services are up and running (you may check the log of docker-compose in the terminal);
5. open a browser at http://localhost to interact with *CryptoAC*. Login with any username and password;
6. when required to configure the profile, upload the [**configuration file**](./configurationFile.json) you find in this directory.
7. all operations are then straightforward, except the creation of a new user. To create a new user:
    * click on the "Add User" action on the top-left corner. Provide the username (remember it) and click on "ADD USER". You will be shown a successful alert. Click on "Download User Data" and save the JSON file;
    * open a new session in the browser (e.g., open a new tab in incognito mode), go to 'http://localhost/' and log in as the new user, using the username of the new user as both name and password;
    * configure the profile of the user with the JSON file just downloaded;
    * click on the "EDIT PROFILE" blue button and wait for the successful alert;
    * you can now go back to the administrator tab
8. To tear down the environment, type 'chmod +x clean.sh' and then run 'sudo ./clean.sh' and wait until the Docker containers are removed.


**Troubleshoot.**
* if you do not see the login page of the proxy at 'http://localhost', ensure that (i) the Docker containers started (check the logs in the terminal), (ii) you are connecting to port 80 (http://localhost:80) and (iii) you are using a browser on the same host on which you started the Docker containers;
* if you ever get an error alert saying "Unauthorized - you must be authenticated to access this resource (401)", probably your session expired. Log out and log in again;
* if you ever get an error alert saying "The user related to the operation was created but not initialized (500)", probably you created the user but did not follow steps 14 to 18;
* if you add a file as a user but then you do not see the file in the table of the user's interface, that's normal. Currently, the theoretical formulation of the CAC scheme does not grant any permission to the user who uploads a file. Instead, the file will appear on the table of the admin's interface. To allow a user to read a file, perform the following actions as in the admin's interface: (i) create a role, (ii) assign the user to the role and (iii) assign permission to the role over the file; 
* for other issues, feel free to contact the developers at usenixatc21submission11@gmail.com.


## Real Deployment

Please feel free to get in touch with the developers (sberlato@fbk.eu) for more information on a real deployment,