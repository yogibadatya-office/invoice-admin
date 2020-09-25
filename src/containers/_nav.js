export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    // auth: token,
    // to: '/dashboard',
    to: '/dashboard',

    icon: 'cil-speedometer',
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Business Details',
    route: '/businessDetails',
    icon: 'cil-puzzle',
    _children: [     
      {
        _tag: 'CSidebarNavItem',
        name: 'Business Details',
        // to: '/businessDetails',
        to: '/businessDetails',
      },
      
    ],
  },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Service-Category',
    route: '/serviceCategory/addServiceCategory',
    icon: 'cil-puzzle',
    _children: [     
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Service-Category',
        // to: '/serviceCategory/addServiceCategory',
        to: '/serviceCategory/addServiceCategory',

      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Service-Category List',
        // to: '/serviceCategory/serviceCategoryList',
        to: '/serviceCategory/serviceCategoryList',

      },
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Subscription',
    route: '/subscription',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Subscriber List',
        // to: '/subscription/subscriptionList',
        to: '/subscription/subscriptionList',

      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'UserList',
      //   to: '/users/userlist',
      // },
      
    ],
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     // {
  //     //   _tag: 'CSidebarNavItem',
  //     //   name: 'Login',
  //     //   to: '/login',
  //     // },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
]

