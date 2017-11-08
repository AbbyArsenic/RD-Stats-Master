# RD-Stats-Master
Roller derby stats tracking app. Bootcamp project #2

Initial table data population order:

INSERT INTO `bouts` (`bout_id`, `team1_id`, `team2_id`, `date`) VALUES ('1', '5', '6', '2017-10-28');
Use the above to seed bouts first, then teams, skaters, and penalty codes with the csv's, then use the jamseeds.sql to load data into the jams table last (this table references basically all of the others, so they need data before this one can populate)
