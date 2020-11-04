const express = require('express')
const amqp = require('amqplib')
const bcrypt = require('bcryptjs')

const producer = express.Router()

producer.post('/new', async (request, response) => {
    const { name, email, password } = request.body
    const hash = await bcrypt.hash(password, 10)

    const user = {
        name,
        email,
        password: hash
    }  
    
    amqp.connect('amqp://localhost')
        .then(connection => {
            return connection.createChannel() })
        .then(channel => {
            channel.sendToQueue('newUser', Buffer.from(JSON.stringify(user)))
        })

    response.status().status(200).json({ message: 'conexão enviada' })
})

module.exports = producer