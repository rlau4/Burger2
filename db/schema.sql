DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE xa60mag1gea6gux3.burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(144) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
