const express = require('express')
const router = express.Router()
const tasks = require('../controllers/tasks')
const verifyToken = require('../middleware/verifyToken')


router.get('/', tasks.getTasks)
router.get('/:id', tasks.getTaskById)
router.post('/new', verifyToken, tasks.createTask)
router.put('/:id',verifyToken, tasks.updateTask)
router.delete('/:id',verifyToken, tasks.deleteTask)

module.exports=router;