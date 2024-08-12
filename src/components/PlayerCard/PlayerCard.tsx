import { FC, memo, useCallback, useEffect, useState } from 'react';
import cn from "clsx";
import { IPlayerCard } from "./PlayerCard.props";
import styles from "./PlayerCard.module.sass"
import { useGameStore } from '../../store/game/game.store';
import coverCard from "../../assets/cards/cover.svg";

const PlayerCard: FC<IPlayerCard> = ({ card, playerType }): JSX.Element => {
    const { image, value } = card;
    const [icon, setIcon] = useState(image);
    const { throwCard, turn } = useGameStore();
    useEffect(() => {
        if (playerType === 'oponent') {
            setIcon(coverCard);
        };
    }, [card]);
    const clickHandler = useCallback(() => {
        throwCard(card);
    }, [card]);
    return (
        <button
            disabled={turn !== playerType}
            className={cn(styles.card)}
            onClick={clickHandler}
        >
            <img src={icon} alt={value} />
        </button>
    );
};

export default memo(PlayerCard);