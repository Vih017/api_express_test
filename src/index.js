import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())
app.get('/health',(_,res)=> {
    res.status(200).json({
        health: "OK"
    })
})

app.listen(4000,()=> console.log("ServerDeuBom"))