import { FC, memo } from "react";
import type { IButton } from "./Button.props";

const Button: FC<IButton> = ({children, ...rest}): JSX.Element => {
    return (
        <button
            {...rest}
        >
            {children}
            
        </button>
    );
};

export default memo(Button);