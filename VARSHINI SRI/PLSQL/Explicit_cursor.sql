SET SERVEROUTPUT ON;
DECLARE
  v_name VARCHAR2(30);
  CURSOR cur_employees IS 
  SELECT FIRST_NAME FROM employees 
  WHERE employee_id < 105;
BEGIN
  OPEN cur_employees; 
  LOOP 
    FETCH cur_employees INTO v_name; 
    DBMS_OUTPUT.PUT_LINE (v_name); 
    EXIT WHEN cur_employees%NOTFOUND; 
  END LOOP;
  CLOSE cur_employees;
END;
/

-- Parameterized Cursor

SET SERVEROUTPUT ON;
DECLARE
  v_name VARCHAR2 (30); 
  CURSOR p_cur_employees (var_e_id VARCHAR2) IS 
  SELECT FIRST_NAME FROM employees 
  WHERE EMPLOYEE_ID < var_e_id;
BEGIN
  OPEN p_cur_employees (105); 
LOOP 
    FETCH p_cur_employees INTO v_name; 
    EXIT WHEN p_cur_employees%NOTFOUND; 
    DBMS_OUTPUT.PUT_LINE(v_name );  
  END LOOP;
  CLOSE p_cur_employees;
END;
/

-- Parameterized Cursor With Default Value

SET SERVEROUTPUT ON;
DECLARE
  v_name VARCHAR2(30);
  v_eid  NUMBER(10);
  CURSOR cur_employees(var_e_id NUMBER := 90 )
  IS
  SELECT FIRST_NAME, EMPLOYEE_ID FROM employees 
  WHERE EMPLOYEE_ID > var_e_id; 
BEGIN
  OPEN cur_employees;
  LOOP
    FETCH cur_employees INTO v_name, v_eid; 
    EXIT WHEN cur_employees%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_name ||' '||v_eid); 
  END LOOP;
  CLOSE cur_employees;
END;
/

-- Cursor For Loop

SET SERVEROUTPUT ON;
DECLARE
 CURSOR cur_employees IS 
 SELECT FIRST_NAME, LAST_NAME FROM employees
 WHERE EMPLOYEE_ID >90;
BEGIN
  FOR L_IDX IN cur_employees
  LOOP
    DBMS_OUTPUT.PUT_LINE(L_IDX.FIRST_NAME||' '||L_IDX.LAST_NAME);
  END LOOP;
END;
/

-- For Loop With Parameterized Cursor

DECLARE
  CURSOR cur_employees( var_e_id NUMBER) IS 
  SELECT FIRST_NAME, EMPLOYEE_ID FROM employees
  WHERE EMPLOYEE_ID > var_e_id;
BEGIN
  FOR l_idx IN cur_employees(90)
  LOOP
    DBMS_OUTPUT.PUT_LINE(l_idx.EMPLOYEE_ID||' '||l_idx.FIRST_NAME);
  END LOOP;
END;
/

-- 