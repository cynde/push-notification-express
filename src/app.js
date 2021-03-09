const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Connected')
})

app.get('/notifications', (req, res) => {
  res.send('Send Notification')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})