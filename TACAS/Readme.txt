The Cryptographic Access Control (CAC) scheme we implemented is composed of four software modules:
- Proxy: this module is responsible for interfacing users with data;
- Reference Monitor (RM): this module mediates users' requests to add or write files;
- Data Storage (DS): this module contains metadata (e.g., the AC policy and public keys);
- Metadata Storage (MS): this module contains encrypted files.

CryptoAC is a Java program implementing the proxy, RM and DS modules. We chose to use the official MySQL Docker image for the MS module on top of which we designed the database. CryptoAC is shipped in a Docker container for easy deployment and portability across different platforms and Cloud Service Providers (CSPs). Detailed documentation can be found at https://github.com/stfbk/CryptoAC/tree/master/Documentation.


Requirements:
    - Docker (https://docs.docker.com/engine/install/ubuntu/);
    - Internet Connectivity for downloading Docker images;
    - Ports 80, 3306, 7778 and 7779 available for binding;
    
    
For a local deployment (i.e., all four software modules running on the host):
1. Ensure you have the needed requirements;
2. Open a terminal and run 'start.sh' (you may need root privileges, depending on how you installed the Docker engine) and wait until the Docker containers started. The first time Docker will need to download Docker images. Depending on your network connectivity, this may take some minutes;
3. Open the browser at 'http://localhost'. What you will see is the login page of the proxy (see ./img/proxyLogin.png);
4. Insert 'admin' 'admin' as credentials. What you will see is the interface of the proxy (see ./img/proxyInterface.png);
5. In the top-right corner, click on the "Select" item and choose "Local". An alert will appear (see ./img/proxyAlert.png);
6. Click the "Ok" blue button on the alert. A form will appear (see ./img/proxyForm.png);
7. Click on the "Or upload a configuration file" text and choose the 'configurationFile.json' file you find in ./CryptoAC. The form will autofill (see ./img/proxyFormFilled.png);
8. Finally, click on the "EDIT PROFILE" blue button and wait for the successful alert. Afterwards, you will see the proxy admin interface (see ./img/proxyAdmin.png) from which you can manage the role-based access control policy. Three tables list users, roles and files. Available actions can be found on the black sidebar on the left. All operations are intuitive, expect the "Add User" one (see below for detailed instructions);
9. Try any operation you want. However, read steps 10 to 14 on how to add a new user.


Add User:
10. Log in as the admin (i.e., ./img/proxyAdmin.png), click on the "Add User" action on the top-left corner, provide the username and click on "ADD USER". You will receive a successful alert (see ./img/proxyAddUser.png). Click on "Download User Data" and save the file;
11. Open a new session in the browser, go to the proxy login page and log in as the new user, using the username as both name and password;
12. Repeat steps 5-6-7, uploading this time the file downloaded in step 10 instead of the "configurationFile.json" file;
13. Finally, click on the "EDIT PROFILE" blue button and wait for the successful alert. Afterwards, you will see the proxy user interface (see ./img/proxyUser.png). Two tables list the roles and files associated with the user (currently, none). Available actions can be found on the black sidebar on the left. All operations are intuitive;
14. Only at this stage, you can now login as the admin to assign roles and permissions to the user.



Troubleshoot:
- if you do not see the login page of the proxy, ensure that (i) the Docker containers started (check the logs in the terminal) and (ii) you are using a browser on the same host on which you started the Docker containers. If not, search for the IP address of the host on which you started the Docker containers;
- if you ever get an error alert saying "Unauthorized - you must be authenticated to access this resource (401)", probably your session expired. Log out and log in again;
- if you ever get an error alert saying "The user related to the operation was created but not initialized (500)", probably you created the user but did not follow steps 11-12-13;
- for other issues, feel free to contact the developer at sberlato@fbk.eu.

