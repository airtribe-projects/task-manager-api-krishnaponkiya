const { tasks: initialTasks } = require('../task.json');

let tasks = initialTasks.map(task => ({ ...task }));
let nextId = tasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1;

const findById = (id) => {
  const numericId = Number(id);
  if (Number.isNaN(numericId)) return null;
  return tasks.find((task) => task.id === numericId) || null;
};

const getAllTasks = () => tasks;

const createTask = ({ title, description, completed = false }) => {
  const newTask = {
    id: nextId++,
    title: title.trim(),
    description: description.trim(),
    completed,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  return newTask;
};

const updateTaskById = (id, updates) => {
  const task = findById(id);
  if (!task) return null;

  if (updates.title !== undefined) {
    task.title = updates.title.trim();
  }
  if (updates.description !== undefined) {
    task.description = updates.description.trim();
  }
  if (updates.completed !== undefined) {
    task.completed = updates.completed;
  }

  task.updatedAt = new Date().toISOString();
  return task;
};

const deleteTaskById = (id) => {
  const numericId = Number(id);
  if (Number.isNaN(numericId)) return null;

  const index = tasks.findIndex((task) => task.id === numericId);
  if (index === -1) return null;

  return tasks.splice(index, 1)[0];
};

module.exports = {
  getAllTasks,
  findById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
