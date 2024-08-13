import type { UnoColors } from '../../../types/card.type';
import type { GetGame } from '../../../types/game.type';

export const changeColorAction = (get: GetGame, color: UnoColors): Partial<GetGame> => {
    const { currentCard } = get();
    return {
        currentCard: {...currentCard, color: color},
    };
};