import type { Card } from "../../../types/card.type";
import type { GameStore, GetGame } from '../../../types/game.type';
import { canThrowCard } from "../../../utils/canThrowCard";

export const throwCardAction = (get: GetGame, card: Card): Partial<GameStore> => {
    const { endTurn, currentCard, turn, player, oponent, activateCard } = get();
    let state: Partial<GameStore> = {};
    if (canThrowCard(card, currentCard)) {     
        const isPlayer = turn === 'player';
        const person = isPlayer ? player : oponent;
        state = {   
            currentCard: card,
            [turn]: {...person, deck: person.deck.filter(c => c.id !== card.id)}
        };
        activateCard(card);
        endTurn();
    }
    return state;
};