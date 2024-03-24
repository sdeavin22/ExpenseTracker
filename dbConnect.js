const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sdeavin1:sabian22@cluster0.m9t3cgw.mongodb.net/expense-tracker', {useNewUrlParser : true, useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected', () => console.log('Mongo db connection successful!'))