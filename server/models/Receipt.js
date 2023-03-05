const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const receiptSchema = new Schema(
  {
    receiptNo: {
        type: String,
        default: () => {
          return Math.random().toString(36).substring(2, 12);
        },
        required: true,
        unique: true,
        maxlength: 10
      },
    amount: {
        type: Number,
        required: true
    },
    date: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
    },
    // ***We need to add a signature object here
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        required: true,
        unique: true
      },
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

// receiptSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

const Receipt = model('Receipt', receiptSchema);

module.exports = Receipt;


