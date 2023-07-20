CREATE TABLE artist (
  artist_id SERIAL PRIMARY KEY,
  name VARCHAR(120)
);

select*from artist order by name desc limit 10

select*from artist order by name asc limit 5

select*from artist where name like 'Black%'

select*from artist where name like '%Black%'