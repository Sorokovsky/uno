import { FC, memo, StrictMode, Suspense } from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from '../constants/router.constant';
import Loader from './ui/Loader/Loader';

const App: FC = (): JSX.Element => {
  return (
    <StrictMode>
      <Suspense fallback={<Loader />} >
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
};

export default memo(App);