const https = require('node:https');
const express = require('express');
const { request } = require('node:http');
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
    const link = {
        hostname: 'api.api-ninjas.com',
        path: `https://api.api-ninjas.com/v1/recipe?query=${words}`,
        headers: {'X-Api-Key': '+6dQsRgnJJn2Fb/lPVdDmg==OIPaS5RXB0pvor13'}
    }
    console.log(link)
    https.get(link, (resp)=>{
        console.log(resp.statusCode)
        // let data = ''
        // resp.on('data', (chunk)=>{
        //     data += chunk;
        // })

        // resp.on('end', () => {
        //     console.log(JSON.parse(data));
        //     res.send(JSON.parse(data));
        // });

    //     // console.log(data[0])
    // }).on('error', (err) => {
    //     console.log('Error: ' + err.message);
    //     res.status(500).send('Error retrieving data from API');
     });
});
    

app.listen(port, ()=>{
    console.log(`your server run in localhost:${port}`);
})