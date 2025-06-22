-- User Defined Variables

SET SERVEROUTPUT ON;

DECLARE
    book_name VARCHAR2(100);
BEGIN
    book_name := 'Atomic Habits';  
    DBMS_OUTPUT.PUT_LINE(book_name);
END;
/

DECLARE
   v_fname VARCHAR2(100);
   v_salary NUMBER(10);
BEGIN
   SELECT FIRST_NAME, SALARY INTO v_fname, v_salary FROM employees WHERE EMPLOYEE_ID = 100;
   DBMS_OUTPUT.PUT_LINE(v_fname || ' has salary ' || v_salary);
END;
/

-- Bind Variables

VARIABLE book_name VARCHAR2(100);
EXECUTE :book_name := 'Limitless';
PRINT :book_name;
/

SET AUTOPRINT ON;
VARIABLE book_name VARCHAR2(100);
EXECUTE :book_name := 'Limitless';
/

BEGIN
   :book_name := 'Limitless';
   DBMS_OUTPUT.PUT_LINE(:book_name);
END;
/