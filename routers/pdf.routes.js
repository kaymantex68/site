const { Router } = require('express')
const pdf = require('html-pdf')
const document = require('../PdfDocuments/index')

const router = Router();

router.post('/pdf', async (req, res) => {
    try {
       
        await pdf.create(document(req.body), {}).toFile(`${__dirname}/docs/result.pdf`, (err) => {
            // console.log(document())
            if (err) {
                console.log('error:', err)
            }
            res.send(Promise.resolve())
        })
    } catch (e) {
        res.json({ message: 'pdf что-то пошло не так' })
    }
})

router.get('/get_pdf', (req, res) => {
    res.sendFile(`${__dirname}/docs/result.pdf`)

})

module.exports = router