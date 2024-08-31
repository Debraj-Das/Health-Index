-- TML20201

insert into ohc(userid, date, doctor, prescription)
values ('TML20201', '2024-08-05', 'B.C.Roy', 'fever 100 degF'),
('TML20201', '2024-08-10', 'B.C.Roy', 'fever 108 degF'),
('TML20201', '2024-08-25', 'B.C.Roy', 'fever 99 degF');

insert into opd (userid, date, doctor,prescription, status) values 
('TML20201', '2024-08-10', 'Dr. Abc','fever 100 degF' ,'ok'),
('TML20201', '2024-08-21', 'Dr. Abs','fever 104 degF', 'critical'),
('TML20201', '2024-08-25', 'Dr. Abs','fever 99 degF', 'ok');

insert into ipd (userid, admit_no, admit_date, discharge_date, doctor, prescription, status) values 
('TML20201', 'AD123', '2024-08-08', '2024-08-10', 'Dr. A', 'Medicine A', 'ok'), 
('TML20201', 'AD124', '2024-08-12', '2024-08-21', 'Dr. B', 'Medicine B', 'ok'), 
('TML20201', 'AD125', '2024-08-23', '2024-08-27', 'Dr. C', 'Medicine C', 'critical'), 
('TML20201', 'AD124', '2024-08-29', '2024-08-31', 'Dr. D', 'Medicine D', 'critical');

insert into medicine(userid, date, doctor, medicine) values
('TML20201', '2024-08-08', 'Dr. A', 'Medicine A'), 
('TML20201', '2024-08-19', 'Dr. B', 'Medicine B'),
('TML20201', '2024-08-29', 'Dr. C', 'Medicine C');

insert into pathology (userid, date, test, result) values 
('TML20201', '2024-08-08', 'CBC', 'Normal'), 
('TML20201', '2024-08-15', 'CBC', 'Normal'), 
('TML20201', '2024-08-25', 'CBC', 'Normal');