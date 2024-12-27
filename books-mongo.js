const express = require ("express")

const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json())


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rishivasan:EEaIGzftx7C7vARa@nodeexp.colby.mongodb.net/?retryWrites=true&w=majority&appName=nodeexp');


const Books = mongoose.model('Book', { name: String , id: Number, title: String });

app.get('/books',async(req,res)=>{
    const book = await Books.find()
    res.json (book)

})

app.post ('/books',async (req,res)=>{
    const body = req.body
    const book = await Books.create({ name:body.name, title:body.title, id:body.id });
    res.json(book)
})

app.delete('/books/:id',async(req,res)=>{
    const id = parseInt (req.params.id)
    const result  = await Books.deleteOne({id:id})
    res.json(result)
})
app.listen(8081)


