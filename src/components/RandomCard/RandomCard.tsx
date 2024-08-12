import { FC, memo, useCallback } from "react";
import { useGameStore } from "../../store/game/game.store";
import coverCard from "../../assets/cards/cover.svg";
import cn from "clsx";
import styles from "./RandomCard.module.sass";

const RandomCard: FC = (): JSX.Element => {
    const { turn, addCards } = useGameStore();
    const getRandomCard = useCallback(() => {
        addCards(1, turn);
    }, [turn]);
    return (
        <button
            type="button"
            className={cn(styles.card)}
            onClick={getRandomCard}
        >
            <img src={coverCard} alt="cover card" />
        </button>
    );
};

export default memo(RandomCard);