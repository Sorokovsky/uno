import type { GameStore, GetGame } from '../../../types/game.type';

export const endTurnAction = (get: GetGame): Partial<GameStore> => {
    const { turn, canChangeTurn } = get();
    const isPlayer = turn === 'player';
    let state: Partial<GameStore> = {};
    if (canChangeTurn) {
        state = {
            turn: isPlayer ? 'oponent' : 'player',
        };
    }
    return state;
};