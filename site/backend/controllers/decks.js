import PostDeck from "../models/postDecks.js";


//adding /posts to the end of localhost/5000
export const getDecks = async(req,res) =>{
    try {
        const postDecks = await PostDeck.find();
        console.log(postDecks);
        res.status(200).json(postDecks);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }

}

export const createDeck = (req,res) => {
    const post = req.body;

    const newDeck = new PostDeck(post);

    try {
         await newDeck.save();

        res.status(201).json(newDeck);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}
