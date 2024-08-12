import { Card } from "./card.type";
import { PlayerType } from "./player-type.type";
import { Player } from './player.type';

export type GameStore = {
    turn: PlayerType;
    player: Player;
    oponent: Player;
    addCards: (count: number, player: PlayerType) => GameStore;
    throwCard: (card: Card) => GameStore;
};