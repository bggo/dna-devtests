const _ = require ('lodash')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const connection = require('../Database/Connection')
const authSecrete = require('../config/auth.json')

module.exports = {
    
    async create(userString) {

        const user = JSON.parse(userString)

        const { name, email, password } = user

        try {
            
            await connection('users').insert({
                name,
                email,
                password
            })

        } catch (err) {
            console.log(err)
        }            
    },

    async auth(request, response) {
        const { name, password } = request.body

        const users = await connection('users').where('name', name).select('*')

        const user = users[0]
        
        if(_.isEmpty(user)) return response.status(404).json({ message: 'Usuário não existe!'})

        const authenticate = await bcrypt.compare(password, user.password)
        
        if(!authenticate) return response.status(401).json({ message: 'Senha Iválida' })

        const token = jwt.sign({ id: user.id }, authSecrete.secret, {
            expiresIn: 259200,
        })
        
        user.password = undefined
        
        response.status(200).json({ user: user, token })


    },

    async list(request, response) {
        const { authorization } = request.headers
       
        if(!authorization) return response.status(401).json({ message: "Token de autenticação não informado!"})

        jwt.verify(authorization, authSecrete.secret, (err, decode) => {
            if(err) return response.status(403).json({ message: "Token de autenticação inválido!" })
        })

        try{
            const users = await connection('users').select('id', 'name', 'email')
            
            return response.status(200).json(users)
        } catch (err) {
            console.log(err)

            return response.status(400).json({
                message: 'A busca pelos dados falhou!'
            })
        }
    }
}