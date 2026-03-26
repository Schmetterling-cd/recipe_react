import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoaderFullScreen from './components/LoaderFullScreen.jsx';
import useLoaderFullScreenStore from './store/LoaderFullScreenStore.js';
import UserLayout from './layouts/UserLayout.jsx';
import useNavigationStore from './store/NavigationStore.js';
import { lazy, Suspense } from 'react';
import useUserStore from './store/UserStore.js';

const components =[];

const loadComponent = (componentName) => {
  if (components[componentName]) {
    return components[componentName];
  }
  
  components[componentName] = lazy(() => import(`./pages/${componentName}.jsx`));

  return components[componentName];
};

const isGroupElement = (element) => {
    return element.items && Array.isArray(element.items) && element.items.length > 0;
};

const prepareRoutes = (navElements) => {
  let routes = [];

  navElements.forEach((navElement) => {
    if (isGroupElement(navElement)) {
      routes = [...routes, ...prepareRoutes(navElement.items)];
    }
    if (navElement.element) {
      routes.push({
          path: navElement.link,
          element: navElement.element,
        });
    }
  });

  return routes;
};

function App() {
  const isLoading = useLoaderFullScreenStore((state) => state.isLoading);
  const user = useUserStore((state) => state.user);

  const navElements = useNavigationStore(state => state.navElements);

  const routes = () => {
    const routes = prepareRoutes(navElements);

    return routes.map((route) => {
      const Component = loadComponent(route.element);
      return <Route key={route.path} path={route.path} element={<Component />} />;
    });
  };

  return (
    <BrowserRouter>
      {
        user.isAuthenticated
          ?
          <Suspense fallback={<LoaderFullScreen />}>
            <Routes>
              <Route element={<UserLayout />}>
                { routes() }
              </Route>
            </Routes>
          </Suspense>
          : <h1>Not authenticated</h1>
      }
      {isLoading && <LoaderFullScreen />}
    </BrowserRouter>
  );
}

export default App;
