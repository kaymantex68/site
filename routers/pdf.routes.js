const { Router } = require('express')
const fs = require('fs');
const htmlPdf = require('html-pdf');
const ejs = require('ejs');


const router = Router();

router.post('/pdf', async (req, res) => {

    try {
        let cartJSON = await JSON.parse(req.body.data)

        console.log('we here!')
        console.log('json: ',cartJSON)
        const params = {
            cart: cartJSON,
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
        console.log(e)
        res.json({ message: 'pdf что-то пошло не так' })
    }
})

router.get('/get_pdf', (req, res) => {
    res.sendFile(`${__dirname}/docs/result.pdf`)

})




module.exports = router