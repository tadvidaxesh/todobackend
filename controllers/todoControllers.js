// controllers/todoController.js
const Todo = require('../models/todoModel');

// Get all todos for the logged-in user
const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos' });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  const { title, description, dueDate, priority } = req.body;

  try {
    const todo = new Todo({
      title,
      description,
      dueDate,
      priority,
      userId: req.user.id,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo' });
  }
};

// Update an existing todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, priority, completed } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { title, description, dueDate, priority, completed },
      { new: true }
    );
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo' });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo' });
  }
};

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
