import { FC, memo } from "react";
import { HAND_CARD_COUNT } from "../../../constants/hand-cards-count.constants";
import { generateCards } from "../../../utils/generate-cards";
import HandCards from "../../HandCards/HandCards";

const Game: FC = (): JSX.Element => {
    return (
        <main>
            <HandCards
                cards={generateCards(HAND_CARD_COUNT)}
                position={'top'}
                playerType='oponent'
            />
            <HandCards
                cards={generateCards(HAND_CARD_COUNT)}
                position={'bottom'}
                playerType='player'
            />
        </main>
    );
};

export default memo(Game);