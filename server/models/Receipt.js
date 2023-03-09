const { Schema, model, Types } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const receiptSchema = new Schema(
  {
    receiptNumber: {
        type: String,
        default: () => {
          return Math.random().toString(36).substring(2, 12);
        },
        required: true,
        unique: true,
        maxlength: 256,
      },
    amount: {
        type: Number,
        required: true
    },
    date: {
      type: String,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    
    from: {
      type: String,
      required: false
    },
    to: {
        type: String,
        required: false
      },
    email: {
        type: String,
        required: true
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

module.exports = receiptSchema;
