SET SERVEROUTPUT ON;
DECLARE
   v_fname VARCHAR2(100);
   CURSOR c_employees IS 
   SELECT FIRST_NAME FROM employees WHERE EMPLOYEE_ID < 105;
BEGIN
   OPEN c_employees;
   LOOP
     FETCH c_employees INTO v_fname;
     EXIT WHEN c_employees%NOTFOUND;
     DBMS_OUTPUT.PUT_LINE(v_fname);
   END LOOP;
   CLOSE c_employees;
END;
/

-- Parameterized Cursor

DECLARE
   v_fname VARCHAR2(100);
   CURSOR c_employees (v_empId NUMBER) IS
   SELECT FIRST_NAME FROM employees WHERE EMPLOYEE_ID < v_empId;
BEGIN
   OPEN c_employees(105);
   LOOP
     FETCH c_employees INTO v_fname;
     EXIT WHEN c_employees%NOTFOUND;
     DBMS_OUTPUT.PUT_LINE(v_fname);
   END LOOP;
   CLOSE c_employees;
END;
/

-- Parameterized Cursor With Default Value

DECLARE
   v_fname VARCHAR2(100);
   v_empId NUMBER;
   CURSOR c_employees (v_emp_id NUMBER := 105) IS
   SELECT EMPLOYEE_ID, FIRST_NAME FROM employees WHERE EMPLOYEE_ID < v_emp_id;
BEGIN
   OPEN c_employees;
   LOOP
     FETCH c_employees INTO v_empId, v_fname;
     EXIT WHEN c_employees%NOTFOUND;
     DBMS_OUTPUT.PUT_LINE(v_empId || ' ' || v_fname);
   END LOOP;
   CLOSE c_employees;
END;
/

-- Cursor For Loop

DECLARE
   CURSOR c_employees IS 
   SELECT FIRST_NAME, LAST_NAME FROM employees WHERE EMPLOYEE_ID > 90;
BEGIN
   FOR L_IDX IN c_employees
   LOOP
     DBMS_OUTPUT.PUT_LINE(L_IDX.FIRST_NAME || ' ' || L_IDX.LAST_NAME);
   END LOOP;
END;
/

-- For Loop With Parameterized Cursor

DECLARE
   CURSOR c_employees (v_empId NUMBER) IS
   SELECT EMPLOYEE_ID, FIRST_NAME FROM employees WHERE EMPLOYEE_ID < v_empId;
BEGIN
   FOR L_IDX IN c_employees (105) 
   LOOP
     DBMS_OUTPUT.PUT_LINE(L_IDX.EMPLOYEE_ID || ' ' || L_IDX.FIRST_NAME);
   END LOOP;
END;
/