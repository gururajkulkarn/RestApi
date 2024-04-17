const express = require('express');
let users = require('./users'); // Adjust the path as needed
let members = require('./members')
let contacts = require('./contacts')
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




// CONTACTS API CRUD OPERATION

// Get all members
app.get('/api/contacts', (req, res) => {
  res.json({ contacts });
});

// Get a specific user by ID
app.get('/api/contacts/:id', (req, res) => {
    const contactId = parseInt(req.params.id);
    const contact = contacts.find(u => u.id === contactId);
  
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
  
    res.json({ contact });
  });
  

// Add a new user
app.post('/api/contacts', (req, res) => {
  const contactData = req.body;
  const newContact = { id: contacts.length + 1, ...contactData };
  contacts.push(newContact);

  res.status(201).json({ contact: newContact });
});


// Update a user by ID
app.put('/api/contacts/:id', (req, res) => {
  const contactId = parseInt(req.params.id);
  const contactIndex = contacts.findIndex(u => u.id === contactId);

  if (contactIndex === -1) {
    return res.status(404).json({ error: 'contacts not found' });
  }

  contacts[contactIndex] = { ...contacts[contactIndex], ...req.body };

  res.json({ user: contacts[contactIndex] });
});

// Delete a user by ID
app.delete('/api/contacts/:id', (req, res) => {
  const contactId = parseInt(req.params.id);
  contacts = contacts.filter(u => u.id !== contactId);
  res.json({ message: 'contacts deleted successfully' });
});






app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
