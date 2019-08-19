import express from 'express'
import Todo from './'
import verifyToken from '../../middlewares/jwt'

const router = express.Router()

router.get('', Todo.list)

export default app => app.use('/todo', verifyToken, router)
