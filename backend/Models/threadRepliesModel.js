const mongoose = require('mongoose');

const threadRepliesSchema = new mongoose.Schema({
    creator: {type:String, default: "anonimo"},
    content: String,
    subject: String,
    timestamp: {type: Date, default: Date.now},
    image: {type: String, default: ""}
});

const ThreadReplies = mongoose.model('threadreplies', threadRepliesSchema);

ThreadReplies.createReply = async (body) => {
  return await ThreadReplies.create(body);
};

module.exports = ThreadReplies;