import './App.css';
import HomePage from './pages/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import MyWorkPage from './pages/MyWorkPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />
    },
    {
      path: "/work",
      element: <MyWorkPage />
    },
    {
      path: "/todo",
      element: <ProjectPage />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
