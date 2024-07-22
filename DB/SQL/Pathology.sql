-- Pathology
create table Pathology(
	id serial primary key,
	userId int not null,
	date date not null,
	test text,
	result text,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);