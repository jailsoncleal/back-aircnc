const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adm-aircnc:familialeal@aircnc.ml7gs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);