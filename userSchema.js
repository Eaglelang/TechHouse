const mongoose= require('mongoose');
const postSchema=  new mongoose.Schema({

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

const user = mongoose.model('Post', PostSchema);
module.exports = User;
