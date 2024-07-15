SET SERVEROUTPUT ON;

DECLARE
   v_num NUMBER := 9;
BEGIN
  IF v_num > 10 THEN 
     DBMS_OUTPUT.PUT_LINE('Inside The IF');
  END IF;
     DBMS_OUTPUT.PUT_LINE('Outside The IF');
END;
/

DECLARE
   v_website VARCHAR2(30) := 'aspiresys.com';
   v_author VARCHAR2(30)  := 'Gowri Shankar';
BEGIN
  IF v_website = 'aspiresys.com' AND v_author = 'Gowri Shankar' THEN 
     DBMS_OUTPUT.PUT_LINE('Everything is awesome');
  END IF;
     DBMS_OUTPUT.PUT_LINE('Thanks for visiting our website');
END;