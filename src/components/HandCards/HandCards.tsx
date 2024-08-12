import { FC, memo } from "react";
import { IHandsCards } from "./HandCards.props";
import cn from "clsx";
import styles from "./HandCards.module.sass";
import PlayerCard from "../PlayerCard/PlayerCard";
import coverCard from "../../assets/cards/cover.svg";
import { getId } from "../../utils/get-id";

const HandCards: FC<IHandsCards> = ({ position = 'bottom', cards, playerType }): JSX.Element => {
    console.log(playerType);
    
    return (
        <div className={cn(styles.hand, styles[position])}>
            {cards.map((card) => {
                console.log(playerType === 'oponent');
                
                if (playerType === 'oponent') {
                    card = { ...card, image: coverCard };
                }
                return <PlayerCard
                    key={getId()}
                    card={card}
                />
            })}
        </div>
    );
};

export default memo(HandCards);