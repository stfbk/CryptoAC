/* (drop if exists) create and set new schema */
DROP SCHEMA IF EXISTS `databaseCryptoAC`;
CREATE SCHEMA `databaseCryptoAC`;
USE `databaseCryptoAC`;

SET GLOBAL log_bin_trust_function_creators = 1;

/* remember that MySQL automatically creates indexes for primary keys and unique fields
   other indexes that may be useful:
	- RoleTuple table
		- username
        - rolename
        - rolename and role version number
	- PermissionTuple table
		- rolename
        - filename
        - rolename and filename
        - filename and file version number
*/

/* re-create tables */
CREATE TABLE `users` (
  `username` varchar(50),
  `userToken` char(50) NOT NULL UNIQUE,
  `publicEncryptingKey` varchar(500) NOT NULL,
  `publicSigningKey` varchar(500) NOT NULL,
  `statusFlag` char(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `roles` (
  `roleName` varchar(50),
  `roleToken` char(50) NOT NULL UNIQUE,
  `publicEncryptingKey` varchar(500) NOT NULL,
  `publicSigningKey` varchar(500) NOT NULL,
  `roleVersionNumber` int NOT NULL,
  `statusFlag` char(20) NOT NULL,
  PRIMARY KEY (`roleName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `files` (
  `fileName` varchar(50),
  `fileToken` char(50) NOT NULL UNIQUE,
  `encryptFileVersionNumber` int NOT NULL,
  `statusFlag` char(20) NOT NULL,
  PRIMARY KEY (`fileName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `roleTuples` (
  `username` varchar(50),
  `roleName` varchar(50),
  `roleVersionNumber` int NOT NULL,
  `encryptedRolePublicEncryptingKey` varchar(3000) NOT NULL,
  `encryptedRolePrivateEncryptingKey` varchar(3000) NOT NULL,
  `encryptedRolePublicSigningKey` varchar(3000) NOT NULL,
  `encryptedRolePrivateSigningKey` varchar(3000) NOT NULL,
  `signature` char(172) NOT NULL,
  PRIMARY KEY (`username`,`roleName`),
  KEY `fk_roleTuples_username_idx` (`username`),
  KEY `fk_roleTuples_roleName_idx` (`roleName`),
  CONSTRAINT `fk_roleTuples_username` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_roleTuples_roleName` FOREIGN KEY (`roleName`) REFERENCES `roles` (`rolename`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `permissionTuples` (
  `roleName` varchar(50),
  `fileName` varchar(50),
  `symmetricFileKeyVersionNumber` int NOT NULL,
  `roleToken`char(50),
  `fileToken` char(50),
  `roleVersionNumber` int NOT NULL,
  `encryptedSymmetricFileKey` varchar(3000) NOT NULL,
  `permission` varchar(50) NOT NULL,
  `userToken` char(50) NOT NULL,
  `signature` char(172) NOT NULL,
  PRIMARY KEY (`roleName`,`fileName`, `symmetricFileKeyVersionNumber`),
  KEY `fk_permissionTuples_roleName_idx` (`roleName`),
  KEY `fk_permissionTuples_fileName_idx` (`fileName`),
  KEY `fk_permissionTuples_roleToken_idx` (`roleToken`),
  KEY `fk_permissionTuples_fileToken_idx` (`fileToken`),
  KEY `fk_permissionTuples_userToken_idx` (`userToken`),
  CONSTRAINT `fk_permissionTuples_roleName`  FOREIGN KEY (`roleName`)  REFERENCES `roles` (`rolename`),
  CONSTRAINT `fk_permissionTuples_fileName`  FOREIGN KEY (`fileName`)  REFERENCES `files` (`filename`),
  CONSTRAINT `fk_permissionTuples_roleToken` FOREIGN KEY (`roleToken`) REFERENCES `roles` (`roleToken`),
  CONSTRAINT `fk_permissionTuples_fileToken` FOREIGN KEY (`fileToken`) REFERENCES `files` (`fileToken`),
  CONSTRAINT `fk_permissionTuples_userToken` FOREIGN KEY (`userToken`) REFERENCES `users` (`userToken`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `fileTuples` (
  `fileName` varchar(50),
  `fileToken` char(50),
  `elementToken` char(50) NOT NULL,
  `elementSigner` char(50) NOT NULL,
  `decryptFileVersionNumber` int NOT NULL,
  `signature` char(172) NOT NULL,
  PRIMARY KEY (`fileName`),
  KEY `fk_fileTuples_fileName_idx`  (`fileName`),
  KEY `fk_fileTuples_fileToken_idx` (`fileToken`),
  CONSTRAINT `fk_fileTuples_fileName`  FOREIGN KEY (`fileName`)  REFERENCES `files` (`filename`),
  CONSTRAINT `fk_fileTuples_fileToken` FOREIGN KEY (`fileToken`) REFERENCES `files` (`fileToken`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/* note how users can modify ONLY their public key and ONLY once */
CREATE VIEW `user_specific_users` (`publicEncryptingKey`, `publicSigningKey`,  `userToken`, `statusFlag`) AS
    SELECT
        `users`.`publicEncryptingKey` AS `publicEncryptingKey`,
        `users`.`publicSigningKey` AS `publicSigningKey`,
        `users`.`userToken` AS `userToken`,
        `users`.`statusFlag` AS `statusFlag`
    FROM
        `users`
    WHERE
        `users`.`username` = (CONVERT( SUBSTRING_INDEX(USER(), '@', 1) USING UTF8MB4)) AND
        `users`.`publicEncryptingKey` = 'mock' AND
        `users`.`publicSigningKey` = 'mock';

/* users can access only their role tuples */
CREATE VIEW `user_specific_roleTuples`
(`username`, `roleName`, `roleVersionNumber`, `encryptedRolePublicEncryptingKey`,
 `encryptedRolePrivateEncryptingKey`, `encryptedRolePublicSigningKey`,
 `encryptedRolePrivateSigningKey`, `signature`) AS
    SELECT
        `roleTuples`.`username` AS `username`,
        `roleTuples`.`roleName` AS `roleName`,
        `roleTuples`.`roleVersionNumber` AS `roleVersionNumber`,
        `roleTuples`.`encryptedRolePublicEncryptingKey` AS `encryptedRolePublicEncryptingKey`,
        `roleTuples`.`encryptedRolePrivateEncryptingKey` AS `encryptedRolePrivateEncryptingKey`,
        `roleTuples`.`encryptedRolePublicSigningKey` AS `encryptedRolePublicSigningKey`,
        `roleTuples`.`encryptedRolePrivateSigningKey` AS `encryptedRolePrivateSigningKey`,
        `roleTuples`.`signature` AS `signature`
    FROM
        `roleTuples`
    WHERE
        `roleTuples`.`username` = (CONVERT( SUBSTRING_INDEX(USER(), '@', 1) USING UTF8MB4));

/* users can access only the permissions they have */
CREATE VIEW `user_specific_permissionTuples`
(`roleName`, `fileName`, `symmetricFileKeyVersionNumber`, `roleToken`, `fileToken`,
 `roleVersionNumber`, `encryptedSymmetricFileKey`, `permission`, `userToken`, `signature`) AS
    SELECT
        `permissionTuples`.`roleName` AS `roleName`,
        `permissionTuples`.`fileName` AS `fileName`,
        `permissionTuples`.`symmetricFileKeyVersionNumber` AS `symmetricFileKeyVersionNumber`,
        `permissionTuples`.`roleToken` AS `roleToken`,
        `permissionTuples`.`fileToken` AS `fileToken`,
        `permissionTuples`.`roleVersionNumber` AS `roleVersionNumber`,
        `permissionTuples`.`encryptedSymmetricFileKey` AS `encryptedSymmetricFileKey`,
        `permissionTuples`.`permission` AS `permission`,
        `permissionTuples`.`userToken` AS `userToken`,
        `permissionTuples`.`signature` AS `signature`
    FROM
        `permissionTuples`
    WHERE
        `permissionTuples`.`roleName` IN (SELECT `user_specific_roleTuples`.`roleName` FROM `user_specific_roleTuples`);

/* users can access only the files they have permission over */
CREATE VIEW `user_specific_fileTuples`
(`fileName`, `fileToken`, `elementToken`, `elementSigner`, `decryptFileVersionNumber`,
 `signature`) AS
    SELECT
        `fileTuples`.`fileName` AS `fileName`,
        `fileTuples`.`fileToken` AS `fileToken`,
        `fileTuples`.`elementToken` AS `elementToken`,
        `fileTuples`.`elementSigner` AS `elementSigner`,
        `fileTuples`.`decryptFileVersionNumber` AS `decryptFileVersionNumber`,
        `fileTuples`.`signature` AS `signature`
    FROM
        `fileTuples`
    WHERE
        `fileTuples`.`fileName` IN (SELECT `user_specific_permissionTuples`.`fileName` FROM `user_specific_permissionTuples`);


/* Automatically insert the tokens of the role and
the file when inserting a new permission tuple).
We do not need to worry about update, as only the admin has this privilege and
the tokens are not modified by update operations */
DELIMITER //
CREATE TRIGGER insertTokensPermissionTuple BEFORE INSERT ON permissionTuples
FOR EACH ROW BEGIN
 SET NEW.roleToken = (SELECT roleToken FROM roles WHERE roles.roleName = NEW.roleName LIMIT 1);
 SET NEW.fileToken = (SELECT fileToken FROM files WHERE files.fileName = NEW.fileName LIMIT 1);
END //

/* Automatically insert the tokens of the file
when inserting a new file tuple).
We do not need to worry about update, as only the admin has this privilege and
the tokens are not modified by update operations */
DELIMITER //
CREATE TRIGGER insertTokenFileTuple BEFORE INSERT ON fileTuples
FOR EACH ROW BEGIN
 SET NEW.fileToken = (SELECT fileToken FROM files WHERE files.fileName = NEW.fileName LIMIT 1);
END //