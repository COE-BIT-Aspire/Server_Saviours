SET SERVEROUTPUT ON;

DECLARE
  v_num NUMBER := &eneter_a_number;
BEGIN
  IF MOD(v_num, 2) = 0 THEN
     DBMS_OUTPUT.PUT_LINE(v_num || ' is even');
  ELSE
     DBMS_OUTPUT.PUT_LINE(v_num || ' is odd');
  END IF;
     DBMS_OUTPUT.PUT_LINE('If Then Else Construct Complete');
END;