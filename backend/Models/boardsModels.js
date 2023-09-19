const mongoose = require("mongoose")

const boardSchema = mongoose.Schema(
    {
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

const boards = mongoose.model('boards', boardSchema);

// Create function for creating a new board document
Board.createBoard = async (body) => {
    return await Board.create(body);
  };
  
module.exports = Board