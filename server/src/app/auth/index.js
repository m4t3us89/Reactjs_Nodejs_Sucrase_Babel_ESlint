import jsonwebtoken from 'jsonwebtoken'
import express from 'express'
import { User as UserModel } from '../models'
import md5 from 'md5'

const router = express.Router()

router.post('', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: 'Email ou Password não informado.' })
    }

    const user = await UserModel.findOne({
      where: { email, password: md5(password) },
      attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
    })

    if (!user) {
      return res.status(200).send({ message: 'Login/Password incorreto.' })
    }

    const token = await jsonwebtoken.sign({ user }, 'shhh')

    return res.status(201).send({ token, user })
  } catch (err) {
    return res.status(400).send({
      message: 'Requisição não processada'
    })
  }
})

export default app => app.use('/auth', router)
