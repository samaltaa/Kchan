const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())

//routes
app.get('/', (req, res) =>{
    res.send('KKchan activo mmg')
})

app.get('/threads', async (req, res) =>{
    try{
        const thread = await Thread.find({});
        res.status(200).json(thread)
    } catch (error){
        res.status(500).json({message: Error.message})
    }
})

app.post('threads', async(req, res) =>{
    try{
        const thread = await Thread.create(req.body)
        res.status(200).json(thread)
    } catch (Error){
        console.log(Error.message)
        res.status(500).json({message: Error.message})
    }
})