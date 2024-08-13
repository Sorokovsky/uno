import type { GameStore } from "../../../types/game.type";

export const setShowPickerAction = (isShow: boolean): Partial<GameStore> => {
    return {    
        showPicker: isShow,
    };
};