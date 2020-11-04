const amqp = require('amqplib')
const userController = require('../Controllers/userController')

const consume = amqp.connect('amqp://localhost')
        .then(connection => {
            return connection.createChannel() })
        .then(channel => {
            channel.consume('newUser', message => {
                console.log(`Consumer - ${message.content.toString()}`)
                userController.create(message.content.toString())
                channel.ack(message)
            })
        })

module.exports = consume