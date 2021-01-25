import React from 'react';
import classes from './Contacts.module.css'

function Contacts() {

    return (
        <>
            <div className={classes.Main}>
                {/* <div className={classes.Romb1}></div>
                <div className={classes.Romb2}></div>
                <div className={classes.Romb3}></div> */}
                <div className={classes.AdressContainer}>
                    <div className={classes.Map}>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa75e51849bb3f473dd8ffed77e5d846a1ff134970372d9a4b6941ba133dc2229&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                    <div className={classes.Adress}>
                        <div>
                            <p className={classes.NameLTD}>Как нас найти:</p>
                            <p className={classes.AdressInfo}>392027 Тамбовская обл., г.Тамбов,</p>
                            <p className={classes.AdressInfo}>Агапкина 25А, Системы безопасности Кайман.</p>
                            <p className={classes.Regim}>Режим работы: пн-вс 9:00-18:00 (без выходных)</p>
                            <p className={classes.NameLTD}>Наши контакты:</p>
                            <p className={classes.Phone}>Тел: 8 (4752) 42-47-27</p>
                            <p className={classes.Phone}>Тел: +7 920 233-34-34</p>
                            <p className={classes.Mail}>Mail: mail@kaymantex.ru</p>


                            <p className={classes.Question}>Все ваши вопросы вы можете задать нам в личном чате в Instagram. Будем рады ответить Вам.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;