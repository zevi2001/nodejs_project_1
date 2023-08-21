import express from 'express'
import permission from './permission.controller.js'
const router =express.Router()

router.get('/login',permission.checkAdmin)
router.get('/login/users',permission.allUsers)
router.get('/login/user',permission.userByAdminOrUser)
router.patch('/login/user',permission.editByUser)
router.delete('/login/user',permission.deleteByUserOrAdmin)

export default router