const { Router } = require('express')
const mailer = require('../email/mailer')

const router = Router();
router.post('/sendMail', async (req, res) => {
    try {
        let text ='';
        for (let i=0 ; i<req.body.length; i++){
            text=text+req.body[i]+'\r\n'
        }
        console.log(text)
        const message = {
            from: 'CAYMAN-ZAKAZ <kaymantex68@yandex.ru>',
            to: "andrey.s.h.68@yandex.ru",
            subject: 'ZAKAZ SITE',
            text: text
        }
        await mailer(message)
        res.json({message: 'письмо отправлено'})
    } catch (e) {
        res.json({ message: 'ошибка отправки заказа' })
    }
});

module.exports = router

