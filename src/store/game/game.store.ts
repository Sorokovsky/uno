import { create } from "zustand";
import { getNewGame } from "../../constants/init-game-store";
import type { GameStore } from "../../types/game.type";
import type { PlayerType } from "../../types/player-type.type";
import { activateCardAction } from "./actions/activate-card";
import { addCardsAction } from "./actions/add-cards";
import { changeColorAction } from "./actions/change-color";
import { endTurnAction } from "./actions/end-turn";
import { setShowPickerAction } from "./actions/set-show-picker";
import { throwCardAction } from './actions/throw-card';
import { setCanChangeTurnAction } from './actions/set-can-change-turn';

export const useGameStore = create<GameStore>((set, get) => ({
    ...getNewGame(),

    addCards: (count, to: PlayerType) => set(addCardsAction(get, count, to)),

    throwCard: (card) => set(throwCardAction(get, card)),

    endTurn: () => set(endTurnAction(get)),

    changeColor: (color) => set(changeColorAction(get, color)),

    setShowPicker: (isShow) => set(setShowPickerAction(isShow)),

    activateCard: (card) => set(activateCardAction(get, card)),

    setCanChangeTurn: (canChangeTurn) => set(setCanChangeTurnAction(canChangeTurn)),

    resetGame: () => set(getNewGame()),
}));