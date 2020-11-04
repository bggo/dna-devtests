import { useEffect, useState } from 'react'
import { MdPerson, MdEmail } from 'react-icons/md'
import _ from 'lodash'

import { API } from '../../API/API'
import './users.sass'

const Users = props => {

    const [users, setUsers] = useState([])

    useEffect(async() => {
        const response = await API.users(localStorage.getItem('token'))
        setUsers(response.data)
    }, [])

    const handleClick = () => {
        localStorage.removeItem('token')
        
        props.history.push('/')
    }

    return (
        <div className="container">
            <h3 className="title">Lista de Usuários</h3>
            <div className="content-box-users">
                <ul>
                    { users.map(user =>  
                        (<li key={user.id}>
                            <div className="td">
                                <MdPerson/>
                                <span>{user.name}</span>
                            </div> 
                            <div className="td">
                                <MdEmail/>
                                <span>{user.email}</span>
                            </div> 
                        </li>)
                    )} 
                </ul>
            </div>
            <div className="logout" onClick={handleClick}>Sair</div>
        </div>
    )
}

export default Users