create table hr_dynamic (
   id serial primary key,
   userid text not null,
   shopid text not null,
   shift text,
   grade text,
   joining_date date
);

insert into hr_dynamic (userid, shopid, shift, grade, joining_shop) values
('TXT1240', 'TXT2356', 'morning: 10am-6pm', 'A', '2010-01-01'),
('TXT1245', 'TXT2357', 'night: 6pm - 12am', 'B', '2010-01-01');