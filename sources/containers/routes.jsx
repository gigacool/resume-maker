import App from './App';
import HomePage from './home/Home';
import EditorPage from './editor/Editor';
import AboutPage from './about/About';

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
      path: '/editor',
      component: EditorPage
    },
    {
      path: '/about',
      component: AboutPage
    }
  ]
};
