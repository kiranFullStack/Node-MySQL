const mysql = require('mysql')
const express = require('express')
// const redis = require('redis')

const app = express()

const port = 3000

// First you need to create a connection to the db
const connection = mysql.createConnection({
  host: 'mysql',
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

connection.end((err) => {})

// const client = redis.createClient()

// client.on('error', function (error) {
//   console.error(error)
// })

// client.set('key', 'value2', redis.print)
// client.get('key', redis.print)

app.get('/', (req, res) => {
  res.send('Hello World!...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
