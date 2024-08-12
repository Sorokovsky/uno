import { FC, memo } from "react";
import HandCards from "../../HandCards/HandCards";
import { useGameStore } from '../../../store/game/game.store';
import Button from "../../ui/Button/Button";
import cn from 'clsx';
import styles from "./Game.module.sass";
import CurrentCard from "../../CurrentCard/CurrentCard";

const Game: FC = (): JSX.Element => {
    const { player, oponent, endTurn } = useGameStore();
    return (
        <main>
            <HandCards
                cards={oponent.deck}
                position={'top'}
                playerType='oponent'
            />
            <Button
                onClick={endTurn}
                className={cn(styles.endTurn)}
            >
                End Turn
            </Button>
            <div
                className={cn(styles.center)}
            >
                <CurrentCard />
            </div>
            <HandCards
                cards={player.deck}
                position={'bottom'}
                playerType='player'
            />
        </main>
    );
};

export default memo(Game);