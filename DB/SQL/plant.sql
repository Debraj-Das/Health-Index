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
