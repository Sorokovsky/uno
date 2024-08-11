import { FC, memo, StrictMode } from 'react';
import cover from "../assets/cards/cover.svg";

const App: FC = (): JSX.Element => {
  return (
    <StrictMode>
      <img src={cover} alt="" width={100} />
    </StrictMode>
  );
};

export default memo(App);