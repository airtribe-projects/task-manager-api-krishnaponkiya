const router = require('express').Router();
const taskController = require('../controller/taskController');
const { validateTaskBody, validateTaskUpdate } = require('../middleware/validation');

router.get('/', taskController.getAllTasks);
router.post('/', validateTaskBody, taskController.createTask);
router.get('/:id', taskController.getTaskById);
router.put('/:id', validateTaskUpdate, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;