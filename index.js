const express = require('express');
const { db, Page, User } = require('./models');

const app = express();

app.get('/',(req,res)=>{
    res.send('hi')
})




const PORT = 1337;

const init = async () => {
    await Page.sync();
    await User.sync();
app.listen(PORT,()=>{
    console.log(`App listening in port ${PORT}`)
});
}

init();