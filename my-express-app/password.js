const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

// Mock user data
const mockUser = {
  username: 'testuser',
  password: '$2a$10$YQ5/I3T4uFTN/7SKGdUpeuPsSZvnlFf.zD6cfF7N3Rifb.vy3DqW2' // hashed password is 'password123'
};

// Middleware to check authentication
const authenticateUser = (username, password) => {
  // Validate user credentials
  if (username === mockUser.username) {
    return bcrypt.compare(password, mockUser.password);
  }
  return Promise.resolve(false);
};

// POST /api/auth/login
app.post('/api/auth/login', [
  body('username').isString().notEmpty(),
  body('password').isString().notEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    const isValid = await authenticateUser(username, password);
    if (!isValid) {
      return res.status(401).send('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the token in response
    res.json({ token });
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
