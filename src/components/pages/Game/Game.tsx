import { FC, memo } from "react";
import HandCards from "../../HandCards/HandCards";
import { useGameStore } from '../../../store/game/game.store';
import Button from "../../ui/Button/Button";
import cn from 'clsx';
import styles from "./Game.module.sass";
import CurrentCard from "../../CurrentCard/CurrentCard";
import Swither from "../../Swither/Swither";
import RandomCard from "../../RandomCard/RandomCard";

const Game: FC = (): JSX.Element => {
    const { player, oponent } = useGameStore();
    return (
        <main>
            <HandCards
                cards={oponent.deck}
                position={'top'}
                playerType='oponent'
            />
            <div
                className={cn(styles.center)}
            >
                <CurrentCard />
                <RandomCard />
            </div>
            <Swither />
            <HandCards
                cards={player.deck}
                position={'bottom'}
                playerType='player'
            />
        </main>
    );
};

export default memo(Game);