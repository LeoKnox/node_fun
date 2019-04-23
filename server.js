var express = require('express')
var app = express()

app.use(express.static(__dirname))

var messages = [
    {name: 'cat', message: 'meow'},
    {name: 'cats', message: 'meows'}
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

const server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})