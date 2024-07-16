CREATE TABLE trainer( 
    full_name VARCHAR2(20)
);

CREATE TABLE subject( 
    subject_name VARCHAR2(15)
);

INSERT INTO trainer VALUES ('Anitha');
INSERT INTO subject VALUES ('PLSQL');

CREATE VIEW aspire_systems AS
SELECT full_name, subject_name FROM trainer, subject;

CREATE OR REPLACE TRIGGER tr_Io_Insert
INSTEAD OF INSERT ON aspire_systems
FOR EACH ROW
BEGIN
  INSERT INTO trainer (full_name) VALUES (:new.full_name);
  INSERT INTO subject (subject_name) VALUES (:new.subject_name);
END;