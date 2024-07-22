-- OHC
create table OHC(
	id serial primary key,
	userId int not null,
	date date not null,
	doctor text,
	prescription text,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);