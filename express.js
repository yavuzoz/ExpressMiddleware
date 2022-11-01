const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    return res.send('Hello World');
})
const port = 5000;
app.listen(port, ()=> {
    console.log(`localhost:${port} is active!`)
})