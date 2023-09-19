const express = require('express')
const mongoose = require('mongoose')
const Threads = require('./Models/threadModel')
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

app.get('/', (req, res) => {
    res.send('Servidor KKchan Activo mmg!')
})

//threads routes 
app.get('/threads', async(req, res) => {
    try {
        const threads = await Threads.find({});
        res.status(200).json(threads);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/threads/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const threads = await Threads.findById(id);
        res.status(200).json(threads);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/threads', async(req, res) => {
    try {
        const newThread = {
            boardId: req.body.boardId,
            title: req.body.title,
            content: req.body.content,
            creator: req.body.creator,
            image: req.body.image
        }
        const threads = await Threads.create(newThread)
        res.status(200).json(threads);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.put('/threads/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const threads = await Threads.findByIdAndUpdate(id, req.body);
        if(!threads){
            return res.status(404).json({message: `cannot find any thread with ID ${id}`})
        }
        const updatedThread = await threads.findById(id);
        res.status(200).json(updatedThread);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.delete('/threads/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const threads = await Threads.findByIdAndDelete(id);
        if(!threads){
            return res.status(404).json({message: `cannot find any thread with ID ${id}`})
        }
        res.status(200).json(threads);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//thread replies routes

app.get('/threadreplies', async(req, res) => {
    try{
        const replies = await ThreadReplies.find({});
        res.status(200).json(replies);
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

app.post('/threadreplies', async(req, res) =>{
    try{
        const newReply ={
            content: req.body.content,
            creator: req.body.creator,
            image: req.body.image
        }
        const reply = await ThreadReplies.create(newReply)
        res.status(200).json(reply)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://baalibshmym:123456holahola@imageboarddb.pszjrtr.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3001, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})