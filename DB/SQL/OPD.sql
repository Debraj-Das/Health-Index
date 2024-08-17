create table opd (
   id serial primary key,
   userid text not null,
   date date,
   doctor text,
   status text
);

insert into opd (userid, date, doctor, status) values 
('TXT1240', '2017-01-01', 'Dr. Abc', 'ok'),
('TXT1240', '2024-05-07', 'Dr. Abs', 'critical');