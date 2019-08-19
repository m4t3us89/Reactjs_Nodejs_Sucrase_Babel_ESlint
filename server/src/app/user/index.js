import { User as UserModel } from '../models'

class User {
  async list (req, res) {
    try {
      const users = await UserModel.findAll({
        attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
      })
      return res.status(200).send(users)
    } catch (err) {
      return res.status(400).send(err)
    }
  }

  async create (req, res) {
    try {
      const user = await UserModel.create(req.body)
      return res.status(201).send(user)
    } catch (err) {
      return res.status(400).send(err)
    }
  }
}

export default new User()
