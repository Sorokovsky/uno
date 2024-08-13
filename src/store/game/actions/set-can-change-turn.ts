import type { GameStore } from "../../../types/game.type";

export const setCanChangeTurnAction = (canChangeTurn: boolean): Partial<GameStore> => {
    return {
        canChangeTurn,
    };
};