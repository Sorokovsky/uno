import type { Card } from "../../../types/card.type";
import type { GameStore, GetGame } from "../../../types/game.type";
import type { PlayerType } from "../../../types/player-type.type";

export const activateCardAction = (get: GetGame, card: Card): Partial<GameStore> => {
    const { turn, addCards, setShowPicker, endTurn } = get();
    const toPlayer: PlayerType = turn === 'player' ? 'oponent' : 'player';
    switch (card.value) {
        case 'block':
            endTurn();
            break;
        case 'reverse':
            endTurn();
            break;
        case 'plus-2':
            addCards(2, toPlayer);
            break;
        case 'bonus':
            setShowPicker(true);
            addCards(4, toPlayer);
            break;
        case 'switcher':
            setShowPicker(true);
            break;
        default:
            break;
    }
    return {};
};