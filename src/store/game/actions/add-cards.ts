import type { GetGame } from "../../../types/game.type";
import type { PlayerType } from '../../../types/player-type.type';
import { generateCards } from "../../../utils/generate-cards";

export const addCardsAction = (get: GetGame, count: number, to: PlayerType) => {
    const { player, oponent } = get();
    const person = to === 'player' ? player : oponent;
    return {
        [to]: { ...person, deck: [...person.deck, ...generateCards(count)]}
    };
};