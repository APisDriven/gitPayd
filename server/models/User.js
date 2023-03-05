import bcrypt from "bcrypt"
import mongoose from "mongoose";
import Receipt from "./Receipt";

const SALT_ROUNDS = 10;
// const MONGODB_URI = "mongodb://127.0.0.1:27017/strickland-propane";

const userSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        required: true,
        unique: true
      },
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
    receipts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Receipt',
        },
    ],
    },
);

userSchema.pre("save", async function(next){
    const isNewPassword = this.isNew || this.isModified("password");
    if(isNewPassword){
        this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
    }next();
});

userSchema.methods.isCorrectPassword = async function (password){
    return await bcrypt.compare(password, this.password);
};

const User= mongoose.model("User", userSchema);

export default User;