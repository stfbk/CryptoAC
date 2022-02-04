# CryptoAC | Documentation | Metadata Manager

> Last Update: 04/02/2022

## Introduction

The Metadata Storage (MM) stores metadata such as public cryptographic keys and the AC policy. The following implementations of the MM are available (between square parenthesis there is the list of scenarios compatible with the related implementation):
* [CLOUD, MQTT] **MMMySQL** - the MM is implemented with a MySQL8+ database. The database is initialized with a [**MySQL script**](./mysqldatabase.sql), while the tables, views and triggers are created by *CryptoAC* at run-time.
To hide (potentially sensitive) identifiers and avoid the disclosure of the AC policy to the users, we limit users' *SELECT* privileges to grant access to tokens only and employ views and row-level permissions. Views automatically filter entries not associated with the user querying the database, whose username is available through the USER() MySQL function. This implies that the username with which the user connects to the database is the same the user has in the AC policy. In this way, each user knows his portion of the AC policy only and we respect the need-to-know principle (i.e., each user has access only to the information strictly needed to accomplish his task). MMMySQL has 10 tables. To avoid stored-XSS attacks, all database inputs and outputs are sanitized in the proxy; inputs are sanitized through the **PreparedStatement** Java class, while outputs are sanitized using the **OWASP Java Encoder**. All encrypted values are converted in Base64 before being stored in the database.
* [CLOUD, MQTT] **MMRedis** - the MM is implemented with a Redis in-memory data structure store. Redis is initialized with a [**configuration script**](./redis.conf).