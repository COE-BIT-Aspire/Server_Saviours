CREATE TABLE hr_event_audit
(
 event_type VARCHAR2(20),
 logon_date DATE,
 logon_time VARCHAR2(15),
 logof_date DATE,
 logof_time VARCHAR2(15)
);

CREATE OR REPLACE TRIGGER hr_logon_audit
AFTER LOGON ON DATABASE
BEGIN
 INSERT INTO hr_event_audit VALUES(
 ora_sysevent,
 sysdate,
 TO_CHAR(sysdate, 'hh24:mi:ss'),
 NULL,
 NULL
 );
 COMMIT;
END;

SELECT * FROM hr_event_audit;
DISC;
CONN sys/sys;