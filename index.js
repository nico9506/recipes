const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    console.log('open html');
    res.sendFile(__dirname + "/index.html");
})

app.post('/input', (req,res)=>{
    const words = (req.body.word);
    console.log(words);
})

app.listen(port, ()=>{
    console.log(`your server run in localhost:${port}`);
})