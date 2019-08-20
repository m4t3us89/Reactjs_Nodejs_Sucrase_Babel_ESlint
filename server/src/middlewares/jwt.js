import jsonwebtoken from 'jsonwebtoken'

export default async (req, res, next) => {
  try {
    const { token } = req.headers
    await jsonwebtoken.verify(token, 'shhh')
    return next()
  } catch (err) {
    return res.status(403).send({
      message: 'Acesso Negado'
    })
  }
}
