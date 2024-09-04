create table hr_static (
   id serial primary key,
   userid text not null,
   name text not null,
   dob date,
   gender text,
   phone text,
   email text,
   joining_date date,
   leaving_date date,
   allergy text,
   medicine_resistant text
);

insert into hr_static (userid, name, dob, gender, phone, email, joining_date, leaving_date) values
('TML202453', 'John Doe', '1980-01-01', 'male', '1234567890', 'john@gmail.com', '2010-01-01', null),
('TML202454', 'Debraj Das', '1985-01-10', 'male', '1234567891', 'debraj@gmai.com', '2010-01-01', '2015-01-01');