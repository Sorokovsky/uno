import { FC, memo } from "react";
import PlayerCard from "../../PlayerCard/PlayerCard";
import { Cards } from "../../../constants/cards.constant";

const Game: FC = (): JSX.Element => {
    return (
        <main>
            <PlayerCard card={Cards[0]} />
        </main>
    );
};

export default memo(Game);