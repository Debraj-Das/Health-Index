-- IPD
create table IPD(
	id serial primary key,
	userId int not null,
	admit_no int not null,
	admission_date date not null,
	discharge_date date,
	doctor text,
	prescription text,
	status int,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);

-- example data
insert into ipd (userid, admit_no, admission_date, discharge_date, doctor, prescription, status)
values (1234, 324, '2024-07-09', '2024-07-19', 'B.C.Roy', 'fever 104degF', 0);