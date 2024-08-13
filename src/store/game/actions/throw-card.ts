import type { Card } from "../../../types/card.type";
import type { GameStore, GetGame } from '../../../types/game.type';
import type { PlayerType } from "../../../types/player-type.type";
import { canThrowCard } from "../../../utils/canThrowCard";

export const throwCardAction = (get: GetGame, card: Card): Partial<GameStore> => {
    const { addCards, endTurn, currentCard, turn, player, oponent, setShowPicker } = get();
    let state: Partial<GameStore> = {};
    if (canThrowCard(card, currentCard)) {     
        const toPlayer: PlayerType = turn === 'player' ? 'oponent' : 'player';
        const isPlayer = turn === 'player';
        const person = isPlayer ? player : oponent;
        state = {   
            currentCard: card,
            [turn]: {...person, deck: person.deck.filter(c => c.id !== card.id)}
        };
        if (card.value === 'plus-2') {                
            addCards(2, toPlayer);
        }
        if (card.value === 'bonus') {
            addCards(4, toPlayer);
        }

        if (card.value === 'bonus' || card.value === 'switcher') {
            setShowPicker(true);
        }

        endTurn();

        if (card.value === 'block') {
            endTurn();
        }
        if (card.value === 'reverse') {
            endTurn();
        }
    }
    return state;
};