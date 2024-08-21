create table ohc(
   id serial primary key,
   userid text not null,
   date date,
   doctor text,
   prescription text,
	prescription_path text
);


insert into ohc(userid, date, doctor, prescription)
values ('TXT1240', '2024-07-01', 'B.C.Roy', 'fever 100 degF'),
('TXT1240', '2024-07-10', 'B.C.Roy', 'fever 101 degF');