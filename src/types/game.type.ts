import { Card } from "./card.type";
import { PlayerType } from "./player-type.type";
import { Player } from './player.type';

export type GetGame = () => GameStore;

export type GameStore = {
    turn: PlayerType;
    player: Player;
    oponent: Player;
    addCards: (get: GetGame, count: number, player: PlayerType) => GameStore;
    throwCard: (get: GetGame, card: Card) => GameStore;
};