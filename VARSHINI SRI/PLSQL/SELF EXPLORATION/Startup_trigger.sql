CREATE TABLE startup_audit 
(
  Event_type  VARCHAR2(15),
  event_date  DATE,
  event_time  VARCHAR2(15)
);

CREATE OR REPLACE TRIGGER startup_audit
AFTER STARTUP ON DATABASE
BEGIN
  INSERT INTO startup_audit VALUES
(
    ora_sysevent,
    SYSDATE,
    TO_CHAR(sysdate, 'hh24:mm:ss')
  );
END;
/

