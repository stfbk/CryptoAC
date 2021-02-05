/* 
 * What follows is related to CryptoAC administrator, not to the database administrator.
 * Remember to separate the two administrators and to choose and change the password 'password'.
 * Leave the rest untouched.
 */
DROP USER IF EXISTS 'admin'@'%';
CREATE USER 'admin'@'%' IDENTIFIED BY 'password';
GRANT SELECT,INSERT,UPDATE,DELETE ON *.* TO 'admin'@'%' WITH GRANT OPTION;
GRANT REFERENCES ON *.* TO 'admin'@'%';
GRANT CREATE USER ON *.* TO 'admin'@'%';
GRANT CREATE VIEW ON *.* TO 'admin'@'%';
GRANT TRIGGER ON *.* TO 'admin'@'%';
GRANT CREATE ON *.* TO 'admin'@'%';
GRANT DROP ON *.* TO 'admin'@'%';
GRANT DELETE ON *.* TO 'admin'@'%';
GRANT SYSTEM_VARIABLES_ADMIN ON *.* TO 'admin'@'%';
FLUSH PRIVILEGES;