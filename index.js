const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');
const Course = require('./model/course');

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // To parse JSON bodies

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sodabarauf:FGTXcs7lI4Fzis09@cluster0.2yv4a.mongodb.net/mydb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`The db is connected with ${mongoose.connection.host}`);
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};



connectDB();

// Function to validate ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the LMS! <br>A Learning Management System (LMS) is a software application or web-based technology designed to plan, implement, and assess a specific learning process. LMS solutions can be used in various educational settings, including schools, universities, and corporate training environments.');
});

// User CRUD operations
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send("Error creating user: " + error.message);
  }
});

// Read all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Error fetching users: " + error.message);
  }
});

// Read a user by ID
app.get('/users/:id', async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid user ID format");
    }
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Error fetching user: " + error.message);
  }
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid user ID format");
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("Error updating user: " + error.message);
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid user ID format");
    }
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Error deleting user: " + error.message);
  }
});

// Course CRUD operations
app.post('/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send("Error creating course: " + error.message);
  }
});

// Read all courses
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find().populate('teacher', 'name');
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send("Error fetching courses: " + error.message);
  }
});

// Read a course by ID
app.get('/courses/:id', async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid course ID format");
    }
    const course = await Course.findById(req.params.id).populate('teacher', 'name');
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(500).send("Error fetching course: " + error.message);
  }
});

// Update a course by ID
app.put('/courses/:id', async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid course ID format");
    }
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(400).send("Error updating course: " + error.message);
  }
});

// Delete a course by ID
app.delete('/courses/:id', async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).send("Invalid course ID format");
    }
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(500).send("Error deleting course: " + error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
