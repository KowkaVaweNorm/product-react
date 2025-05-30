import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { AppRouteByPathPattern, AppRoutes } from '@/shared/const/router';

export function useRouteChange() {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname) != null) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
}
