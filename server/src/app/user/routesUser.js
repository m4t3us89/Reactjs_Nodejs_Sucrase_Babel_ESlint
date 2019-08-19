import User from './'
import { Router } from 'express'

const routes = Router()

routes.post('', User.create)

routes.get('', User.list)

export default app => app.use('/user', routes)
