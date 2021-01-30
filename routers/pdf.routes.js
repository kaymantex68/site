const { Router } = require('express')
const fs = require('fs');
const htmlPdf = require('html-pdf');
const ejs = require('ejs');



const router = Router();

router.post('/pdf', async (req, res) => {
    try {
        const params = await {
            cart: req.body,
        }

        await ejs.renderFile('pdf.ejs', params, (err, result) => {
            if (result) {
                html = result;
                const options = { format: 'A4' };
                htmlPdf.create(html, options).toFile(`${__dirname}/docs/result.pdf`, (err) => {
                    if (err) {
                        console.log('error:', err)
                    }
                    res.send(Promise.resolve())
                })
            }
            else {
                res.end('An error occurred');
                console.log(err);
            }
        })
    } catch (e) {
        res.json({ message: 'pdf что-то пошло не так' })
    }
})

router.get('/get_pdf', (req, res) => {
    res.sendFile(`${__dirname}/docs/result.pdf`)

})

module.exports = router