import api from '../../services/api'

class Todo {
  async list (req, res) {
    try {
      const { data: todos } = await api.get('todos')
      return res.status(201).send(todos)
    } catch (err) {
      return res.status(400)
    }
  }
}

export default new Todo()
