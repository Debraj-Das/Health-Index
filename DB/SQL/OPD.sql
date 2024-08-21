create table opd (
   id serial primary key,
   userid text not null,
   date date,
   doctor text,
   prescription text,
   prescription_path text,
   status text
);

-- insert into opd (userid, date, doctor,prescription, status) values 
-- ('TXT1240', '2017-01-01', 'Dr. Abc','fever 100 degF' ,'ok'),
-- ('TXT1240', '2024-05-07', 'Dr. Abs','fever 100 degF', 'critical');