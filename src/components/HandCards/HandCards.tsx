import { FC, memo, useEffect } from 'react';
import { IHandsCards } from "./HandCards.props";
import cn from "clsx";
import styles from "./HandCards.module.sass";
import PlayerCard from "../PlayerCard/PlayerCard";
import { getId } from "../../utils/get-id";
import { useGameStore } from "../../store/game/game.store";
import type { Card } from '../../types/card.type';
import { canThrowCard } from '../../utils/canThrowCard';
import { useNavigate } from 'react-router-dom';

const HandCards: FC<IHandsCards> = ({ position = 'bottom', cards, playerType }): JSX.Element => {
    const { turn, oponent, currentCard, throwCard, addCards } = useGameStore();
    const isOponent = playerType === 'oponent';
    const navigate = useNavigate();

    useEffect(() => {
        const isOponentTurn = isOponent && turn === 'oponent';
        if (isOponentTurn) {
            let resultCard: Card | null = null;
            for (let i = 0; i < oponent.deck.length; i++) {
                const card: Card = oponent.deck[i];
                if (canThrowCard(card, currentCard)) {
                    resultCard = card;
                    break;
                }
            }
            if (resultCard) {
                throwCard(resultCard);
            } else {
                addCards(1, 'oponent');
            }
        }

        if (cards.length === 0) navigate("/");

    }, [turn, oponent, playerType]);

    return (
        <div className={cn(styles.hand, styles[position], styles[playerType])}>
            {cards.map((card) => { 
                return <PlayerCard
                    key={getId()}
                    card={card}
                    playerType={playerType}
                />
            })}
        </div>
    );
};

export default memo(HandCards);