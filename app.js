const express = require('express');
let users = require('./users'); // Adjust the path as needed
let members = require('./members')
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


// MEMEBRS API CRUD OPERATION

// Get all members
app.get('/api/members', (req, res) => {
  res.json({ members });
});

// Get a specific user by ID
app.get('/api/members/:id', (req, res) => {
    const memberId = parseInt(req.params.id);
    const member = members.find(u => u.id === memberId);
  
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
  
    res.json({ member });
  });
  

// Add a new user
app.post('/api/members', (req, res) => {
  const memberData = req.body;
  const newMember = { id: members.length + 1, ...memberData };
  members.push(newMember);

  res.status(201).json({ member: newMember });
});


// Update a user by ID
app.put('/api/members/:id', (req, res) => {
  const memberId = parseInt(req.params.id);
  const memberIndex = members.findIndex(u => u.id === memberId);

  if (memberIndex === -1) {
    return res.status(404).json({ error: 'member not found' });
  }

  members[memberIndex] = { ...members[memberIndex], ...req.body };

  res.json({ user: members[memberIndex] });
});

// Delete a user by ID
app.delete('/api/members/:id', (req, res) => {
  const memberId = parseInt(req.params.id);
  members = members.filter(u => u.id !== memberId);
  res.json({ message: 'User deleted successfully' });
});








app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
