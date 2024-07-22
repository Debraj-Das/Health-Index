-- Pathology
create table Pathology(
	id serial primary key,
	userId int not null,
	date date not null,
	test text,
	result text,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);

-- example data
insert into pathology (userid, date, test, result)
values (1234, '2024-07-21', 'Blood test', 'okey');