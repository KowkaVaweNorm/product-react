import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routerConfig';
import { PageLoader } from 'shared/ui/PageLoader';

const AppRouter = (): JSX.Element => {
  const isAuth = useSelector(getUserAuthData);
  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      if (route.authOnly && (isAuth == null)) {
        return false;
      }
      return true;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);
  return (
      <Routes>
          {routes.map(({ element, path }) => (
              <Route
                  key={path}
                  path={path}
                  element={(
                      <Suspense fallback={<PageLoader />}>
                          <div className='page-wrapper'>
                              {element}
                          </div>
                      </Suspense>
                    )}
                />
          ))}
      </Routes>
  );
};

export default memo(AppRouter);
