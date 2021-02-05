import React from 'react'
import classes from './Auth.module.css'
import axios from 'axios'

export const Auth = (props) => {
    console.log('auth props^ ', props)
    const [login, setLogin] = React.useState({
        email: '',
        password: ''
    })
 

    const clickLogin = () => {
        axios.post('api/auth/login', login).then(response => {
            console.log(response.data)
        
        })
    }


    return (
        <div className={classes.auth_container}>
            <div className={classes.auth_login_container}>
                <div className={classes.input_border}>
                    <input className={classes.login_input} type="email" placeholder="@email" name="email" value={login.email} onChange={(e) => setLogin({ ...login, [e.target.name]: e.target.value })} />
                </div>
                <div className={classes.input_border}>
                    <input className={classes.login_input} type="password" placeholder="password" name="password" value={login.password} onChange={(e) => setLogin({ ...login, [e.target.name]: e.target.value })} />
                </div>
                <div>
                    <div className={classes.login_button} onClick={() => clickLogin()}>вход</div>
                </div>
            </div>
        </div>
    )

}