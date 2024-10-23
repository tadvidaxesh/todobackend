const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  priority: {
    type: Number,
    default: 5,
  },
  dueDate: {
    type: Date,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true, 
},
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", Schema);