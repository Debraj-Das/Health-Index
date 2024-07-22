-- Health Data-
-- OHC
-- IPD
-- OPD
-- OHC- Medicine
-- IPD-
-- OPD-

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

-- Plant Data - 
-- 	- shop 1
-- 	- shop 2
-- 	- shop 3
-- 	- shop 4
-- 	- shop 5
-- 	- shop 6

-- 6 shops - 
-- 	- date
-- 	- humidity
-- 	- temperature
-- 	- pollutions (co2 label, co2 emission)

create table plantStatic(
	id serial primary key,
	plantId int not null unique,
	name text,
	location text
);

create table plantEnviroment (
	id serial primary key,
	plantId int not null,
	date date not null,
	temparature float,
	c02_label float,
	humidity float,
	FOREIGN KEY (plantId) REFERENCES plantStatic(plantId)
);


-- Health Data -
-- 	- OHC
-- 	- OPD
-- 	- IPD
-- 	- Medicine
-- 	- pathlogy

-- OHC
create table OHC(
	id serial primary key,
	userId int not null,
	date date not null,
	doctor text,
	prescription text,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);

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

-- Medicine
create table Medicine(
	id serial primary key,
	userId int not null,
	date date not null,
	doctor text,
	medicine text,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);

-- Pathology
create table Pathology(
	id serial primary key,
	userId int not null,
	date date not null,
	test text,
	result text,
	FOREIGN KEY (userId) REFERENCES HRStatic(userId)
);