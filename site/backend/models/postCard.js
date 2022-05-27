import mongoose from "mongoose";

const card = mongoose.Schema({
    id: String,
    name : {
        type: String,
        text: true,
        required: true
    },
    manaCost: String,
    cmc: Number,
    manaCost : String, 
    CardImage :  URL,
    Text : String,
    Set : String

});

const PostCards = mongoose.model('PostCard', card);

export default PostCards;

