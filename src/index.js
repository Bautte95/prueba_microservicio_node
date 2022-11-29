const express = require('express');
const app = express();

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes

app.use(require('./routes/routes'));
app.listen(1234);
console.log('Server on port 1234');