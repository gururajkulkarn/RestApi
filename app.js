const express = require('express');
let users = require('./users'); // Adjust the path as needed
const cors = require('cors');
const app = express();
const port = 3001;


// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Get all users
app.get('/api/users', (req, res) => {
  res.json({ users });
});

// Get a specific user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    res.json({ user });
  });
  

// Add a new user
app.post('/api/users', (req, res) => {
  const userData = req.body;
  const newUser = { id: users.length + 1, ...userData };
  users.push(newUser);

  res.status(201).json({ user: newUser });
});


// Update a user by ID
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users[userIndex] = { ...users[userIndex], ...req.body };

  res.json({ user: users[userIndex] });
});

// Delete a user by ID
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.json({ message: 'User deleted successfully' });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
