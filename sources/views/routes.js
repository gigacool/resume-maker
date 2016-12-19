import App from './app';
import HomePage from './pages/home';
import AboutPage from './pages/about';

export const routes = {
  path: '/',
  component: App,
  childRoutes: [
    {
      indexRoute: {
        component: HomePage
      }
    },
    {
      path: '/about',
      component: AboutPage
    }
  ]
};
