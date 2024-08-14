-- User Defined Variable

SET SERVEROUTPUT ON;

DECLARE
    book_name VARCHAR2(100);
BEGIN
    book_name := 'Atomic Habits';  
    DBMS_OUTPUT.PUT_LINE(book_name);
END;
/

-- Bind Variable - 1st Way Of Initializing

VARIABLE v_bind1 VARCHAR2(100);
EXECUTE :v_bind1 := 'Aspire Systems';

-- Bind Variable - 2nd Way Of Initializing & 1st Way Of Executing

SET SERVEROUTPUT ON;
BEGIN
  :v_bind1 := 'Aspire Systems';
  DBMS_OUTPUT.PUT_LINE(:v_bind1);
END;
/

-- 2nd Way Of Executing
PRINT :v_bind1;

-- 3rd Way Of Executing
SET AUTOPRINT ON;
VARIABLE v_bind2 VARCHAR2(100);
EXECUTE :v_bind2 := 'Aspirian';