Q1: SELECT * FROM customers			<USE sql_store>
Q2: SELECT * FROM customers WHERE customer_id = 1
Q3: SELECT * FROM customers WHERE customer_id = 1 ORDER BY first_name
Q4: SELECT * FROM customers ORDER BY first_name;
Q5: SELECT 1, 2;
Q6: SELECT first_name, last_name FROM customers
Q7: SELECT last_name, first_name FROM customers
Q8: SELECT last_name, first_name, points FROM customers
Q9: SELECT last_name, first_name, points + 10 FROM customers
Q10: SELECT last_name, first_name, points, points + 10 FROM customers
Q11: SELECT last_name, first_name, points, points * 10 + 100 FROM customers
Q11: SELECT 
			last_name, 
			first_name, 
			points, 
			points * 10 + 100 
		FROM customers
Q12: SELECT 
			last_name, 
			first_name, 
			points, 
			(points + 10) * 100 AS discount_factor
		FROM customers
Q13: SELECT state FROM customers;
Q14: SELECT DISTINCT state FROM customers;
Q15: 
	SELECT name, unit_price, unit_price * 1.1 AS new_price
	FROM products;
Q16: SELECT * FROM Customers WHERE points > 3000;
Q17: SELECT * FROM Customers WHERE state = 'VA';
Q18: SELECT * FROM Customers WHERE state != 'va';	(or)
Q18: SELECT * FROM Customers WHERE state <> 'va';
Q19: SELECT * FROM Customers WHERE birth_date > '1990-01-01';
Q20: SELECT * FROM orders WHERE order_date >= '2019-01-01';
Q21: SELECT * FROM Customers WHERE birth_date >= '1990-01-01' AND points > 1000;
Q22: SELECT * FROM Customers WHERE birth_date >= '1990-01-01' OR points > 1000;
Q22: SELECT * FROM Customers WHERE birth_date >= '1990-01-01' OR points > 1000 AND state = 'VA';
Q23: SELECT * FROM Customers WHERE birth_date >= '1990-01-01' OR (points > 1000 AND state = 'VA');
Q23: SELECT * 
		 FROM Customers 
		 WHERE birth_date >= '1990-01-01' OR 
		 		(points > 1000 AND state = 'VA');

Q23: SELECT * 
		 FROM Customers 
		 WHERE NOT (birth_date >= '1990-01-01' OR points > 1000);
Q24: SELECT * 
		 FROM order_items 
		 WHERE order_id = 6 AND unit_price * quantity > 30;

Q25: SELECT *
		FROM Customers
		WHERE state = 'VA' OR state = 'GA' OR state = 'FL';

Q: SELECT * 
	FROM Customers
	WHERE state = 'VA' OR 'GA' OR 'FL';

Q26: SELECT *
	FROM Customers
	WHERE state IN ('VA', 'FL', 'GA');

Q27: SELECT *
	FROM Customers
	WHERE state NOT IN ('VA', 'FL', 'GA');

Q28: SELECT * 
	FROM products
	WHERE quantity_in_stock IN (49, 38, 72);

Q29: SELECT * 
	FROM customers
	WHERE points >= 1000 AND points <= 3000;

Q30: SELECT * 
	FROM customers
	WHERE points BETWEEN 1000 AND 3000;

Q31: SELECT * 
	FROM customers
	WHERE birth_date BETWEEN '1/1/1990' and '1/1/2000';	-- no output

Q31: SELECT * 
	FROM customers
	WHERE birth_date BETWEEN '1990-01-01' and '2000-01-01';

Q32: SELECT * 
	FROM customers 
	WHERE last_name LIKE 'b%'