import express from "express";
import { getDecks, createDeck } from "../controllers/decks.js";
const router = express.Router();

router.get('/', getDecks);
router.post('/',createDeck);
export default router;