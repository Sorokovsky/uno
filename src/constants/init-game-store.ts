import { GameStore } from "../types/game.type";
import { generateCards } from "../utils/generate-cards";
import { HAND_CARD_COUNT } from "./hand-cards-count.constants";

export const initGameStore: Pick<GameStore, 'turn' | 'player' | 'oponent' | 'currentCard'> = {
    oponent: {
        type: "oponent",
        deck: generateCards(HAND_CARD_COUNT),
    },
    player: {
        type: "player",
        deck: generateCards(HAND_CARD_COUNT),
    },
    turn: 'player',
    currentCard: generateCards(1)[0],
};