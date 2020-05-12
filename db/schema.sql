USE eqjn84axkg2dz0py;
CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burgerName VARCHAR (30),
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(id)
);