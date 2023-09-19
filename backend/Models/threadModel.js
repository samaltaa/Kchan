const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    creator: {type:String, default: "anonimo"},
    boardId: String,
    timestamp: Date,
    image: String,
});

threadSchema.pre('save', function(next) {
    this.id = this.boardId.slice(0, 2) + Math.floor(Math.random() * 900000000 + 100000000);
    next();
});

const Threads = mongoose.model('threads', threadSchema);

Threads.createThread = async (body) => {
  return await Threads.create(body);
};

module.exports = Threads;