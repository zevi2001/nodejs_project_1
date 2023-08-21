import express from 'express'
import permission from './permission.controller.js'
const router =express.Router()

router.get('/login',permission.checkAdmin)
router.get('/login/users',permission.allUsers)
router.get('/login/user',permission.userByAdminOrUser)

export default router