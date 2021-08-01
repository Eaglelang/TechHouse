const mongoose= require('mongoose');
const userSchema=  new mongoose.Schema({

 userName:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
        },
title: {
    type: String,
    required: true
},
content:{
    type: String,
    required: true
},
author:{
    type: String,
    required: true
},
CreatedAt:{
    type: Date,
    default: new date()
},
commenter: {
    type: String,
    required: true
},
comment_Content: {
    type: String,
    required: true
},
comment_Date:{
    type: Date,
    default: new date()
}
})

const post = mongoose.model('Post', PostSchema);
module.exports = Post;

