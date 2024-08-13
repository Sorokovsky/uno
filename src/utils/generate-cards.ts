import { Cards } from "../constants/cards.constant";
import type { Card } from "../types/card.type";
import { getId } from "./get-id";
import { random } from "./random";

export const generateCards = (count: number): Card[] => {
    const cards: Card[] = [];
    for (let i = 0; i < count; i++) {
        const card: Card = Cards[random(0, Cards.length - 1)];
        cards.push({...card, id: getId()});
    }
    return cards;
};