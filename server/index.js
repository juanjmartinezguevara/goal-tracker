// require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser');
const app = express()

const MONGODB_URI = process.env.MONGODB_URI

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error('Error connecting to mongo', err));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
