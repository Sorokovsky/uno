import type { Card } from "../../types/card.type";
import { PlayerType } from "../../types/player-type.type";

export interface IPlayerCard {
    card: Card;
    playerType: PlayerType;
};