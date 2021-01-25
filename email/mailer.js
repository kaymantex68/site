const nodemailer = require("nodemailer")


const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'kaymantex68@yandex.ru',
        pass: '311774Andrey$'
    }
})


const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        console.log('email send: ', info)
    })
}

module.exports = mailer