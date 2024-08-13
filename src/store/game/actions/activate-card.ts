import type { Card } from "../../../types/card.type";
import type { GameStore, GetGame } from "../../../types/game.type";
import type { PlayerType } from "../../../types/player-type.type";

export const activateCardAction = (get: GetGame, card: Card): Partial<GameStore> => {
    const { turn, addCards, setShowPicker, endTurn } = get();
    const toPlayer: PlayerType = turn === 'player' ? 'oponent' : 'player';
    if (card.value === 'plus-2') {                
            addCards(2, toPlayer);
    }
    if (card.value === 'bonus') {
        addCards(4, toPlayer);
    }
    if (card.value === 'bonus' || card.value === 'switcher') {
        setShowPicker(true);
    }
    if (card.value === 'block') {
        endTurn();
    }
    if (card.value === 'reverse') {
        endTurn();
    }
    return {};
};