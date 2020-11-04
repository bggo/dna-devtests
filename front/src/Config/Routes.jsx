import { Switch, Route, Redirect } from 'react-router-dom'

import Users from '../Pages/Users/Users'
import NewUser from '../Pages/NewUser/NewUser'
import Login from '../Pages/Login/Login'

import { isAuthenticate } from './auth'


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route { ...rest } render={ props => (
            isAuthenticate() ?  (
                <Component { ...props } />
            ) : (
                <Redirect to='/' />
            )
        )} />
    )
}

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/new" component={NewUser} />
            <PrivateRoute path="/users" component={Users} />
        </Switch>
    )
}
export default Routes