create table medicine(
   id serial primary key,
   userid text not null,
   date date,
   doctor text,
   medicine text,
   medicine_path text
);

-- insert into medicine(userid, date, doctor, medicine) values
-- ('TXT1240', '2019-01-01', 'Dr. A', 'Medicine A'), 
-- ('TXT1240', '2019-01-02', 'Dr. B', 'Medicine B');