import { Link } from 'react-router-dom'
import { useState } from 'react'

import { API } from '../../API/API'

import InputText from '../../Components/Text/Text'
import InputPassword from '../../Components/Password/Password'
import Button from '../../Components/Button/Button'

import './login.sass'

const Login = props => {

    const [user, setUser] = useState({
        name: '',
        password: ''
    })

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value  })
    }

    const handleClick = () => {
        API.login(user).then(() =>{
            props.history.push('/users')
        })
    }

    return(
        <div className="container">
            <div className="content-box-login">
                <div className="row">
                    <div className="col col-100">
                        <h1 className="title">Login</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-100">
                        <InputText 
                            label="Usuário"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-100">
                        <InputPassword 
                            label="Senha"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-100">
                        <Button label="Entrar" onClick={handleClick} />
                    </div>
                </div>
                <Link to="/new">Não sou cadastrado...</Link>
            </div>
        </div>
    )
}

export default Login