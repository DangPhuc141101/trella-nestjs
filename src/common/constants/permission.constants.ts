export const PERMISSIONS = {
  class: {
    read: 'org:read',
    create: 'org:create',
    update: 'org:update',
    delete: 'org:delete',
  },
  course: {
    read: 'project:read',
    create: 'project:create',
    update: 'project:update',
    delete: 'project:delete',
  },
  enrollment: {
    read: 'task:read',
    create: 'task:create',
    update: 'task:update',
    delete: 'task:delete',
  },
  comment: {
    read: 'user:read',
    create: 'user:create',
    update: 'user:update',
    delete: 'user:delete',
  },
};
