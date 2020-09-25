/**
 * Authorization Roles
 */
const authRoles = {
  //admin: ['admin'],
  admin: ['SUPER-ADMIN'],
  staff: ['admin', 'staff'],
  user: ['admin', 'staff', 'user'],
  onlyGuest: []
}

export default authRoles
