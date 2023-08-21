import express from 'express'
import permission from './permission.controller.js'
import  Middleware  from './permission.middleware.js'
const router =express.Router()

router.get('/login',Middleware.isAdmin,permission.checkAdmin)
router.get('/login/users',Middleware.allUsers,permission.allUsers)
router.get('/login/user',Middleware.editByAdminOrUser,permission.userByAdminOrUser)
router.patch('/login/user',Middleware.userByAdminOrUser,permission.editByUser)
router.delete('/login/user',Middleware.deleteByUserOrAdmin,permission.deleteByUserOrAdmin)

export default router