CREATE OR REPLACE FUNCTION circle_area (radius NUMBER) 
RETURN NUMBER IS
pi  	CONSTANT NUMBER(7,2) :=	3.141;
area 	NUMBER(7,2);
BEGIN
  area := pi * (radius * radius);
  RETURN area; 
END;