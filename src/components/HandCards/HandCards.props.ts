import { Card } from "../../types/card.type";
import { Player } from "../../types/player.type";
import type { Position } from "../../types/position.type";

export interface IHandsCards {
    position?: Position;
    cards: Card[]; 
    playerType: Player;
};