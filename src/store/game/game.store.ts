import { create } from "zustand";
import { initGameStore } from "../../constants/init-game-store";
import { GameStore } from "../../types/game.type";
import { PlayerType } from "../../types/player-type.type";
import { canThrowCard } from "../../utils/canThrowCard";
import { generateCards } from '../../utils/generate-cards';

export const useGameStore = create<GameStore>((set, get) => ({
    ...initGameStore,
    addCards(count, to: PlayerType) {
        const { player, oponent, turn } = get();
        const person = to === 'player' ? player : oponent;
        console.log(turn);
        
        set(state => ({
            ...state,
            [to]: { ...person, deck: [...person.deck, ...generateCards(count)]}
        }));
        
    },

    throwCard(card) {
        const { addCards, endTurn, currentCard, turn, player, oponent } = get();

        if (canThrowCard(card, currentCard)) {     
            const toPlayer: PlayerType = turn === 'player' ? 'oponent' : 'player';
            const isPlayer = turn === 'player';
            const person = isPlayer ? player : oponent;
            set(state => ({
                ...state,
                currentCard: card,
                [turn]: {...person, deck: person.deck.filter(c => c.id !== card.id)}
            }));

            if (card.value === 'plus-2') {                
                addCards(2, toPlayer);
            }
            if (card.value === 'bonus') {
                addCards(4, toPlayer);
            }

            endTurn();

            if (card.value === 'block') {
                endTurn();
            }
        }
    },

    endTurn() {
        const { turn } = get();
        const isPlayer = turn === 'player';
        set(state => ({
            ...state,
            turn: isPlayer ? 'oponent' : 'player', 
        }));
    },
}));