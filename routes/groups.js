const express = require('express')
const router = express.Router()
const groups = require('../controllers/groups')
const verifyToken = require('../middleware/verifyToken')


router.get('/', groups.getGroups)
router.get('/:id', groups.getGroupById)
router.post('/new',verifyToken,  groups.createGroup)
router.put('/:id',verifyToken, groups.updateGroup)
router.delete('/:id',verifyToken, groups.deleteGroup)

module.exports=router;