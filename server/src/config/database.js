const { config } = require('dotenv')
config()

const {
  BD_USERNAME,
  BD_PASSWORD,
  BD_DATABASE,
  BD_HOST,
  BD_DIALECT,
  BD_PORT
} = process.env

module.exports = {
  username: BD_USERNAME,
  password: BD_PASSWORD,
  database: BD_DATABASE,
  host: BD_HOST,
  dialect: BD_DIALECT,
  port: BD_PORT
}
