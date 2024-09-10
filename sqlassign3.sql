SELECT category, SUM(amount) AS total_spent
FROM Expensetrackerapp
GROUP BY category;
SELECT category, AVG(amount) AS average_spent
FROM Expencetrackerapp
GROUP BY category;
