import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const AddUser = React.lazy(() => import('./views/users/AddUser'));
const Login = React.lazy(() => import('./views/pages/login/Login'))
const BusinessDetails = React.lazy(() => import('./views/business/BusinessDetails'))
const AddServiceCategory = React.lazy(()=> import('./views/service-category/AddServiceCategory'))
const ServiceCategoryList = React.lazy(()=> import('./views/service-category/ServiceCategoryList'))
const SubscriptionList = React.lazy(()=>import('./views/subscription/SubscriptionList'))

const routes = [
  // { path: '/', exact: true,  name: 'Login', component:Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users/userlist', exact: true, name: 'UserLists', component: Users },
  { path: '/users/adduser', exact: true,  name: 'AddUsers', component: AddUser },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/businessDetails', exact: true, name: 'Business Details', component: BusinessDetails },
  { path: '/serviceCategory/addServiceCategory', exact: true,  name: 'Add Service-Category', component: AddServiceCategory },
  { path: '/serviceCategory/serviceCategoryList', exact: true,  name: 'Service-Category List', component: ServiceCategoryList },
  { path: '/subscription/subscriptionList', exact: true, name: 'SubscriptionList', component: SubscriptionList },
];

export default routes;
