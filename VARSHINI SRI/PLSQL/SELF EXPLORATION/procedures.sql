-- Procedure

SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE pr_company IS
  v_name VARCHAR2(100) := 'Varshini Sri';
  v_cname VARCHAR2(100) := 'Aspire Systems';
BEGIN
  DBMS_OUTPUT.PUT_LINE('I am ' || v_name || ' from ' || v_cname);
END pr_company;
/

EXECUTE pr_company;
/

BEGIN
  pr_company;
END;
/

-- Procedure With Parameters

CREATE OR REPLACE PROCEDURE emp_sal( jobs_id NUMBER, sal_raise NUMBER) 
IS
BEGIN
  UPDATE employees SET SALARY = SALARY * sal_raise WHERE JOB_ID = jobs_id;
END;
/