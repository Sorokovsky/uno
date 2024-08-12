import { Card } from "../../types/card.type";
import { PlayerType } from "../../types/player-type.type";
import type { Position } from "../../types/position.type";

export interface IHandsCards {
    position?: Position;
    cards: Card[]; 
    playerType: PlayerType;
};