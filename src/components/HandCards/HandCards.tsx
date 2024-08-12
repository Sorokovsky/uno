import { FC, memo } from "react";
import { IHandsCards } from "./HandCards.props";
import cn from "clsx";
import styles from "./HandCards.module.sass";
import PlayerCard from "../PlayerCard/PlayerCard";
import { getId } from "../../utils/get-id";

const HandCards: FC<IHandsCards> = ({ position = 'bottom', cards, playerType }): JSX.Element => {
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