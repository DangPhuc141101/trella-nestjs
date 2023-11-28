import { ROLE_LEVEL } from '@common/constants';
import { Roles } from '@common/constants';

export const isOperationAllowed = (requiredRole: Roles, userRole: string) => {
  if (requiredRole != null && userRole != null) {
    const userRoleLevel = ROLE_LEVEL[userRole];
    const requiredRoleLevel = ROLE_LEVEL[requiredRole];
    return userRoleLevel >= requiredRoleLevel;
  }
  return false;
};
