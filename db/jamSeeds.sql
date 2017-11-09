/*  
Easier to use than importing the CSV
Populate this table last, because it references nearly all other tables, 
and it will fail if they are not populated first
*/

INSERT INTO `jams` (`jam_id`, `bout_id`, `team_id`, `jam_number`, `points`, `jammer`, `pivot`, `blocker1`, `blocker2`, `blocker3`, `star_pass`)
VALUES ('1', '1', '1', '1', '0', '8', '11', '2', '3', '10', '0'),
VALUES ('2', '1', '1', '2', '0', '1', '7', '12', NULL, NULL, '0'),
VALUES ('3', '1', '1', '3', '4', '9', '3', '2', '11', NULL, '0'),
VALUES ('4', '1', '1', '4', '0', '5', '12', '14', '6', NULL, '0'),
VALUES ('5', '1', '1', '5', '3', '8', '11', '2', '3', '10', '0'),
VALUES ('6', '1', '2', '1', '0', '52', '63', '61', '57', '54', '0'),
VALUES ('7', '1', '2', '2', '4', '64', '59', '60', '58', NULL, '0'),
VALUES ('8', '1', '2', '3', '0', '56', '63', '49', '61', '51', '0'),
VALUES ('9', '1', '2', '4', '9', '62', '60', '50', '55', '59', '0'),
VALUES ('10', '1', '2', '5', '0', '52', '63', '61', '57', '54', '0');

SELECT * FROM `jams`;