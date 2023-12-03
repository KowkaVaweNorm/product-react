import { getUserAuthData } from 'entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';
export function RequireAuth ({ children }: { children: JSX.Element }): JSX.Element {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (auth == null) {
    return (
        <Navigate to={RoutePath.main}
            state={{ from: location }} replace />
    );
  }

  return children;
}
