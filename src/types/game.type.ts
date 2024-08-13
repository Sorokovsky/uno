import { Card, UnoColors } from './card.type';
import { PlayerType } from "./player-type.type";
import { Player } from './player.type';

export type GetGame = () => GameStore;

export type GameStore = {
    turn: PlayerType;
    oponent: Player;
    player: Player;
    showPicker: boolean;
    currentCard: Card;
    canChangeTurn: boolean;
    throwCard: (card: Card) => void;
    addCards: (count: number, to: PlayerType) => void;
    setShowPicker: (isShow: boolean) => void;
    changeColor: (color: UnoColors) => void;
    endTurn: () => void;
    activateCard: (card: Card) => void;
    setCanChangeTurn: (canChangeTurn: boolean) => void;
    resetGame: () => void;
};