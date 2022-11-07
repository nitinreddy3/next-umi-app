
export default [
  {
    path: '/',
    component: '@layouts/Header',
    routes: [
      { path: '/login', component: '@/pages/Login', },
      { path: '/home', component: '@/pages/Home', }
    ]
  } ];
