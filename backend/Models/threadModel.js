const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    author: String,
    boardId: mongoose.Schema.Types.ObjectId,
    created_at: Date,
    image: String,
});

const Threads = mongoose.model('threads', threadSchema);

// Create function for creating a new thread document
Threads.createThread = async (body) => {
  return await Threads.create(body);
};

module.exports = Threads;

