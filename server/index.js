const md5 = require('md5');
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    api = require('marvel-api'),
    port = 3005,
    app = express(),
    axios = require('axios');
   const keys = require('./keys');
   const marvel = api.createClient({
    publicKey: keys.publicKey
  , privateKey: keys.privateKey
  });


app.listen(port, ()=>{
    console.log(`the show is on port ${port}, and it starts right now!`)
})

app.get('/api/heroes', (req, res)=>{
   
    marvel.characters.findAll(20,340)
    .then((resp)=>{
        // console.log(resp.data);
        res.send(resp.data)
    })
    .fail(console.error)
})

app.get('/api/heroes/filter', function(req, res) {
    marvel.characters.findNameStartsWith(req.query.val)
    .then((resp)=>{
        res.send(resp.data)
    })
    .fail(console.error)
})

// app.get('/api/heroes/', (req, res)=>{
   
//     marvel.characters.find('    ')
//     .then((resp)=>{
//         console.log(resp.data);
//         res.send(resp.data)
//     })
//     .fail(console.error)
// })