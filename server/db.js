// import bcrypt from "bcrypt"
// import mongoose from "mongoose";

// const SALT_ROUNDS = 10;
// const MONGODB_URI = "mongodb://127.0.0.1:27017/strickland-propane";

// const userSchema = new mongoose.Schema({
//     email:{
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password:{
//         type: String,
//         required: true,
//         minlenth: 8,
//     },
// })

// userSchema.pre("save", async function(next){
//     const isNewPassword = this.isNew || this.isModified("password");
//     if(isNewPassword){
//         this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
//     }next();
// });

// userSchema.methods.isCorrectPassword = async function (password){
//     return await bcrypt.compare(password, this.password);
// };

// const User= mongoose.model("User", userSchema);




// // await mongoose.connect(MONGODB_URI);
// // console.log("Connected to MongoDB!");

// // await User.deleteMany({});
// // await User.create({
// //     email: "sam@gmail.com",
// //     password: "sam12345",
// // });
// // await User.create({
// //     email: "bella@gmail.com",
// //     password: "bella12345",
// // });


// // const users = await User.insertMany([
// //     {email: "elena@gmail.com",
// //     password: "elena12345"},
// //     {email: "kotya@gmail.com",
// //     password: "kotya12345"},
// // ]);

// // const users = await User.insertMany([
// //     {email: "elena@gmail.com"},
// //     {email: "kotya@gmail.com"},
// //     {email: "sam@gmail.com"},
// // ]);