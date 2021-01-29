const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors =require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/api',require('./routers/mail.routes'))
app.use('/api',require('./routers/pdf.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});