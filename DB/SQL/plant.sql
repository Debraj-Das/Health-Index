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

-- example data
insert into plantStatic (plantid, name, location) values (2356, 'shop 1', 'kolkata');

create table plantEnviroment (
	id serial primary key,
	plantId int not null,
	date date not null,
	temparature float,
	co2_label float,
	humidity float,
	FOREIGN KEY (plantId) REFERENCES plantStatic(plantId)
);

-- example data
insert into plantEnviroment (plantId, date, temparature, co2_label, humidity) values (2356, '2021-04-23', 30.5, 0.5, 0.6);
