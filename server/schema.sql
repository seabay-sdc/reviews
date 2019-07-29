CREATE DATABASE seabay2;
USE seabay2;

CREATE TABLE reviews (
  id INT NOT NULL,
  name VARCHAR(30),
  date VARCHAR(15),
  title VARCHAR(100),
  score INT,
  review VARCHAR(150),
  wouldRecommend INT,
  goodValue INT,
  goodQuality INT,
  PRIMARY KEY(id)
);