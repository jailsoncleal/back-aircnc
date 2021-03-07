const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    return res.json({name: "jailson costa leal"})
});

app.listen(3333);