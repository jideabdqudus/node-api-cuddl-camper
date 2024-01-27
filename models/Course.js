const mongoose = require("mongoose");

const { Schema } = mongoose;

const CourseSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"],
  },
  description: {
    type: String,
    required: [true, "Please add a course description"],
    maxLength: [500, "Description can not be more than 500 characters"],
  },
  weeks: {
    type: String,
    required: [true, "Please add a number of weeks"],
  },
  tuition: {
    type: Number,
    required: [true, "Please add a tuition cost"],
  },
  minimumSkill: {
    type: String,
    required: [true, "Please add a minimum skill"],
    enum: ["beginner", "intermediate", "advanced"],
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Add a reference to the bootcamp, cuz every Course must have a bootcamp
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: "Bootcamp",
    required: true,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
