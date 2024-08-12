import { Card } from './card.type';
import { PlayerType } from './player-type.type';
export type Player = {
    type: PlayerType;
    deck: Card[];
};