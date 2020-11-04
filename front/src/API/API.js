    import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/'
})

export class API {

    static login = (user) =>
        api.post(`login`, user).then( response => {
            localStorage.setItem('token', response.data.token)
        }) .catch(err => {
            console.log(err)
        }) 
        

    static newUser = (user) =>
        api.post(`new`, user).then( response => {
            console.log(response)
    }) 

    static users = (token) =>
        api.get(`users`, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        } ).then( response => response )
}