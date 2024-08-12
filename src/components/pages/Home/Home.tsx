import { FC, memo, useCallback } from "react";
import cn from "clsx";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.sass";
import Button from "../../ui/Button/Button";

const Home: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const startGame = useCallback(() => {
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