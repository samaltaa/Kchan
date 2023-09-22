const mongoose = require("mongoose")

const boardSchema = mongoose.Schema(
    {
        boardID:{
            type: String,
        },
        title:{
            type: String,
        },
        description:{
            type: String,
            require: [true]
        },
        image:{
            type: String,
        }
    }
)
const Board = mongoose.model('Boards', {
    title:{type:String},
    description:{type:String},
    image:{type:String},
});

const Boards = mongoose.model('boards', boardSchema);

// Create function for creating a new board document
Boards.createBoard = async (body) => {
    return await Boards.create(body);
  };
  
module.exports = Board