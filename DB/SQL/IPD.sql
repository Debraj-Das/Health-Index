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