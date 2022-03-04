/* (drop if exists) create and set new schema */
DROP SCHEMA IF EXISTS `cryptoac`;
CREATE SCHEMA `cryptoac`;
USE `cryptoac`;

/* to enable triggers in the database */
SET GLOBAL log_bin_trust_function_creators = 1;

/* remember that MySQL automatically creates indexes for primary keys and unique fields */

/* re-create tables */
CREATE TABLE `users` (
  `username` varchar(50),
  `userToken` char(20) NOT NULL UNIQUE,
  `asymEncPublicKey` varchar(500) NOT NULL,
  `asymSigPublicKey` varchar(500) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `deletedUsers` (
  `username` varchar(50) NOT NULL,
  `userToken` char(20) NOT NULL,
  `asymEncPublicKey` varchar(500) NOT NULL,
  `asymSigPublicKey` varchar(500) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`username`, `userToken`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `roles` (
  `roleName` varchar(50),
  `roleToken` char(20) NOT NULL UNIQUE,
  `asymEncPublicKey` varchar(500) NOT NULL,
  `asymSigPublicKey` varchar(500) NOT NULL,
  `roleVersionNumber` int NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`roleName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `deletedRoles` (
  `roleName` varchar(50) NOT NULL,
  `roleToken` char(20) NOT NULL,
  `asymEncPublicKey` varchar(500) NOT NULL,
  `asymSigPublicKey` varchar(500) NOT NULL,
  `roleVersionNumber` int NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`roleName`, `roleToken`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `files` (
  `fileName` varchar(50),
  `fileToken` char(20) NOT NULL UNIQUE,
  `symEncKeyVersionNumber` int NOT NULL,
  `status` varchar(20) NOT NULL,
  `enforcement` char(50) NOT NULL,
  PRIMARY KEY (`fileName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `deletedFiles` (
  `fileName` varchar(50) NOT NULL,
  `fileToken` char(20) NOT NULL,
  `symEncKeyVersionNumber` int NOT NULL,
  `status` varchar(20) NOT NULL,
  `enforcement` char(50) NOT NULL,
  PRIMARY KEY (`fileName`, `fileToken`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `roleTuples` (
  `username` varchar(50),
  `roleName` varchar(50),
  `encryptedAsymEncPublicKey` varchar(3000) NOT NULL,
  `encryptedAsymEncPrivateKey` varchar(3000) NOT NULL,
  `encryptedAsymSigPublicKey` varchar(3000) NOT NULL,
  `encryptedAsymSigPrivateKey` varchar(3000) NOT NULL,
  `roleVersionNumber` int NOT NULL,
  `signature` text(344) NOT NULL,
  PRIMARY KEY (`username`,`roleName`),
  KEY `fk_roleTuples_username_idx` (`username`),
  KEY `fk_roleTuples_roleName_idx` (`roleName`),
  CONSTRAINT `fk_roleTuples_username` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_roleTuples_roleName` FOREIGN KEY (`roleName`) REFERENCES `roles` (`roleName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `permissionTuples` (
  `roleName` varchar(50),
  `fileName` varchar(50),
  `roleToken`char(20),
  `fileToken` char(20),
  `encryptedSymKey` varchar(3000) NOT NULL,
  `symKeyVersionNumber` int NOT NULL,
  `roleVersionNumber` int NOT NULL,
  `permission` varchar(50) NOT NULL,
  `signerToken` char(20) NOT NULL,
  `signature` text(344) NOT NULL,
  PRIMARY KEY (`roleName`,`fileName`, `symKeyVersionNumber`),
  KEY `fk_permissionTuples_roleName_idx` (`roleName`),
  KEY `fk_permissionTuples_fileName_idx` (`fileName`),
  KEY `fk_permissionTuples_roleToken_idx` (`roleToken`),
  KEY `fk_permissionTuples_fileToken_idx` (`fileToken`),
  KEY `fk_permissionTuples_signerToken_idx` (`signerToken`),
  CONSTRAINT `fk_permissionTuples_roleName`  FOREIGN KEY (`roleName`)  REFERENCES `roles` (`roleName`),
  CONSTRAINT `fk_permissionTuples_fileName`  FOREIGN KEY (`fileName`)  REFERENCES `files` (`fileName`),
  CONSTRAINT `fk_permissionTuples_roleToken` FOREIGN KEY (`roleToken`) REFERENCES `roles` (`roleToken`),
  CONSTRAINT `fk_permissionTuples_fileToken` FOREIGN KEY (`fileToken`) REFERENCES `files` (`fileToken`),
  CONSTRAINT `fk_permissionTuples_signerToken` FOREIGN KEY (`signerToken`) REFERENCES `users` (`userToken`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `fileTuples` (
  `fileName` varchar(50),
  `fileToken` char(20),
  `symDecKeyVersionNumber` int NOT NULL,
  `enforcement` char(50) NOT NULL,
  `roleToken`char(20) NOT NULL,
  `signerToken` char(20) NOT NULL,
  `signature` text(344) NOT NULL,
  PRIMARY KEY (`fileName`),
  KEY `fk_fileTuples_fileName_idx`  (`fileName`),
  KEY `fk_fileTuples_fileToken_idx` (`fileToken`),
  KEY `fk_fileTuples_roleToken_idx` (`roleToken`),
  KEY `fk_fileTuples_signerToken_idx` (`signerToken`),
  CONSTRAINT `fk_fileTuples_fileName`  FOREIGN KEY (`fileName`)  REFERENCES `files` (`fileName`),
  CONSTRAINT `fk_fileTuples_fileToken` FOREIGN KEY (`fileToken`) REFERENCES `files` (`fileToken`),
  CONSTRAINT `fk_fileTuples_roleToken` FOREIGN KEY (`roleToken`) REFERENCES `roles` (`roleToken`),
  CONSTRAINT `fk_fileTuples_signerToken` FOREIGN KEY (`signerToken`) REFERENCES `users` (`userToken`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


/* note how users can modify ONLY their public key and ONLY once */
CREATE VIEW `user_specific_users` (`asymEncPublicKey`, `asymSigPublicKey`,  `userToken`, `status`) AS
    SELECT
        `users`.`asymEncPublicKey` AS `asymEncPublicKey`,
        `users`.`asymSigPublicKey` AS `asymSigPublicKey`,
        `users`.`userToken` AS `userToken`,
        `users`.`status` AS `status`
    FROM
        `users`
    WHERE
        `users`.`username` = (CONVERT( SUBSTRING_INDEX(USER(), '@', 1) USING UTF8MB4)) AND
        `users`.`asymEncPublicKey` = 'mock' AND
        `users`.`asymSigPublicKey` = 'mock';



/* this view allows users to check their status */
CREATE VIEW `user_specific_users_status` (`status`) AS
    (
        SELECT
            `users`.`status` AS `status`
        FROM
            `users`
        WHERE
            `users`.`username` = (CONVERT( SUBSTRING_INDEX(USER(), '@', 1) USING UTF8MB4))
    )
    UNION
    (
        SELECT
            `deletedUsers`.`status` AS `status`
        FROM
            `deletedUsers`
        WHERE
            `deletedUsers`.`username` = (CONVERT( SUBSTRING_INDEX(USER(), '@', 1) USING UTF8MB4))
    );


/* users can access only their role tuples */
CREATE VIEW `user_specific_roleTuples`
(`username`, `roleName`, `roleVersionNumber`, `encryptedAsymEncPublicKey`,
 `encryptedAsymEncPrivateKey`, `encryptedAsymSigPublicKey`,
 `encryptedAsymSigPrivateKey`, `signature`) AS
    SELECT
        `roleTuples`.`username` AS `username`,
        `roleTuples`.`roleName` AS `roleName`,
        `roleTuples`.`roleVersionNumber` AS `roleVersionNumber`,
        `roleTuples`.`encryptedAsymEncPublicKey` AS `encryptedAsymEncPublicKey`,
        `roleTuples`.`encryptedAsymEncPrivateKey` AS `encryptedAsymEncPrivateKey`,
        `roleTuples`.`encryptedAsymSigPublicKey` AS `encryptedAsymSigPublicKey`,
        `roleTuples`.`encryptedAsymSigPrivateKey` AS `encryptedAsymSigPrivateKey`,
        `roleTuples`.`signature` AS `signature`
    FROM
        `roleTuples`
    WHERE
        `roleTuples`.`username` = (CONVERT( SUBSTRING_INDEX(USER(), '@', 1) USING UTF8MB4));

/* users can access only the permissions they have */
CREATE VIEW `user_specific_permissionTuples`
(`roleName`, `fileName`, `roleToken`, `fileToken`, `encryptedSymKey`, `symKeyVersionNumber`,
 `roleVersionNumber`, `permission`, `signerToken`, `signature`) AS
    SELECT
        `permissionTuples`.`roleName` AS `roleName`,
        `permissionTuples`.`fileName` AS `fileName`,
        `permissionTuples`.`roleToken` AS `roleToken`,
        `permissionTuples`.`fileToken` AS `fileToken`,
        `permissionTuples`.`encryptedSymKey` AS `encryptedSymKey`,
        `permissionTuples`.`symKeyVersionNumber` AS `symKeyVersionNumber`,
        `permissionTuples`.`roleVersionNumber` AS `roleVersionNumber`,
        `permissionTuples`.`permission` AS `permission`,
        `permissionTuples`.`signerToken` AS `signerToken`,
        `permissionTuples`.`signature` AS `signature`
    FROM
        `permissionTuples`
    WHERE
        `permissionTuples`.`roleName` IN (SELECT `user_specific_roleTuples`.`roleName` FROM `user_specific_roleTuples`);


/* users can access only the files they have permission over */
CREATE VIEW `user_specific_files`
(`fileName`, `fileToken`, `symEncKeyVersionNumber`, `status`, `enforcement`) AS
    SELECT
        `files`.`fileName` AS `fileName`,
        `files`.`fileToken` AS `fileToken`,
        `files`.`symEncKeyVersionNumber` AS `symEncKeyVersionNumber`,
        `files`.`status` AS `status`,
        `files`.`enforcement` AS `enforcement`
    FROM
        `files`
    WHERE
        `files`.`fileName` IN (SELECT `user_specific_permissionTuples`.`fileName` FROM `user_specific_permissionTuples`);

CREATE VIEW `user_specific_fileTuples`
(`fileName`, `fileToken`, `symDecKeyVersionNumber`, `enforcement`, `roleToken`, `signerToken`, `signature`) AS
    SELECT
        `fileTuples`.`fileName` AS `fileName`,
        `fileTuples`.`fileToken` AS `fileToken`,
        `fileTuples`.`symDecKeyVersionNumber` AS `symDecKeyVersionNumber`,
        `fileTuples`.`enforcement` AS `enforcement`,
        `fileTuples`.`roleToken` AS `roleToken`,
        `fileTuples`.`signerToken` AS `signerToken`,
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







/* Avoid new users with same name as deleted ones */
DELIMITER //
CREATE TRIGGER uniqueUsernameAndTokenInsert BEFORE INSERT ON users
FOR EACH ROW BEGIN
 DECLARE c INT;
 SELECT COUNT(*) INTO c FROM deletedUsers WHERE username = NEW.username OR userToken = NEW.userToken;
 IF (c > 0) THEN
   signal sqlstate '45000' SET MESSAGE_TEXT = 'User was deleted';
 END IF;
END //

DELIMITER //
CREATE TRIGGER uniqueUsernameAndTokenUpdate BEFORE UPDATE ON users
FOR EACH ROW BEGIN
 DECLARE c INT;
 SELECT COUNT(*) INTO c FROM deletedUsers WHERE username = NEW.username OR userToken = NEW.userToken;
 IF (c > 0) THEN
   signal sqlstate '45000' SET MESSAGE_TEXT = 'User was deleted';
 END IF;
END //

/* Avoid new roles with same name as deleted ones */
DELIMITER //
CREATE TRIGGER uniqueRoleNameAndTokenInsert BEFORE INSERT ON roles
FOR EACH ROW BEGIN
 DECLARE c INT;
 SELECT COUNT(*) INTO c FROM deletedRoles WHERE roleName = NEW.roleName OR roleToken = NEW.roleToken;
 IF (c > 0) THEN
   signal sqlstate '45000' SET MESSAGE_TEXT = 'Role was deleted';
 END IF;
END //

DELIMITER //
CREATE TRIGGER uniqueRoleNameAndTokenUpdate BEFORE UPDATE ON roles
FOR EACH ROW BEGIN
 DECLARE c INT;
 SELECT COUNT(*) INTO c FROM deletedRoles WHERE roleName = NEW.roleName OR roleToken = NEW.roleToken;
 IF (c > 0) THEN
   signal sqlstate '45000' SET MESSAGE_TEXT = 'Role was deleted';
 END IF;
END //

/* Avoid new files with same name as deleted ones */
DELIMITER //
CREATE TRIGGER uniqueFileNameAndTokenInsert BEFORE INSERT ON files
FOR EACH ROW BEGIN
 DECLARE c INT;
 SELECT COUNT(*) INTO c FROM deletedFiles WHERE fileName = NEW.fileName OR fileToken = NEW.fileToken;
 IF (c > 0) THEN
   signal sqlstate '45000' SET MESSAGE_TEXT = 'File was deleted';
 END IF;
END //

DELIMITER //
CREATE TRIGGER uniqueFileNameAndTokenUpdate BEFORE UPDATE ON files
FOR EACH ROW BEGIN
 DECLARE c INT;
 SELECT COUNT(*) INTO c FROM deletedFiles WHERE fileName = NEW.fileName OR fileToken = NEW.fileToken;
 IF (c > 0) THEN
   signal sqlstate '45000' SET MESSAGE_TEXT = 'File was deleted';
 END IF;
END //