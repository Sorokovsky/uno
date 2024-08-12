import { Card } from "../types/card.type";

export const canThrowCard = (card: Card, currentCard: Card): boolean => {
    return card.color === currentCard.color || card.value === currentCard.value || card.value === 'bonus' || card.value === 'switcher'
}