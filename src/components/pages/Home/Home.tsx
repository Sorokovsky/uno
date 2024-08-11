import { FC, memo } from "react";
import cn from "clsx";
import styles from "./Home.module.sass";
import Button from "../../ui/Button/Button";

const Home: FC = (): JSX.Element => {
    return (
        <main
            className={cn(styles.page)}
        >
            <Button type={'button'} >Start</Button>
        </main>
    );
};

export default memo(Home);