import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';

const App = (): JSX.Element => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);
  useEffect(() => {
    dispatch(userActions.initAuthdata());
  }, [dispatch]);
  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
              <Navbar />
              <div className="content-page">
                  <Sidebar />
                  { (inited ?? false) && <AppRouter />}
              </div>
          </Suspense>
      </div>
  );
};

export default App;
