const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
import('file-type');
//import { openDb } from './configDB.js';

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(fileUpload());

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./img.db"
    },
    useNullAsDefault: true
});

app.get('/', async (req, res) => {
    res.send('Hello bro!')
})

app.post('/image/upload', async (req, res) => {
    const {name, data} = req.files.pic;
    if (name && data) {
        await knex.insert({nome: name, img: data}).into('img');
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
})

app.get('/image/:id', async (req, res) => {
    const id = req.params.id;
    const img = await knex('img').whereNull("deleted_at").where({id: id}).first();
    if (img) {
        res.end(img.img);
    } else {
        res.end('Erro: Não existe imagem com esse Id');
    }
})

app.delete('/image/delete/:id', async (req, res, next) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    try {
        const  id  = req.params.id;

        await knex('img')
        .where({ id })
        .update('deleted_at', dateTime)
        //.del()
        return res.send()
    } catch (error) {
        next(error)
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));