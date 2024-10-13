const mongoose = require('mongoose');

// Define the Course schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true, // Ensures that a teacher must be assigned
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Course model
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
