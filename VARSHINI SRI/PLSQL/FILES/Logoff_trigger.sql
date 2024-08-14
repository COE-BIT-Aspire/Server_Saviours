DESC hr_event_audit;
SELECT * FROM hr_event_audit;
TRUNCATE TABLE hr_event_audit;

CREATE OR REPLACE TRIGGER log_off_audit
BEFORE LOGOFF ON DATABASE
BEGIN
  INSERT INTO hr_event_audit VALUES(
         ora_sysevent,
         NULL,
         NULL,
         SYSDATE,
         TO_CHAR(sysdate, 'hh24:mi:ss')
         );
COMMIT;
END;

SELECT * FROM hr_event_audit;