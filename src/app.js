import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())
app.get('/health',(_,res)=> {
    res.status(200).json({
        health: "OK"
    })
})

export default app 