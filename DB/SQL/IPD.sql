create table ipd (
   id serial primary key,
   userid text not null,
   admit_no text,
   admit_date date,
   discharge_date date,
   doctor text,
   prescription text,
   status text
);

insert into ipd (userid, admit_no, admit_date, discharge_date, doctor, prescription, status) values 
('TXT1240', 'AD123', '2019-01-01', '2019-01-10', 'Dr. A', 'Medicine A', 'ok'), 
('TXT1240', 'AD124', '2019-01-02', '2019-01-11', 'Dr. B', 'Medicine B', 'ok'), 
('TXT1240', 'AD125', '2019-01-03', '2019-01-12', 'Dr. C', 'Medicine C', 'critical'), 
('TXT1240', 'AD124', '2019-01-04', '2019-01-13', 'Dr. D', 'Medicine D', 'critical'), 
('TXT1240', 'AD126', '2019-01-05', '2019-01-14', 'Dr. E', 'Medicine E', 'critical');