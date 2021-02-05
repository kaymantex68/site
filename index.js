const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const ejs = require('ejs')
const mongoose = require('mongoose')
const config = require('config')
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(bodyParser.json())
// app.use(bodyParser.json({limit: '10mb', extended: true}))

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/api', require('./routers/mail.routes'))
app.use('/api', require('./routers/pdf.routes'))
app.use('/api', require('./routers/auth.routes'))

app.get('/test', function (req, res) {
	res.render(ejs.render('pdf.ejs'))
})


if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client', 'build')))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const start = async () => {
	try {
		await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
		console.log('MongoConnect Ok')
		app.listen(5000, () => {
			console.log(`Server started on port 5000`);
		});
	} catch (e) {
		console.log('ERROR: ', e.message)
		process.exit(1)
	}
}


start()