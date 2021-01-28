import React from 'react'
import classes from './ClientInformation.module.css'
export const ClientInformation = (props) => {
    const { setClientInformation } = props;
    const [formData, setFormData] = React.useState(
        {
            email: '',
            name: '',
            phone: '',
            area: ''
        }
    )
    setClientInformation(formData);

    React.useEffect(() => { }, [formData])
    return (

        <div className={classes.container_client}>

            <form className={classes.form_client}>
                <div className={classes.form_client_box}>
                    <span className={classes.Span_info}>Почта (* обязательное поле) </span>
                    <input
                        className={classes.client_input}
                        name="email"
                        placeholder="Почта"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />

                    <span className={classes.Span_info}>Телефон (* обязательное поле) </span>
                    <input
                        className={classes.client_input}
                        name="phone"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                    <span className={classes.Span_info}>Имя (* обязательное поле) </span>
                    <input
                        className={classes.client_input}
                        name="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                    <span className={classes.Span_info_2}>Комментарий к заказу (* необязательное поле)</span>
                    <textarea
                        className={classes.client_area}
                        name="area"
                        placeholder="Комментарий к заказу - (Упаковка, транспортная компания, наличный-безналичный расчет, прочие пожелания...)"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    />
                </div>
                {props.message && <div className={classes.message_error}>Все поля должны быть заполнены</div>}
                {props.response && <div className={classes.message_send}>Заявка отправлена. В ближайшее время с Вами свяжется наш менеджер</div>}
            </form>

        </div>
    )
}
