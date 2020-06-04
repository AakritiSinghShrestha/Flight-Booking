CREATE DATABASE FLIGHT_BOOKING;
USE FLIGHT_BOOKING;

CREATE TABLE FLIGHT
(
ID INT NOT NULL auto_increment,
FLIGHT_NUMBER VARCHAR(30) NOT NULL,
OPERATING_AIRLINES VARCHAR(30) NOT NULL,
PRICE DOUBLE NOT NULL,
DEPARTURE_CITY VARCHAR(30)  NOT NULL,
  ARRIVAL_CITY VARCHAR(30)  NOT NULL,
  DATE_OF_DEPARTURE DATE  NOT NULL,
  DATE_OF_ARRIVAL DATE  NOT NULL,
  ESTIMATED_DEPARTURE_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
  ESTIMATED_ARRIVAL_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
PRIMARY KEY(ID)
);
select * from  FLIGHT;

CREATE TABLE PASSENGER
(
  ID INT NOT NULL AUTO_INCREMENT,
  FIRST_NAME VARCHAR(200),
  LAST_NAME VARCHAR(200),
  MIDDLE_NAME VARCHAR(200),
  EMAIL VARCHAR(60),
  PHONE VARCHAR(10),
  CARD_NUMBER VARCHAR(200),
   EXPIRATION_DATE DATE  NOT NULL,
   SECURITY_CODE INT  NOT NULL,
  PRIMARY KEY (ID)
);
-- drop table PASSENGER;
select * from  PASSENGER;

CREATE TABLE BOOKING
(
  ID INT NOT NULL AUTO_INCREMENT,
  CHECKED_IN TINYINT(1),
  NUMBER_OF_BAGS INT,
  PASSENGER_ID INT,
  FLIGHT_ID INT,
  CREATED_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID),
  FOREIGN KEY (PASSENGER_ID) REFERENCES PASSENGER(ID) ON DELETE CASCADE,
  FOREIGN KEY (FLIGHT_ID) REFERENCES FLIGHT(ID)
);
select * from  BOOKING;
-- drop table BOOKING;
SHOW TABLES;

-- Drop table flight;

insert into flight values(1,'AA1','American Airlines',200,'PHILLY',
'NYC',STR_TO_DATE('11-12-2021', '%m-%d-%Y'),STR_TO_DATE('11-12-2021', '%m-%d-%Y'),'2021-11-12 10:24:02','2021-11-12 1:24:02');

insert into flight values(2,'AA2','American Airlines',180,'PHILLY',
'NYC',STR_TO_DATE('11-12-2021', '%m-%d-%Y'),STR_TO_DATE('11-12-2021', '%m-%d-%Y'),'2021-11-12 12:24:02','2021-11-12 1:24:02');

insert into flight values(3,'AA3','American Airlines',200,'DAL',
'NYC',STR_TO_DATE('11-13-2021', '%m-%d-%Y'),STR_TO_DATE('11-13-2021', '%m-%d-%Y'),'2021-11-13 07:24:02','2021-11-13 02:24:02');

insert into flight values(4,'SW1','South West',190,'NYC',
'DAL',STR_TO_DATE('11-17-2021', '%m-%d-%Y'),STR_TO_DATE('11-17-2021', '%m-%d-%Y'),'2021-11-17 09:24:02','2021-11-17 02:24:02');

insert into flight values(5,'UA1','United Airlines',176,'NYC',
'AUS',STR_TO_DATE('11-02-2021', '%m-%d-%Y'),STR_TO_DATE('11-02-2021', '%m-%d-%Y'),'2021-11-02 02:24:02','2021-11-02 01:24:02');

insert into flight values(6,'UA1','United Airlines',189.90,'NYC',
'AUS',STR_TO_DATE('11-02-2021', '%m-%d-%Y'),STR_TO_DATE('11-02-2021', '%m-%d-%Y'),'2021-11-02 05:24:02','2021-11-02 01:24:02');

insert into flight values(7,'SW1','South West',150.87,'LA',
'NYC',STR_TO_DATE('11-14-2021', '%m-%d-%Y'),STR_TO_DATE('11-14-2021', '%m-%d-%Y'),'2021-11-14 04:24:02','2021-11-14 05:24:02');

insert into flight values(8,'SW2','South West',154.89,'AUS',
'LA',STR_TO_DATE('11-24-2021', '%m-%d-%Y'),STR_TO_DATE('11-24-2021', '%m-%d-%Y'),'2021-11-24 03:24:02','2021-11-24 03:24:02');


insert into flight values(9,'SW3','South West',134.76,'LA',
'DAL',STR_TO_DATE('11-09-2021', '%m-%d-%Y'),STR_TO_DATE('11-09-2021', '%m-%d-%Y'),'2021-11-09 02:24:02','2021-11-09 02:24:02');

