import { Cards } from "../constants/cards.constant";
import { Card } from "../types/card.type";
import { random } from "./random";

export const generateCards = (count: number): Card[] => {
    const cards: Card[] = [];
    for (let i = 0; i < count; i++) {
        cards.push(Cards[random(0, Cards.length - 1)]);
    }
    return cards;
};