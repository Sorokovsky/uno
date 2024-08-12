import { FC, memo } from "react";
import { ICurrentCard } from "./CurrentCard.props";
import { useGameStore } from '../../store/game/game.store';
import cn from 'clsx';
import styles from "./CurrentCard.module.sass";

const CurrentCard: FC<ICurrentCard> = (): JSX.Element => {
    const { currentCard } = useGameStore();
    return (
        <button
            disabled={true}
            className={cn(styles.card)}
        >
            <img
                src={currentCard.image}
                alt={currentCard.color + '/' + currentCard.value}
            />
        </button>
    );
};

export default memo(CurrentCard);