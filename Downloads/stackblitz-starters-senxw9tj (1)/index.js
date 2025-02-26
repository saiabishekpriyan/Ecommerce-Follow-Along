require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MenuItem = require('./modles/menuItem');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// POST /menu: Add a new menu item
app.post('/menu', async (req, res) => {
  try {
    const { name, description, price } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const menuItem = new MenuItem({ name, description, price });
    await menuItem.save();

    res.status(201).json({ message: 'Menu item created', menuItem });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create menu item', details: error.message });
  }
});

// GET /menu: Fetch all menu items
app.get('/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu items', details: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
