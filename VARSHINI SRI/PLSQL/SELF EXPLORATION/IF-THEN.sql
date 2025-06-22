SET SERVEROUTPUT ON;

DECLARE
   v_num NUMBER(10) := 9;
BEGIN
   IF v_num < 10 THEN
      DBMS_OUTPUT.PUT_LINE('INSIDE THE IF');
   END IF;
      DBMS_OUTPUT.PUT_LINE('OUTSIDE THE IF');
END;
/

DECLARE
   v_website VARCHAR2(100) := 'aspiresys.com';
   v_author VARCHAR2(100) := 'Gowri Shankar';
BEGIN
   IF v_website = 'aspiresys.com' AND v_author = 'Gowri Shankar' THEN
      DBMS_OUTPUT.PUT_LINE('WELCOME TO ASPIRE SYSTEMS');
   END IF;
      DBMS_OUTPUT.PUT_LINE('THANK YOU FOR VISITING OUR WEBSITE');
END;
/
