import { Card, UnoColors } from './card.type';
import { PlayerType } from "./player-type.type";
import { Player } from './player.type';

export type GetGame = () => GameStore;

export type GameStore = {
    turn: PlayerType;
    player: Player;
    oponent: Player;
    currentCard: Card;
    showPicker: boolean;
    addCards: (count: number, to: PlayerType) => void;
    throwCard: (card: Card) => void;
    endTurn: () => void;
    changeColor: (color: UnoColors) => void;
    setShowPicker: (isShow: boolean) => void;
};