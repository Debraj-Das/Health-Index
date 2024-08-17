create table shop(
   id serial primary key,
   shopid text not null unique,
   location text
);

insert into shop(shopid, location) 
values ('TXT2356', 'contai, purba Medinipur'),
('TXT2357', 'digha, purba Medinipur'),
('TXT2358', 'kharagpur, paschim Medinipur'),
('TXT2359', 'kolkata, kolkata');