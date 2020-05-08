-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) NOT NULL AUTO_INCREMENT,

  -- Create a string column called "language" --
  language VARCHAR(30),

  -- Create an integer column called "rating" --
  rating INTEGER(3),

  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  mastered BOOLEAN DEFAULT TRUE,

  -- Set the id as this table's primary key
  PRIMARY KEY (id)
);

-- Create new example rows
INSERT INTO programming_languages( language, rating, mastered)
VALUES( "JavaScript", 80, TRUE);

INSERT INTO programming_languages( language, rating, mastered)
VALUES( "Python", 76, FALSE);

UPDATE programming_languages
SET mastered = TRUE
WHERE language = "Python";
