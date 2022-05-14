const express = require('express');

const PORT = 8080;

let dataString = "test";
let messages = [];

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('top.ejs', { messages: messages });
});

app.post('/submit', (req,res) => {
    var date = new Date();
    messages.push('[' + date.toLocaleString() + ']' + req.body.message)
    console.log(messages);
    res.render('top.ejs', { messages: messages });
})

app.listen(process.env.PORT || PORT);