SET SERVEROUTPUT ON;

DECLARE
   v_salary NUMBER;
   v_fname VARCHAR2(255);
BEGIN
  SELECT SALARY, FIRST_NAME INTO v_salary, v_fname FROM employees
  WHERE EMPLOYEE_ID = 100;
  DBMS_OUTPUT.PUT_LINE(v_fname || ' Has Salary ' || v_salary);
END;