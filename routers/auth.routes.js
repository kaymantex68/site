const { Router } = require('express')
const { check, validationResult } = require('express-validator')


const router = Router()

router.post(
    '/auth/regist',
    [
        check('email', 'некорректный email').isEmail(),
        check('password', 'минимальная длина пароля 6 символов').isLength({ min: 6 }),
    ],
    async (req, res, next) => {
        try {
            /**
             *  валидация данных при регистрации
             */
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.json({ 
                    // errors: errors.array(), 
                    message: "некорректные данные при регистрации" })
            }
            




            console.log('req data', req.body)
            res.json({ message: req.body })
        } catch (e) {
            res.json({ message: 'что-то пошло не так...' })
            throw e
        }

    })

module.exports = router