import type { Card } from "../../../types/card.type";
import type { GameStore, GetGame } from "../../../types/game.type";
import type { PlayerType } from "../../../types/player-type.type";

export const activateCardAction = (get: GetGame, card: Card): Partial<GameStore> => {
    const { turn, addCards, setShowPicker, endTurn, setCanChangeTurn } = get();
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
            setCanChangeTurn(false);
            setShowPicker(true);
            addCards(4, toPlayer);
            break;
        case 'switcher':
            setCanChangeTurn(false);
            setShowPicker(true);
            break;
        default:
            break;
    }
    return {};
};