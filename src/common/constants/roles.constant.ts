import { NonFunctionKeys } from 'utility-types';

export const ROLE_LEVEL = {
  student: 1,
  instructor: 2,
  admin: 3,
};

export type Roles = NonFunctionKeys<typeof ROLE_LEVEL>;
