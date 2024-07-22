-- OHC
create table OHC(
	id serial primary key,
	userId int not null,
	date date not null,
	doctor text,
	prescription text,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);

-- example data
insert into ohc (userid, date, doctor, prescription)
values (1234, '2024-07-01', 'B.C.Roy', 'fever 100 degF');