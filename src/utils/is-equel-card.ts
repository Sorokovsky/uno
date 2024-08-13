import type { Card } from "../types/card.type";

export const isEquelCard = (currentCard: Card, card: Card): boolean => {
    return currentCard.color === card.color && currentCard.value === card.value;
}