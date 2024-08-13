import type { GameStore, GetGame } from '../../../types/game.type';

export const endTurnAction = (get: GetGame): Partial<GameStore> => {
    const { turn } = get();
    const isPlayer = turn === 'player';
    return {
        turn: isPlayer ? 'oponent' : 'player', 
    };
};