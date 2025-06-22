-- Table Based Record 

-- All Columns

SET SERVEROUTPUT ON;
DECLARE
   v_emp employees%ROWTYPE;
BEGIN
   SELECT * INTO v_emp FROM employees WHERE EMPLOYEE_ID = 100;
   DBMS_OUTPUT.PUT_LINE(v_emp.FIRST_NAME || ' ' || v_emp.SALARY);
   DBMS_OUTPUT.PUT_LINE(v_emp.JOIN_DATE);
END;
/

-- Selected Columns

DECLARE
   v_emp employees%ROWTYPE;
BEGIN
   SELECT FIRST_NAME, JOIN_DATE INTO v_emp.FIRST_NAME, v_emp.JOIN_DATE FROM employees WHERE EMPLOYEE_ID = 100;
   DBMS_OUTPUT.PUT_LINE(v_emp.FIRST_NAME);
   DBMS_OUTPUT.PUT_LINE(v_emp.JOIN_DATE);
END;
/

-- Cursor Based Record 

-- Single Record

DECLARE
   CURSOR c_employees IS 
   SELECT FIRST_NAME, SALARY FROM employees WHERE EMPLOYEE_ID = 100;
   v_employees c_employees%ROWTYPE;
BEGIN
   OPEN c_employees;
   FETCH c_employees INTO v_employees;
   DBMS_OUTPUT.PUT_LINE(v_employees.FIRST_NAME);
   DBMS_OUTPUT.PUT_LINE(v_employees.SALARY);
   CLOSE c_employees;
END;
/

-- Multiple Records

DECLARE
   CURSOR c_employees IS
   SELECT FIRST_NAME, SALARY FROM employees WHERE EMPLOYEE_ID < 105;
   v_employees c_employees%ROWTYPE;
BEGIN
   OPEN c_employees;
   LOOP
     FETCH c_employees INTO v_employees;
     EXIT WHEN c_employees%NOTFOUND;
     DBMS_OUTPUT.PUT_LINE(v_employees.FIRST_NAME || ' ' || v_employees.SALARY);
   END LOOP;
   CLOSE c_employees;
END;
/

-- User Defined Record 

DECLARE
   TYPE r_dept IS RECORD(
fname employees.FIRST_NAME%TYPE,
dept department.DEPARTMENT_NAME%TYPE
);
v_dept r_dept;
BEGIN
   SELECT FIRST_NAME, DEPARTMENT_NAME INTO v_dept.fname, v_dept.dept FROM employees JOIN department USING (DEPARTMENT_ID) WHERE EMPLOYEE_ID = 100;
   DBMS_OUTPUT.PUT_LINE(v_dept.fname || ' ' || v_dept.dept);
END;
/