insert into flight values(10,'UA1','United Airlines',231.98,'DAL',
'LA',STR_TO_DATE('11-03-2021', '%m-%d-%Y'),STR_TO_DATE('11-03-2021', '%m-%d-%Y'),'2021-11-03 01:24:02','2021-11-09 02:24:02');
 
 
 
 
 insert into flight values(11,'AA3','American Airlines',200,'DAL',
'NYC',STR_TO_DATE('11-13-2021', '%m-%d-%Y'),STR_TO_DATE('11-13-2021', '%m-%d-%Y'),'2021-11-13 07:24:02','2021-11-13 02:24:02');

insert into flight values(12,'SW1','South West',120,'NYC',
'DAL',STR_TO_DATE('11-17-2021', '%m-%d-%Y'),STR_TO_DATE('11-17-2021', '%m-%d-%Y'),'2021-11-17 11:24:02','2021-11-17 02:24:02');

insert into flight values(13,'UA1','United Airlines',116,'NYC',
'AUS',STR_TO_DATE('11-02-2021', '%m-%d-%Y'),STR_TO_DATE('11-02-2021', '%m-%d-%Y'),'2021-11-02 12:24:02','2021-11-02 01:24:02');

insert into flight values(14,'UA1','United Airlines',176.90,'NYC',
'AUS',STR_TO_DATE('11-02-2021', '%m-%d-%Y'),STR_TO_DATE('11-02-2021', '%m-%d-%Y'),'2021-11-02 09:24:02','2021-11-02 01:24:02');

insert into flight values(15,'SW1','South West',254,'LA',
'NYC',STR_TO_DATE('11-14-2021', '%m-%d-%Y'),STR_TO_DATE('11-14-2021', '%m-%d-%Y'),'2021-11-14 09:24:02','2021-11-14 05:24:02');

insert into flight values(16,'SW2','South West',198,'AUS',
'LA',STR_TO_DATE('11-24-2021', '%m-%d-%Y'),STR_TO_DATE('11-24-2021', '%m-%d-%Y'),'2021-11-24 08:24:02','2021-11-24 03:24:02');


insert into flight values(17,'SW3','South West',187,'LA',
'DAL',STR_TO_DATE('11-09-2021', '%m-%d-%Y'),STR_TO_DATE('11-09-2021', '%m-%d-%Y'),'2021-11-09 07:24:02','2021-11-09 02:24:02');

insert into flight values(18,'UA1','United Airlines',890,'DAL',
'LA',STR_TO_DATE('11-03-2021', '%m-%d-%Y'),STR_TO_DATE('11-03-2021', '%m-%d-%Y'),'2021-11-03 09:24:02','2021-11-09 02:24:02');
 
 insert into flight values(19,'UA1','United Airlines',890,'DAL',
'LA',STR_TO_DATE('11-03-2021', '%m-%d-%Y'),STR_TO_DATE('11-03-2021', '%m-%d-%Y'),'2021-11-03 09:24:02','2021-11-09 02:24:02');
 
 
 insert into flight values(20,'UA1','United Airlines',890,'DAL',
'LA',STR_TO_DATE('11-03-2021', '%m-%d-%Y'),STR_TO_DATE('11-03-2021', '%m-%d-%Y'),'2021-11-03 09:24:02','2021-11-09 02:24:02');
 
 
insert into flight values(21,'AA1','American Airlines',160,'PHILLY',
'NYC',STR_TO_DATE('11-12-2021', '%m-%d-%Y'),STR_TO_DATE('11-12-2021', '%m-%d-%Y'),'2021-11-12 10:24:02','2021-11-12 1:24:02');

insert into flight values(22,'AA2','American Airlines',150,'PHILLY',
'NYC',STR_TO_DATE('11-12-2021', '%m-%d-%Y'),STR_TO_DATE('11-12-2021', '%m-%d-%Y'),'2021-11-12 12:24:02','2021-11-12 1:24:02'); 
 
 insert into flight values(23,'SW1','South West',170,'NYC',
'DAL',STR_TO_DATE('11-17-2021', '%m-%d-%Y'),STR_TO_DATE('11-17-2021', '%m-%d-%Y'),'2021-11-17 09:24:02','2021-11-17 02:24:02');
 
 insert into flight values(24,'SW1','South West',150,'NYC',
'DAL',STR_TO_DATE('11-17-2021', '%m-%d-%Y'),STR_TO_DATE('11-17-2021', '%m-%d-%Y'),'2021-11-17 09:24:02','2021-11-17 02:24:02');
 
insert into flight values(25,'SW1','South West',130,'NYC',
'DAL',STR_TO_DATE('11-17-2021', '%m-%d-%Y'),STR_TO_DATE('11-17-2021', '%m-%d-%Y'),'2021-11-17 09:24:02','2021-11-17 02:24:02');

 
 SELECT * FROM FLIGHT WHERE DEPARTURE_CITY = "NYC" ORDER BY PRICE;
 
 delete from flight where id =20;
 SELECT * FROM FLIGHT WHERE DEPARTURE_CITY ='PHILLY' AND ARRIVAL_CITY = 'NYC'  AND DATE_OF_DEPARTURE='2021-11-12' AND OPERATING_AIRLINES="American Airlines" ORDER BY PRICE;