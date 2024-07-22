-- Medicine
create table Medicine(
	id serial primary key,
	userId int not null,
	date date not null,
	doctor text,
	medicine text,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);

-- example data
insert into medicine (userid, date, doctor, medicine)
values (1234, '2024-07-20', 'B.C.Roy', 'Pand-40');