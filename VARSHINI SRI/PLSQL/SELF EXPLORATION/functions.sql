SET SERVEROUTPUT ON;
CREATE OR REPLACE FUNCTION circle_area (radius NUMBER)
RETURN NUMBER IS
   pi CONSTANT NUMBER(7,3) := 3.141;
   area NUMBER(7,3);
BEGIN
   area := pi * radius * radius;
   RETURN area;
END;
/

DECLARE
   res NUMBER(7,3);
BEGIN
   res := circle_area(24);
   DBMS_OUTPUT.PUT_LINE(res);
END;
/