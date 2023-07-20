
CREATE TABLE Users (
	User_id serial Primary key,
	User_name varchar(20) NOT NULL UNIQUE,
	User_Password varchar(50) NOT NULL,
	User_Fullname varchar(60) NOT NULL,
	User_email varchar(100) NOT NULL UNIQUE,
	User_Role varchar(10),
	User_Phone integer(10),
	User_Security varchar(50) NOT NULL
);

INSERT INTO Users(User_name,User_Password,User_Fullname,User_email,User_Role,User_Phone,User_Security)
VALUES('oscar','password','oph','oph@gmail.com','chef',512549592,'maroon');

select * from Users



CREATE TABLE post (
	post_id serial Primary Key,
	user_id integer NOT NULL REFERENCES Users(User_id),
	body_text varchar(500) NOT NULL,
	image_url varchar(200),
	public_private varchar(10) NOT NULL
);

INSERT INTO post(user_id,body_text,image_url,public_private) VALUES(1,'My First recipe',NULL,'Yes');

SELECT * FROM post

CREATE TABLE GroceryList(
	GroceryList_id serial PRIMARY KEY,
	Recipe_id integer NOT NULL REFERENCES Recipe(Recipe_id)
);

INSERT INTO GroceryList(Recipe_id) VALUES(1);
SELECT * FROM GroceryList


CREATE TABLE Recipe(
	Recipe_id SERIAL PRIMARY KEY,
	User_id INTEGER NOT NULL REFERENCES Users(User_id),
	title varchar(20) NOT NULL,
	post_id INTEGER NOT NULL REFERENCES post(post_id),
	instructions varchar(1000) NOT NULL,
	image_url varchar(100)
);

INSERT INTO Recipe(User_id,title,post_id,instructions,image_url) VALUES (1, 'Cereal', 2,'you need a bowl,spoon,milk, and cereal.',NULL);
SELECT*FROM Recipe


CREATE TABLE Occasions (
	Occasion_id serial PRIMARY KEY,
	post_id integer REFERENCES post(post_id),
	Recipe_id integer NOT NULL REFERENCES Recipe(Recipe_id),
	User_id integer NOT NULL REFERENCES User(User_id),
	occasion_name varchar(30) NOT NULL
);

INSERT INTO Occasions(post_id,Recipe_id,User_id,occasion_name) VALUES(1,1,1,'Every Morning');
SELECT*FROM Occasions


CREATE TABLE Ingredients (
	ingredient_id serial PRIMARY KEY,
	ingredient_name varchar(30) NOT NULL,
	category varchar(30) NOT NULL
);

INSERT INTO Ingredients(ingredient_name,category) VALUES('wheat, cinnamon','Grain');
SELECT*FROM Ingredients

CREATE TABLE ingredients_grocery_list (
	ingredients_grocery_list_id serial PRIMARY KEY,
	ingredient_id INTEGER REFERENCES Ingredients(ingredient_id),
	GroceryList_id INTEGER REFERENCES GroceryList(GroceryList_id),
	quantity integer NOT NULL
);


INSERT INTO ingredients_grocery_list(ingredient_id,GroceryList_id,quantity) VALUES (1,1,4);

Select*from ingredients_grocery_list









