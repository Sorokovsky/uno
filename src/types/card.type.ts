export type UnoColors = 'red'
    | 'green'
    | 'blue'
    | 'yellow'
    | 'none';

export type UnoValues = '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | 'block'
    | 'reverse'
    | 'plus-2'
    | 'bonus'
    | 'switcher';

export type Card = {
    image: string;
    color: UnoColors;
    value: UnoValues;
};