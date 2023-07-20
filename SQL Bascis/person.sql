CREATE TABLE person (
    Id serial primary key,
    person_name varchar(40) not null,
    age integer not null,
    height float not null,
    city varchar(40 not null),
    favorite_color varchar(20) not null
);

/* #2 */
INSERT INTO person(person_name,age,height,city,favorite_color) VALUES('Oscar',24,180.34,'Austin','RoyalBlue'),('Carmen',45,140.1,'Bastrop','White'),('Natalie',18,142,'Bastrop','black'),('Deisy',26,150.45,'DelValle', 'Red'),('Alex',26,150.45,'Uhland', 'Black');

/* #3 */
SELECT * FROM person ORDER BY height DESC;

/* #4 */
SELECT * FROM person ORDER BY height ASC;

/* #5 */
SELECT * FROM person ORDER BY age DESC;

/* #6 */
SELECT * FROM person WHERE age > 20;

/* #7 */
SELECT * FROM person WHERE age = 18;

/* #8 */
SELECT * FROM person WHERE age < 20 OR age > 30;

/* #9 */
SELECT * FROM person WHERE age != 27;

/* #10 */
SELECT * FROM person WHERE favorite_color != 'red';

/* #11 */
SELECT * FROM person WHERE favorite_color != 'red' AND favorite_color != 'blue';

/* #12 */
SELECT * FROM person WHERE favorite_color = 'orange' OR favorite_color = 'green';

/* #13 */
SELECT * FROM person WHERE favorite_color IN ( 'orange', 'green', 'blue' );

/* #14 */
SELECT * FROM person WHERE favorite_color IN ( 'yellow', 'purple' )