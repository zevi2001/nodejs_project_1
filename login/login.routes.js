import express from 'express'
import login from './login.controller.js'
const router =express.Router()

router.post('/login',login.addUser)
router.get('/login',login.findUser)

export default router