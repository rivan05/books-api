const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json())






let books = [{ id: 1, title: "o-book", name: "sik" }]

app.get("/books", (req, res) => {
  res.json(books)
})

app.post("/books", (req, res) => {
  const body = req.body
  books = [ ...books, body ]
  res.json(books)
})

app.put("/books/:id", (req, res) => {
  const body = req.body
  const id = parseInt(req.params.id);
    console.log('id is ',id)
  const bookIdx  = books.findIndex(e => e.id === id)
  console.log('index is',bookIdx)
  if (bookIdx  != - 1) {
        books[bookIdx].name = body.name
        books[bookIdx].title  = body.title
        res.json(books)
  } else {
    res.json({"message":"id not found"})
  }
})

app.delete('/books/:id',(req,res) =>{
const body =req.body
const id = parseInt (req.params.id);
const bookIdx = books.findIndex(e=> e.id === id)
 if (bookIdx != -1){
     books.splice(bookIdx,1)

     res.json(books)
 }
else {
    res.json({ "message": "book not found"})
}
})

// EEaIGzftx7C7vARa




app.listen(8080)
