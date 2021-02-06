import React, { useContext } from 'react'
import classes from './Auth.module.css'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

export const Auth = (props) => {
    const [response, setResponse] = React.useState(null)
    //=================================== вынимаем из контекста функцию auth (login, logout, token, userId)
    const auth = useContext(AuthContext)
    // console.log('isAuth', auth.isAuth)
    const [login, setLogin] = React.useState({
        email: '',
        password: ''
    })


    const clickLogin = () => {
        axios.post('api/auth/login', login).then(response => {   
            auth.login(response.data.token, response.data.userId)
        })
    }

    const clickLogout = () => {
        console.log('logout')
        auth.logout()
        }
    

    console.log('auth',auth)
    return (
        <div className={classes.auth_container}>
            <div className={classes.auth_login_container}>
                {auth.isAuth && <div>{auth.userId}</div>}
                <div className={classes.input_border}>
                    <input className={classes.login_input} type="email" placeholder="@email" name="email" value={login.email} onChange={(e) => setLogin({ ...login, [e.target.name]: e.target.value })} />
                </div>
                <div className={classes.input_border}>
                    <input className={classes.login_input} type="password" placeholder="password" name="password" value={login.password} onChange={(e) => setLogin({ ...login, [e.target.name]: e.target.value })} />
                </div>
                { !auth.isAuth &&
                <div>
                    <div className={classes.login_button} onClick={() => clickLogin()}>вход</div>
                </div>
                }
                { auth.isAuth &&
                    <div>
                        <div className={classes.login_button} onClick={() => clickLogout()}>выход</div>
                    </div>
                }
            </div>
        </div>
    )

}