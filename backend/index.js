const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 5000;
const rmodel = require('./config/register');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/auth", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(() => console.log("Disconnected"));

app.post('/api/register', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new rmodel({ username, password: hashedPassword, email });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
    console.log('Registered successfully');
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await rmodel.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
    console.log('Login successful');
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  } 
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
