const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const config = require('config')
const router = Router()


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ POST create new user $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
router.post(
    '/auth/regist',
    [
        check('email', 'некорректный email').isEmail(),
        check('password', 'минимальная длина пароля 6 символов').isLength({ min: 6 }),
    ],
    async (req, res, next) => {
        try {
            //======================= валидация данных при регистрации ==========================
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.json({
                    // errors: errors.array(), 
                    message: "некорректные данные при регистрации"
                })
            }
            //======================= проверка на существование пользователя ====================
            const { email, password, name, phone } = req.body
            const candidate = await User.findOne({ email })
            if (candidate) return res.json({ message: 'такой пользователь уже существует' })
            //=============================== хэшируем пароль ===================================
            const bcryptPassword = await bcrypt.hash(password, 12)
            //================ создаем пользователя для отправки в mongo, сохраняем =============
            const user = new User({ email, password: bcryptPassword, name, phone })
            await user.save()
            res.json({ message: 'пользователь создан' })
        } catch (e) {
            res.json({ message: 'что-то пошло не так...' })
            throw e
        }
    })

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ POST login user $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
router.post(
    '/auth/login',
    [
        check('email', 'некорректный email').isEmail(),
        check('password', 'пустой пароль').exists(),
    ],
    async (req, res, next) => {
        try {
            //======================= валидация данных при регистрации ==========================
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.json({
                    // errors: errors.array(), 
                    message: "некорректные данные при входе"
                })
            }
            //======================= проверка на существование пользователя ====================
            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) return res.json({ message: 'такой пользователь не зарегестрирован' })
            //================================ сравниваем пароль ================================
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.json({ message: 'неверный пароль, попробуйте снова' })
            }
            //===================== создаем jwt токен и передаем на фронт =======================
            const token = await jwt.sign(
                { userId: user.id },
                config.get('jwtSecretKey'),
                { expiresIn: '1h' }
            )
          
            res.json({ token, userId: user.id, message: 'авторизация' })
        } catch (e) {
            res.json({ message: 'что-то пошло не так...' })
            throw e
        }
    })


module.exports = router