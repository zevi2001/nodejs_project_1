import express from 'express'
import login from './login.controller.js'
const router =express.Router()

router.post('/login',login.addUser)

export default router