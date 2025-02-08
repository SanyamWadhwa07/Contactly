const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the contact name"]
        },
        email: {
            type: String,
            unique: [true,"Please enter unique email address"],
            required: [true, "Please add the email"]
        },
        password: {  
            type: String,
            required: [true, "Please add the user pass"]
        }
    },
    {
        timestamps: true 
    }
);


module.exports = mongoose.model("User", userSchema);