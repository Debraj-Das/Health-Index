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