import { FC, memo } from "react";
import cn from "clsx";
import { IPlayerCard } from "./PlayerCard.props";
import styles from "./PlayerCard.module.sass"

const PlayerCard: FC<IPlayerCard> = ({ card }): JSX.Element => {
    const { image, value } = card;
    return (
        <button
            className={cn(styles.card)}
        >
            <img src={image} alt={value} />
        </button>
    );
};

export default memo(PlayerCard);