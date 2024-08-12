import { FC, memo, MouseEvent, useCallback } from "react";
import cn from "clsx";
import styles from "./Swither.module.sass";
import { ISwither } from "./Switcher.props";
import { UnoColors } from "../../types/card.type";
import { useGameStore } from '../../store/game/game.store';

const Swither: FC<ISwither> = (): JSX.Element => {
    const { changeColor, showPicker, setShowPicker } = useGameStore();
    const changeColorHandler = useCallback((event: MouseEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const color = target.value as UnoColors;
        changeColor(color);
        setShowPicker(false);
    }, [showPicker]);

    return (
        <div
            className={cn(styles.switcher, {
                [styles.open]: showPicker
            })}
        >
            <input
                type={'button'}
                value={'red'}
                onClick={changeColorHandler}
                className={cn(styles.target, styles.red)}
            />
            <input
                type={'button'}
                value={'green'}
                onClick={changeColorHandler}
                className={cn(styles.target, styles.green)}
            />

            <input
                type={'button'}
                value={'blue'}
                onClick={changeColorHandler}
                className={cn(styles.target, styles.blue)}
            />
            <input type={'button'}
                value={'yellow'}
                onClick={changeColorHandler}
                className={cn(styles.target, styles.yellow)}
            />
        </div>
    )
};

export default memo(Swither);