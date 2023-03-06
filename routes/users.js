const express = require('express')
const router = express.Router()
const users = require('../controllers/users')
const verifyToken = require('../middleware/verifyToken')


router.get('/', users.getUsers)
router.get('/:id', users.getUserById)
router.post('/new',  users.createUser)
router.put('/:id', verifyToken, users.updateUser)
router.delete('/:id',verifyToken, users.deleteUser)
router.get('/tasks/:id',verifyToken, users.getTasksForUser)
router.get('/groups/:id',verifyToken, users.getGroupsForUser)

router.post('/register', users.register)
router.post('/login', users.login)
router.get('/update/:id', users.updateToken)


module.exports=router;