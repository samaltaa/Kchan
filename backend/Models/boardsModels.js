const mongoose = require("mongoose")

const boardSchema = mongoose.Schema(
    {
        id:{
            type: String,
            required: [true] 
        },
        title:{
            type: String,
        },
        content:{
            type: String,
            require: [true]
        },
        creator: {
            type: String,
        },
        timestamp:{
            type: String,
        },
        image:{
            type: String,
        }
    }
)
const Boards = mongoose.model('Boards', {
    id:{type: String},
    title:{type:String},
    content:{type:String},
    creator:{type:String},
    timestamp:{type:String},
    image:{type:String},
});

const boards = mongoose.model('boards', boardSchema);

// Create function for creating a new board document
Board.createBoard = async (body) => {
    return await Board.create(body);
  };
  
module.exports = Boards