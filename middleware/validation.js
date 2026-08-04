const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

const validateTaskBody = (req, res, next) => {
  const { title, description, completed ,Employee,project,createdAt,updatedAt} = req.body;

  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ message: 'Title is required and must be a non-empty string' });
  }

  if (typeof description !== 'string' || description.trim() === '') {
    return res.status(400).json({ message: 'Description is required and must be a non-empty string' });
  }

  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ message: 'Completed must be a boolean' });
  }
  if(Employee !== undefined && typeof Employee !== 'string') {
    return res.status(400).json({ message: 'Employee must be a string' });
  }

  next();
};

const validateTaskUpdate = (req, res, next) => {
  if (!isObject(req.body)) {
    return res.status(400).json({ message: 'Request body must be an object' });
  }

  const { title, description, completed,Employee,project,createdAt,updatedAt } = req.body;
  const allowedFields = ['title', 'description', 'completed','Employee','project','createdAt','updatedAt'];
  const invalidField = Object.keys(req.body).find((field) => !allowedFields.includes(field));

  if (invalidField) {
    return res.status(400).json({ message: `Unknown field: ${invalidField}` });
  }

  if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
    return res.status(400).json({ message: 'Title must be a non-empty string' });
  }

  if (description !== undefined && (typeof description !== 'string' || description.trim() === '')) {
    return res.status(400).json({ message: 'Description must be a non-empty string' });
  }

  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ message: 'Completed must be a boolean' });
  }

  if (Employee !== undefined && typeof Employee !== 'string') {
    return res.status(400).json({ message: 'Employee must be a string' });
  }

  next();
};

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = {
  validateTaskBody,
  validateTaskUpdate,
  logger,
};

