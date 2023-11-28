import { SetMetadata } from '@nestjs/common';
import { Roles } from '@common/constants';

export const Role = (role: Roles) => SetMetadata('role', role);
