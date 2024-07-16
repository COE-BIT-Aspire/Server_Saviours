-- Simple Loop

SET SERVEROUTPUT ON;

DECLARE
   v_counter NUMBER := 0;
   v_result NUMBER;
BEGIN
  LOOP
    v_counter := v_counter + 1;
    v_result := 6 * v_counter;
    DBMS_OUTPUT.PUT_LINE('6' || ' X ' || v_counter || ' = ' || v_result);
    EXIT WHEN v_counter >= 10;
  END LOOP;
END;

-- While Loop

SET SERVEROUTPUT ON;

DECLARE
   v_counter NUMBER := 1;
   v_result  NUMBER;
BEGIN
  WHILE v_counter <= 10 LOOP
    v_result := 5 * v_counter;
    DBMS_OUTPUT.PUT_LINE('5' || ' X ' || v_counter || ' = ' || v_result);
    v_counter := v_counter + 1;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('Outside the loop');
END;


SET SERVEROUTPUT ON;

DECLARE
   v_test BOOLEAN := TRUE;
   v_counter NUMBER := 0;
BEGIN
  WHILE v_test LOOP
    v_counter := v_counter + 1;
    DBMS_OUTPUT.PUT_LINE(v_counter);
    IF v_counter = 10 THEN 
       v_test := FALSE;
    END IF;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('Outside the loop');
END;

-- FOR Loop

SET SERVEROUTPUT ON;

BEGIN
  FOR v_counter IN 1 .. 10 LOOP
      DBMS_OUTPUT.PUT_LINE(v_counter);
  END LOOP;
END;


SET SERVEROUTPUT ON;

BEGIN
  FOR v_counter IN REVERSE 1 .. 10 LOOP
      DBMS_OUTPUT.PUT_LINE(v_counter);
  END LOOP;
END;


SET SERVEROUTPUT ON;

DECLARE
   v_result NUMBER;
BEGIN
  FOR v_counter IN 1 .. 10 LOOP
      v_result := 12 * v_counter;
      DBMS_OUTPUT.PUT_LINE('12' || ' X ' || v_counter || ' = ' || v_result);
  END LOOP;
END;