import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routerConfig';
import { PageLoader } from 'shared/ui/PageLoader';
import { RequireAuth } from './RequireAuth';
import {AppRoutesProps} from "shared/config/routeConfig/routerConfig"
const AppRouter = (): JSX.Element => {
  const renderWithWrapper = useCallback((route: AppRoutesProps)=>{
  const element = (
      <Suspense fallback={<PageLoader />}>
          <div className='page-wrapper'>
              {route.element}
          </div>
      </Suspense>
  )
return  <Route
    key={route.path}
    path={route.path}
    element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
    />
},[])
  return (
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
  );
};

export default memo(AppRouter);

