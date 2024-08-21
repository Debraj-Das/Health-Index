create table shop(
   id serial primary key,
   shopid text not null unique,
   location text
);

insert into shop(shopid, location) 
values ('shop1', 'contai, purba Medinipur'),
('shop2', 'digha, purba Medinipur'),
('shop3', 'kharagpur, paschim Medinipur'),
('shop4', 'kolkata, kolkata');