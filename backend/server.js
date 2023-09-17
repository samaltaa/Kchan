const express = require('express')
const mongoose = require('mongoose')
const Threads = require('./Models/threadModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

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
        const threads = await Threads.create(req.body)
        res.status(200).json(threads);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a product
app.put('/threads/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const threads = await Threads.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!threads){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedThread = await threads.findById(id);
        res.status(200).json(updatedThread);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product

app.delete('/threads/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const threads = await Threads.findByIdAndDelete(id);
        if(!threads){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(threads);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)
mongoose.
connect('')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})