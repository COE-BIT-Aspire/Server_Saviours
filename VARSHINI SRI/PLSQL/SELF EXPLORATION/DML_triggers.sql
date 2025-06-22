-- DML Trigger

CREATE TABLE Books(
  Book_Name VARCHAR2(100)
);

SET SERVEROUTPUT ON;
CREATE OR REPLACE TRIGGER SelfHelp_Books1
BEFORE INSERT ON Books
FOR EACH ROW
ENABLE
DECLARE
  v_user VARCHAR2(20);
BEGIN
  SELECT user INTO v_user FROM dual;
  DBMS_OUTPUT.PUT_LINE('You Just Inserted A Line Miss. '||v_user);
END;

INSERT INTO Books VALUES('The Power Of Your Subconscious Mind');


CREATE OR REPLACE TRIGGER SelfHelp_Books2
BEFORE UPDATE ON Books
FOR EACH ROW
ENABLE
DECLARE
  v_user VARCHAR2(20);
BEGIN
  SELECT user INTO v_user FROM dual;
  DBMS_OUTPUT.PUT_LINE('You Just Updated A Line Miss. '||v_user);
END;

UPDATE Books SET Book_Name = 'Deep Work' WHERE Book_Name = 'The Power Of Your Subconscious Mind';


CREATE OR REPLACE TRIGGER tr_books
BEFORE INSERT OR DELETE OR UPDATE ON Books
FOR EACH ROW
ENABLE
DECLARE
  v_user VARCHAR2(20);
BEGIN
  SELECT user INTO v_user FROM dual;
  IF INSERTING THEN
     DBMS_OUTPUT.PUT_LINE('One Row Inserted By ' || v_user);
  ELSIF DELETING THEN 
     DBMS_OUTPUT.PUT_LINE('One Row Deleted By ' || v_user);
  ELSIF UPDATING THEN
     DBMS_OUTPUT.PUT_LINE('One Row Updated By ' || v_user);
  END IF;
END;

INSERT INTO Books VALUES('Ikigai');
UPDATE Books SET Book_Name = 'Atomic Habits' WHERE Book_Name = 'Ikigai';
DELETE FROM Books WHERE Book_Name = 'Atomic Habits';

-- Table Auditing using DML Triggers

CREATE TABLE Books_Audit(
 new_name VARCHAR2(30),
 old_name VARCHAR2(30),
 user_name VARCHAR2(30),
 entry_date VARCHAR2(30),
 operation VARCHAR2(30)
);

CREATE OR REPLACE TRIGGER book_audit
BEFORE INSERT OR DELETE OR UPDATE ON Books
FOR EACH ROW
ENABLE
DECLARE
   v_user VARCHAR2(30);
   v_date VARCHAR2(30);
BEGIN
SELECT user, TO_CHAR(sysdate, 'DD/MON/YYYY HH24:MI:SS') INTO v_user, v_date FROM dual;
IF INSERTING THEN
   INSERT INTO Books_Audit(new_name, old_name, user_name, entry_date, operation)
   VALUES (:NEW.Book_Name, NULL, v_user, v_date, 'Insert');
ELSIF DELETING THEN
   INSERT INTO Books_Audit(new_name, old_name, user_name, entry_date, operation) 
   VALUES(NULL, :OLD.Book_Name, v_user, v_date, 'Delete');
ELSIF UPDATING THEN
   INSERT INTO Books_Audit(new_name, old_name, user_name, entry_date, operation) 
   VALUES(:NEW.Book_Name, :OLD.Book_Name, v_user, v_date, 'Update');
END IF;
END;

SELECT * FROM Books_Audit;
INSERT INTO Books VALUES ('Attitude is everything');
UPDATE Books SET Book_Name = 'Rich Dad Poor Dad' WHERE Book_Name = 'Attitude is everything';
DELETE FROM Books WHERE Book_Name = 'Rich Dad Poor Dad';

-- Table Backup Using Trigger

DESC Books;
CREATE TABLE Books_Backup AS SELECT * FROM BOOKS WHERE 1=2;

CREATE OR REPLACE TRIGGER Bk_Backup
BEFORE INSERT OR DELETE OR UPDATE ON Books
FOR EACH ROW
ENABLE
BEGIN
  IF INSERTING THEN
     INSERT INTO Books_Backup (Book_Name) VALUES (:NEW.Book_Name);
  ELSIF DELETING THEN
     DELETE FROM Books_Backup WHERE Book_Name = :old.Book_Name;
  ELSIF UPDATING THEN
     UPDATE Books_Backup SET Book_Name = :NEW.Book_Name WHERE Book_Name = :OLD.Book_Name;
  END IF;
END;

SELECT * FROM Books;
SELECT * FROM Books_Backup;
INSERT INTO Books VALUES ('Ikigai');
INSERT INTO Books VALUES ('Deep Work');
UPDATE Books SET Book_Name = 'Atomic Habits' WHERE Book_Name = 'Ikigai';
DELETE FROM Books WHERE Book_Name = 'Deep Work';