import { ButtonHTMLAttributes, ReactNode } from "react";

export type IButton = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    children: ReactNode;
};