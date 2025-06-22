SET SERVEROUTPUT ON;
CREATE OR REPLACE VIEW Sales AS
SELECT customer_id, SUM(unit_price * quantity) total, ROUND(SUM(unit_price * quantity) * 0.05) credit, 
FROM order_items INNER JOIN orders USING (order_id) 
WHERE status = "shipped"
GROUP BY customer_id;
/
