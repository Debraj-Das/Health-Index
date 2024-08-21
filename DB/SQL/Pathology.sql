create table pathology (
   id serial primary key,
   userid text not null,
   date date,
   test text,
   result text,
   result_path text
);

-- insert into pathology (userid, date, test, result) values 
-- ('TXT1240', '2016-01-01', 'CBC', 'Normal'), 
-- ('TXT1240', '2016-01-01', 'CBC', 'Normal'), 
-- ('TXT1240', '2016-01-01', 'CBC', 'Normal');