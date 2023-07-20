CREATE TABLE orders (
   order_id serial primary key,
   person_id integer not null,
   product_name varchar(50) not null,
   product_price float not null,
   quantity integer not null
);


INSERT INTO orders(person_id,product_name,product_price,quantity)
VALUES(0,'Laptop',1199.99,4), (1,'Mouse',99.99,12),(2,'Keyboards',199.99,10),(3,'Laptop Bag',19.99,30),(4,'Virus Protection',9.99,19);

 SELECT*FROM orders;

 SELECT SUM(quantity) FROM orders

 SELECT SUM(product_price) FROM orders

SELECT SUM(product_price*quantity) FROM orders where person_id = 0