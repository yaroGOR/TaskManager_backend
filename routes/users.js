const express = require('express')
const router = express.Router()
const users = require('../controllers/users')


router.get('/', users.getUsers)
router.get('/:id', users.getUserById)
router.post('/new',  users.createUser)
router.put('/:id', users.updateUser)
router.delete('/:id', users.deleteUser)
router.get('/info/:id', users.getTasksForUser)
router.post('/register', users.register)
router.post('/login', users.login)
router.get('/update/:id', users.updateToken)


module.exports=router;