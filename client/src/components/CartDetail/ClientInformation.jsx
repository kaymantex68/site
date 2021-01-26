import React from 'react'
import classes from './ClientInformation.module.css'
export const ClientInformation = (props) => {
    const { setClientInformation} = props;
    const [formData, setFormData] = React.useState(
        {
            email: '',
            name: '',
            phone: ''
        }
    )
    setClientInformation(formData);

    React.useEffect(()=>{},[formData])
    return (

        <div className={classes.container_client}>

            <form className={classes.form_client}>
                <div className={classes.form_client_box}>
                    <input
                        className={classes.client_input}
                        name="email"
                        placeholder="почта"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                    <input 
                    className={classes.client_input}
                    name="phone" 
                    placeholder="телефон" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                    <input 
                    className={classes.client_input}
                    name="name"  
                    placeholder="имя"  
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                </div>
                {props.message && <div className={classes.message}>все поля должны быть заполнены</div>}
                {props.response && <div className={classes.message}>заявка отправлена</div>}
            </form>

        </div>
    )
}
