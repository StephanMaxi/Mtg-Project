import mongoose  from "mongoose";


const deckSchema = mongoose.Schema({
        id: String,
        deckName: String, 
        Format: String,
        cardCount: Number
});

const PostDeck = mongoose.model('PostDeck', deckSchema);

export default PostDeck;