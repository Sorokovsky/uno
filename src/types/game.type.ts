import { Card } from "./card.type";
import { PlayerType } from "./player-type.type";
import { Player } from './player.type';

export type GetGame = () => GameStore;

export type GameStore = {
    turn: PlayerType;
    player: Player;
    oponent: Player;
    currentCard: Card;
    addCards: (count: number, to: PlayerType) => void;
    throwCard: (card: Card) => void;
    endTurn: () => void;
};