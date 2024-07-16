CREATE OR REPLACE TRIGGER io_update
INSTEAD OF UPDATE ON aspire_systems
FOR EACH ROW
BEGIN
  UPDATE trainer SET FULL_NAME = :new.full_name 
  WHERE FULL_NAME = :old.full_name;
  UPDATE subject SET subject_NAME = :new.subject_name 
  WHERE subject_NAME = :old.subject_name;
END;
/

UPDATE aspire_systems SET FULL_NAME = 'Anitha Manogaran' WHERE subject_NAME = 'PLSQL';