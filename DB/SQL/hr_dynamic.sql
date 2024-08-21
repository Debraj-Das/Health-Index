create table hr_dynamic (
   id serial primary key,
   userid text not null,
   shopid text not null,
   distance text,
   shift text,
   grade text,
   joining_date date
);

insert into hr_dynamic (userid, shopid,distance, shift, grade, joining_date) values
('TXT1240', 'TXT2356','5-10km', 'morning: 10am-6pm', 'A', '2010-01-01'),
('TXT1245', 'TXT2357','0-5km', 'night: 6pm - 12am', 'B', '2010-01-01');