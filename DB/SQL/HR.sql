-- HR Data - 
-- 	- static information 
-- 		- user ID
-- 		- name
-- 		- age
-- 		- gender
-- 		- phone number
-- 		- email id
-- 		- DOB
-- 	- Dynamic information
-- 		- present location of work - previous location of work
-- 		- duration of working - duration of working in previous location
-- 		- shift - previous location he work

create table HRStatic(
	id serial primary key,
	userId int not null unique,
	name text,
	DOB date,
	gender text,
	phone text,
	email text
);

-- example data
insert into HRStatic (userid, name, dob, gender, phone, email)
values (1234, 'debraj das', '2002-08-05', 'male', '1234567890', 'debraj@gmail.com');

create table HRDynamic (
	id serial primary key,
	userId int not null,
	plantid int not null,
	starting_date date,
	ending_date date,
	shift text,
	FOREIGN KEY (UserId) REFERENCES HRStatic(UserId)
	FOREIGN KEY (plantid) REFERENCES plantstatic(plantid)
);

-- example data
insert into HRDynamic (userid, plantid, starting_date, ending_date, shift)
values (1234, 2356,'2021-04-23' '2023-05-23', 'mon: 10am-6pm');