CREATE TABLE users(
  id integer PRIMARY KEY  GENERATED BY DEFAULT AS IDENTITY,
  name character varying(3000) NOT NULL,
  email character varying(3000)NOT NULL,
  password VARCHAR(20) NOT NULL  
 )
 