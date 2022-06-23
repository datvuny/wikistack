const addPage = require("./addPage");
const editPage = require("./editPage");
const main = require("./main");
const userList = require("./userList");
const userPages = require("./userPages");
const wikiPage = require("./wikiPage");
const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    res.send('hi')
})

const PORT = 1337;
app.listen(PORT,()=>{
    console.log(`App listening in port ${PORT}`)
});




module.exports = { addPage, editPage, main, userList, userPages, wikiPage };
