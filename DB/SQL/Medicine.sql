-- Medicine
create table Medicine(
	id serial primary key,
	userId int not null,
	date date not null,
	doctor text,
	medicine text,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);