import { Suspense, memo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig, type AppRoutesProps } from '@/shared/config/routeConfig/routerConfig';
import { RequireAuth } from './RequireAuth';
import { PageLoader } from '@/widgets/PageLoader';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
        <Suspense fallback={<PageLoader />}>
            {route.element}
        </Suspense>
    );

    return (
        <Route
            key={route.path}
            path={route.path}
            element={
                (route.authOnly !== undefined)
                  ? <RequireAuth roles={route.roles}>{element}</RequireAuth>
                  : element
            }
            />
    );
  }, []);

  return (
      <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
  );
};

export default memo(AppRouter);
