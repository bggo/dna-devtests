import InputText from '../../Components/Text/Text'
import Button from '../../Components/Button/Button'

import { API } from '../../API/API'

import './newUser.sass'
import { useState } from 'react'

const NewUser = props => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value  })
    }

    const handleSubimit = () => {
        API.newUser(user).then(() => {
            props.history.push('/')
        })
    }

    return (
        <div className="container">
            <div className="content-box-user">
                <div className="row">
                    <div className="col col-100">
                        <h3 className='title'>Cadastro de Novo Usuário</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-100">
                        <InputText 
                            label="Nome"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-100">
                        <InputText 
                            label="Email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-100">
                        <InputText 
                            label="Senha"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-100">
                        <Button label="Cadastrar" onClick={handleSubimit} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewUser