const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');

// const MONGODB_URI = "mongodb://127.0.0.1:27017/strickland-propane";
const receiptSchema = require('./Receipt');

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
      },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password:{
        type: String,
        required: true,
        minlenth: 8,
    },
    receipts:[receiptSchema],
    },
      // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function(next){
    const isNewPassword = this.isNew || this.isModified("password");
    const saltRounds = 10;
    if(isNewPassword){
        this.password = bcrypt.hashSync(this.password, saltRounds);
    }
    
    next();
});

userSchema.methods.isCorrectPassword = async function (password){
    return await bcrypt.compare(password, this.password);
};

const User= model("User", userSchema);

module.exports = User;