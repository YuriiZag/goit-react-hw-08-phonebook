import { AppBar } from 'components/appBar/appBar';
import { Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './sharedLayout.style';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar></AppBar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
