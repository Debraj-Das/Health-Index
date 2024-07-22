-- OPD
create table OPD(
	id serial primary key,
	userId int not null,
	date date not null,
	doctor text,
	prescription text,
	status int,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);

-- example data
insert into opd (userid, date, doctor, prescription, status)
values (1234 , '2024-07-06', 'B.C.Roy', 'fever 100degF', 0);