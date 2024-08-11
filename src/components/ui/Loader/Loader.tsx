import { FC, memo } from "react";
import cn from "clsx";
import styles from "./Loader.module.sass";

const Loader: FC = (): JSX.Element => {
    return (
        <div className={cn(styles.loader)} />
    );
};

export default memo(Loader);