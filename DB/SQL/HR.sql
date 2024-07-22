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
	email text,
	working_location text,
	starting_data date,
	shift text
);

create table HRDynamic (
	id serial primary key,
	userId int not null,
	working_location text,
	starting_date date,
	ending_date date,
	shift text,
	FOREIGN KEY (UserId) REFERENCES HRStatic(UserId)
);