const express = require('express')
const mysql = require('mysql')
const redis = require('redis')

const app = express()

const port = 3000

// First you need to create a connection to the db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
})

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db', err)
    return
  }
  console.log('Connection established')
})

const client = redis.createClient()

client.on('error', function (error) {
  console.error(error)
})

client.set('key', 'value2', redis.print)
client.get('key', redis.print)

connection.end((err) => {})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
