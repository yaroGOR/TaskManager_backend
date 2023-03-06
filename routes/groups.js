const express = require('express')
const router = express.Router()
const groups = require('../controllers/groups')


router.get('/', groups.getGroups)
router.get('/:id', groups.getGroupById)
router.post('/new',  groups.createGroup)
router.put('/:id', groups.updateGroup)
router.delete('/:id', groups.deleteGroup)

module.exports=router;