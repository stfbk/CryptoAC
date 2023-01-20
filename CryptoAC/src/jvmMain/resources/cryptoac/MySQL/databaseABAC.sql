/* (drop if exists) create and set new schema */
DROP SCHEMA IF EXISTS `cryptoac`;
CREATE SCHEMA `cryptoac`;
USE `cryptoac`;

/* to enable triggers in the database */
SET GLOBAL log_bin_trust_function_creators = 1;

/* remember that MySQL automatically creates indexes for primary keys and unique fields */

/* re-create tables */
/* The ENUM construct as primary key is used to prevent that more than one row can be entered to the table */
CREATE TABLE `masterPublicKey` (
  `id` enum('1') NOT NULL,
  `mpk` varchar(5000),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `username` varchar(100),
  `userToken` char(20) NOT NULL UNIQUE,
  `asymEncPublicKey` varchar(500) NOT NULL,
  `asymSigPublicKey` varchar(500) NOT NULL,
  `abeSecretKey` text,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `deletedUsers` (
  `username` varchar(100),
  `userToken` char(20) NOT NULL UNIQUE,
  `asymEncPublicKey` varchar(500) NOT NULL,
  `asymSigPublicKey` varchar(500) NOT NULL,
  `abeSecretKey` text NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `attributes` (
  `attributeName` varchar(100),
  `attributeToken` char(20) NOT NULL UNIQUE,
  `attributeVersionNumber` int NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`attributeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `deletedAttributes` (
  `attributeName` varchar(100),
  `attributeToken` char(20) NOT NULL UNIQUE,
  `attributeVersionNumber` int NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`attributeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `resources` (
  `resourceName` varchar(100),
  `resourceToken` char(20) NOT NULL UNIQUE,
  `symEncKeyVersionNumber` int NOT NULL,
  `symDecKeyVersionNumber` int NOT NULL,
  `status` varchar(20) NOT NULL,
  `enforcement` varchar(50) NOT NULL,
  PRIMARY KEY (`resourceName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `deletedResources` (
  `resourceName` varchar(100),
  `resourceToken` char(20) NOT NULL UNIQUE,
  `symEncKeyVersionNumber` int NOT NULL,
  `symDecKeyVersionNumber` int NOT NULL,
  `status` varchar(20) NOT NULL,
  `enforcement` varchar(50) NOT NULL,
  PRIMARY KEY (`resourceName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `attributeTuples` (
  `username` varchar(100),
  `attributeName` varchar(100),
  `attributeValue` varchar(100),
  `signature` text(344) NOT NULL,
  PRIMARY KEY (`username`,`attributeName`),
  KEY `fk_attributeTuples_username_idx` (`username`),
  KEY `fk_attributeTuples_attributeName_idx` (`attributeName`),
  CONSTRAINT `fk_attributeTuples_username` FOREIGN KEY (`username`) REFERENCES `users` (`username`),
  CONSTRAINT `fk_attributeTuples_attributeName` FOREIGN KEY (`attributeName`) REFERENCES `attributes` (`attributeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `accessStructureTuples` (
  `resourceName` varchar(100),
  `resourceToken` char(20) NOT NULL,
  `accessStructure` varchar(5000) NOT NULL,
  `permission` varchar(50) NOT NULL,
  `encryptingSymKey` varchar(3000) NOT NULL,
  `decryptingSymKey` varchar(3000) NOT NULL,
  `symKeyVersionNumber` int NOT NULL,
  `signerToken` char(20) NOT NULL,
  `signature` text(344) NOT NULL,
  PRIMARY KEY (`resourceName`,`permission`),
  KEY `fk_accessStructureTuples_resourceName_idx` (`resourceName`),
  KEY `fk_accessStructureTuples_resourceToken_idx` (`resourceToken`),
  KEY `fk_accessStructureTuples_signerToken_idx` (`signerToken`),
  CONSTRAINT `fk_accessStructureTuples_resourceName` FOREIGN KEY (`resourceName`) REFERENCES `resources` (`resourceName`),
  CONSTRAINT `fk_accessStructureTuples_resourceToken` FOREIGN KEY (`resourceToken`) REFERENCES `resources` (`resourceToken`) ON UPDATE CASCADE,
  CONSTRAINT `fk_accessStructureTuples_signerToken` FOREIGN KEY (`signerToken`) REFERENCES `users` (`userToken`) ON UPDATE CASCADE
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

/* this view allows users to check their status and get their ABE key */
CREATE VIEW `user_specific_users_info` (`username`, `status`, `abeSecretKey`) AS
    (
        SELECT
            `users`.`username` AS `username`,
            `users`.`status` AS `status`,
            `users`.`abeSecretKey` AS `abeSecretKey`
        FROM
            `users`
        WHERE
            `users`.`username` = (CONVERT( SUBSTRING_INDEX(USER(), '@', 1) USING UTF8MB4))
    )
    UNION
    (
        SELECT
            `deletedUsers`.`username` AS `username`,
            `deletedUsers`.`status` AS `status`,
            `deletedUsers`.`abeSecretKey` AS `abeSecretKey`
        FROM
            `deletedUsers`
        WHERE
            `deletedUsers`.`username` = (CONVERT( SUBSTRING_INDEX(USER(), '@', 1) USING UTF8MB4))
    );

/* users can access only their attribute tuples */
CREATE VIEW `user_specific_attributeTuples`
(`username`, `attributeName`, `attributeValue`, `signature`) AS
    SELECT
        `attributeTuples`.`username` AS `username`,
        `attributeTuples`.`attributeName` AS `attributeName`,
        `attributeTuples`.`attributeValue` AS `attributeValue`,
        `attributeTuples`.`signature` AS `signature`
    FROM
        `attributeTuples`
    WHERE
        `attributeTuples`.`username` = (CONVERT( SUBSTRING_INDEX(USER(), '@', 1) USING UTF8MB4));

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

/* Avoid new attributes with same name as deleted ones */
DELIMITER //
CREATE TRIGGER uniqueAttributeNameAndTokenInsert BEFORE INSERT ON attributes
FOR EACH ROW BEGIN
 DECLARE c INT;
 SELECT COUNT(*) INTO c FROM deletedAttributes WHERE attributeName = NEW.attributeName OR attributeToken = NEW.attributeToken;
 IF (c > 0) THEN
   signal sqlstate '45000' SET MESSAGE_TEXT = 'Attribute was deleted';
 END IF;
END //

DELIMITER //
CREATE TRIGGER uniqueAttributeNameAndTokenUpdate BEFORE UPDATE ON attributes
FOR EACH ROW BEGIN
 DECLARE c INT;
 SELECT COUNT(*) INTO c FROM deletedAttributes WHERE attributeName = NEW.attributeName OR attributeToken = NEW.attributeToken;
 IF (c > 0) THEN
   signal sqlstate '45000' SET MESSAGE_TEXT = 'Attribute was deleted';
 END IF;
END //

/* Avoid new resources with same name as deleted ones */
DELIMITER //
CREATE TRIGGER uniqueResourceNameAndTokenInsert BEFORE INSERT ON resources
FOR EACH ROW BEGIN
 DECLARE c INT;
 SELECT COUNT(*) INTO c FROM deletedResources WHERE resourceName = NEW.resourceName OR resourceToken = NEW.resourceToken;
 IF (c > 0) THEN
   signal sqlstate '45000' SET MESSAGE_TEXT = 'Resource was deleted';
 END IF;
END //

DELIMITER //
CREATE TRIGGER uniqueResourceNameAndTokenUpdate BEFORE UPDATE ON resources
FOR EACH ROW BEGIN
 DECLARE c INT;
 SELECT COUNT(*) INTO c FROM deletedResources WHERE resourceName = NEW.resourceName OR resourceToken = NEW.resourceToken;
 IF (c > 0) THEN
   signal sqlstate '45000' SET MESSAGE_TEXT = 'Resource was deleted';
 END IF;
END //

DELIMITER //
CREATE TRIGGER oneMPKUpdateOnly BEFORE UPDATE ON masterPublicKey
FOR EACH ROW BEGIN
  IF NEW.mpk != OLD.mpk THEN
    signal sqlstate '45000' SET MESSAGE_TEXT = 'Cannot update the master public key';
  END IF;
END //

