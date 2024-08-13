import { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, initAuthData } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';
import { PageLoader } from '@/widgets/PageLoader';

const App = (): JSX.Element => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {(inited ?? false) && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
