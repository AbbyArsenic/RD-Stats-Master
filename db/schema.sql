/* Create and use the stats master db*/
CREATE DATABASE `statsmaster_db`; 
USE `statsmaster_db`;

/* Create a table for all jams*/
CREATE TABLE `jams` (
`jam_id` INT auto_increment,
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
PRIMARY KEY ( `jam_id` )
); 

/* Create a table for all penalties*/
CREATE TABLE `penalties` (
`penalty_id`INT auto_increment,
`bout_id` INT,
`jam_number` INT NOT NULL, 
`skater_id` INT NOT NULL,
`penalty` VARCHAR,
PRIMARY KEY ( `penalty_id` )
); 

/* Create a table for all teams (league, city, colors)*/
CREATE TABLE `teams` (
`team_id`INT auto_increment,
`team_name` VARCHAR(50) NOT NULL, 
PRIMARY KEY ( `team_id` )
); 

/* Create a table for all players*/
CREATE TABLE `skaters` (
`skater_id`INT auto_increment,
`skater_number` VARCHAR(50),
`skater_name` VARCHAR(50) NOT NULL,
`team_id` INT, 
PRIMARY KEY ( `skater_id` )
); 

CREATE TABLE `bouts` (
`bout_id` INT auto_increment,
`team1` INT,
`team2` INT, 
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
