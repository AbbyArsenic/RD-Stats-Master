/* Create and use the stats master db*/
DROP DATABASE IF EXISTS `statsmaster_db`;
CREATE DATABASE `statsmaster_db`; 
USE `statsmaster_db`;

/* Create a table for all jams*/
CREATE TABLE `jams` (
`jam_id` INT AUTO_INCREMENT PRIMARY KEY,
`bout_id` INT NOT NULL,
`team_id` INT,
`jam_number` INT, 
`points` INT default 0,
`jammer` INT, 
`pivot` INT, 
`blocker1` INT,
`blocker2` INT,
`blocker3` INT,
`star_pass` BOOLEAN default false,
); 

/* Create a table for all penalties*/
CREATE TABLE `penalties` (
`penalty_id`INT AUTO_INCREMENT PRIMARY KEY,
`bout_id` INT,
`jam_number` INT NOT NULL, 
`skater_id` INT NOT NULL,
`penalty` VARCHAR(255),
); 

/* Create a table for all teams (league, city, colors)*/
CREATE TABLE `teams` (
`team_id`INT auto_increment,
`team_name` VARCHAR(50) NOT NULL, 
PRIMARY KEY ( `team_id` )
); 

/* Create a table for all players*/
CREATE TABLE `skaters` (
`skater_id`INT AUTO_INCREMENT PRIMARY KEY,
`skater_number` VARCHAR(50),
`skater_name` VARCHAR(50) NOT NULL,
`team_id` INT, 
); 

CREATE TABLE `bouts` (
`bout_id` INT AUTO_INCREMENT PRIMARY KEY,
`team1_id` INT,
`team2_id` INT, 
`date` DATE
); 

/* Create a table for referees*/
CREATE TABLE `referee`(
`referee_id` INT auto_increment,
`referee_name` VARCHAR (15) NOT NULL, 
`referee_email` VARCHAR (100) NOT NULL, 
`referee_password` BINARY (100) NOT NULL,
PRIMARY KEY ( `referee_id` ),
UNIQUE KEY `referee_name` (`referee_name`),
UNIQUE KEY `referee_email` (`referee_email`)
);

SHOW TABLES;

INSERT INTO teams (team_name) VALUES ("Nature"), ("Destruction");

INSERT INTO bouts (team1_id, team2_id) VALUES (1, 2);

INSERT INTO skaters (skater_number, skater_name, team_id)
VALUES (10, "Baller", 1),
	(12, "Cool Girl", 1),
	(14, "Fireball", 1),
	(16, "Lightning", 1),
	(18, "Earthquake", 1),
	(20, "Thunder", 1),
	(22, "Typhoon", 1);
    
INSERT INTO skaters (skater_number, skater_name, team_id)
VALUES (31, "Acid", 2),
	(33, "Poison", 2),
	(35, "Erosion", 2),
	(37, "Debris", 2),
	(39, "Tarnished", 2),
	(41, "Destroyer", 2),
	(43, "Cataclysm", 2);
    
INSERT INTO jams (bout_id, team_id, jam_number, points, jammer, pivot, blocker1, blocker2, blocker3) 
VALUES (1, 1, 1, 5, 5, 4, 3, 2, 1),
	(1, 1, 2, 8, 5, 3, 4, 2, 1),
    (1, 1, 3, 2, 5, 4, 3, 2, 1),
    (1, 1, 4, 15, 1, 2, 3, 4, 5),
    (1, 1, 5, 3, 5, 4, 3, 2, 1),
    
    (1, 2, 1, 12, 14, 13, 12, 11, 10),
    (1, 2, 2, 2, 14, 13, 12, 11, 10),
    (1, 2, 3, 19, 8, 9, 10, 11, 12),
    (1, 2, 4, 7, 8, 9, 10, 11, 12),
    (1, 2, 5, 9, 8, 12, 10, 11, 14);
    
SELECT * FROM jams;



