-- Procedure

CREATE OR REPLACE PROCEDURE pr_company IS
  var_name VARCHAR2 (30):= 'Varshini';
  var_web VARCHAR2 (30) := 'aspiresys.com';
BEGIN
  DBMS_OUTPUT.PUT_LINE('I am '||var_name||' from '||var_web);
END pr_company;

SET SERVEROUTPUT ON;
EXEC pr_company;

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