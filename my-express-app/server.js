const express = require('express');
const app = express();
const port = 3000;

// Sample expense records (usually this data comes from a database)
const expenses = [
  { userId: 1, amount: 50 },
  { userId: 1, amount: 75 },
  { userId: 2, amount: 100 },
  { userId: 1, amount: 25 },
];

// API endpoint to calculate total expense for a user
app.get('/api/expense', (req, res) => {
  const userId = parseInt(req.query.userId, 10);
  
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid userId parameter' });
  }

  // Calculate total expenses for the user
  const totalExpense = expenses
    .filter(expense => expense.userId === userId)
    .reduce((total, expense) => total + expense.amount, 0);

  // Return the total expense amount as a JSON response
  res.json({ userId: userId, totalExpense: totalExpense });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
