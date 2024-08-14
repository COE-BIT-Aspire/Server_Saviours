SET SERVEROUTPUT ON;

DECLARE
   result NUMBER;
BEGIN
   result := (10/0);
   DBMS_OUTPUT.PUT_LINE(result);
EXCEPTION
   when zero_divide then
   DBMS_OUTPUT.PUT_LINE(sqlerrm);
END;