SELECT * FROM Expenses;
SELECT date, category, amount FROM Expenses;
SELECT * 
FROM Expenses 
WHERE date >= '2021-01-01' AND date <= '2024-12-15';
SELECT * 
FROM Expenses 
WHERE category = 'Entertainment';
SELECT * 
FROM Expenses 
WHERE amount > 50;
SELECT * 
FROM Expenses 
WHERE amount > 75 
  AND category = 'Food';
SELECT * 
FROM Expenses 
WHERE category = 'Transportation' OR category = 'Groceries';
SELECT * 
FROM Expenses 
WHERE category != 'Rent';
SELECT * 
FROM Expenses 
ORDER BY amount DESC;
SELECT * 
FROM Expenses 
ORDER BY date DESC, category ASC;
CREATE TABLE Income (
    income_id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(10,2) NOT NULL,
    date DATE NOT NULL,
    source VARCHAR(50) NOT NULL
);
ALTER TABLE Income
ADD COLUMN category VARCHAR(50);
ALTER TABLE Income
DROP COLUMN source;
DROP TABLE Income;
