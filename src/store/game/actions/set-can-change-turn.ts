import type { GameStore, GetGame } from "../../../types/game.type";

export const setCanChangeTurnAction = (get: GetGame, canChangeTurn: boolean): Partial<GameStore> => {
    return {
        canChangeTurn,
    };
};