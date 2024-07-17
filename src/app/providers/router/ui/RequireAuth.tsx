import { type UserRole, getUserAuthData, getUserRoles } from '@/entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RoutePath } from '@/shared/config/routeConfig/routerConfig';
import { useMemo } from 'react';

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

export function RequireAuth ({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (roles == null) {
      return true;
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (auth === undefined) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
}
