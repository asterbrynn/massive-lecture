create table airplane (
	plane_id serial,
	plane_type varchar(50) not null,
	passenger_count int
);

insert into airplane (plane_type, passenger_count) 
values ('747', 200),
('717', 10),
('727', 20),
('737', 30),
('757', 500);