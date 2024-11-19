import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: 'User',
    },
  ],
  messages: [
    { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'User' },
  ],
  lastMessage: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'Message',
  },

  lastUpdateTime: {
    type: Date,
  },
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;