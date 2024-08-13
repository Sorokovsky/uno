import { FC, memo, useCallback } from "react";
import cn from "clsx";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.sass";
import Button from "../../ui/Button/Button";
import { useGameStore } from "../../../store/game/game.store";

const Home: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const { resetGame } = useGameStore();
    const startGame = useCallback(() => {
        resetGame();
        navigate("/game");
    }, []);

    return (
        <main
            className={cn(styles.page)}
        >
            <Button
                type={'button'}
                onClick={startGame}
            >
                Почати
            </Button>
        </main>
    );
};

export default memo(Home);