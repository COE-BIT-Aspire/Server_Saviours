-- Table Based Record Datatype

-- All Columns
SET SERVEROUTPUT ON;
DECLARE
  v_emp employees%ROWTYPE;
BEGIN
  SELECT * INTO v_emp FROM employees
  WHERE EMPLOYEE_ID = 100;
  DBMS_OUTPUT.PUT_LINE (v_emp.FIRST_NAME ||' '||v_emp.SALARY);
  DBMS_OUTPUT.PUT_LINE(v_emp.JOIN_DATE);
END;
/

-- Selected Columns
SET SERVEROUTPUT ON;
DECLARE
  v_emp employees%ROWTYPE;
BEGIN
  SELECT FIRST_NAME, JOIN_DATE INTO v_emp.FIRST_NAME, v_emp.JOIN_DATE FROM employees WHERE EMPLOYEE_ID = 100;
  DBMS_OUTPUT.PUT_LINE (v_emp.FIRST_NAME);
  DBMS_OUTPUT.PUT_LINE (v_emp.JOIN_DATE);
END;
/

-- Cursor Based Record Datatype

-- Selected Columns
SET SERVEROUTPUT ON;
DECLARE
  CURSOR cur_employees
  IS 
  SELECT FIRST_NAME, SALARY FROM employees WHERE EMPLOYEE_ID = 100;
  var_emp cur_employees%ROWTYPE;
BEGIN
  OPEN cur_employees;
  FETCH cur_employees INTO var_emp;
  DBMS_OUTPUT.PUT_LINE (var_emp.FIRST_NAME);
  DBMS_OUTPUT.PUT_LINE (var_emp.SALARY);
  CLOSE cur_employees;
END;
/

-- All Columns
SET SERVEROUTPUT ON;
DECLARE
  CURSOR cur_employees IS
  SELECT FIRST_NAME, SALARY FROM employees
  WHERE EMPLOYEE_ID > 100; 
  var_emp cur_employees%ROWTYPE;
BEGIN
  OPEN cur_employees;
  LOOP
    FETCH cur_employees INTO var_emp;
    EXIT WHEN cur_employees%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE (var_emp.FIRST_NAME||' '||var_emp.SALARY);
  END LOOP;
  CLOSE cur_employees;
END;
/
