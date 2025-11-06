import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import ContactUs from '../pages/ContactUs';
import Dashboard from '../pages/backend_pages/Dashboard';
import ServiceD from '../pages/backend_pages/ServiceD';
import ProjectD from '../pages/backend_pages/ProjectD';
import DashboardHome from '../pages/backend_pages/DashboardHome';
import ServiceDetails from '../pages/ServiceDetails';
import ProjectDetail from '../pages/ProjectDetail';
import Login from '../pages/backend_pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'aboutus',
        element: <AboutUs></AboutUs>,
      },
      {
        path: 'services',
        element: <Services></Services>,
      },
      {
        path: 'projects',
        element: <Projects></Projects>,
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>,
      },
      {
        path: 'detail',
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: 'detailP',
        element: <ProjectDetail></ProjectDetail>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'admin',
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <DashboardHome></DashboardHome>,
          },
          {
            path: 'serviced',
            element: <ServiceD></ServiceD>,
          },
          {
            path: 'projectd',
            element: <ProjectD></ProjectD>,
          },
        ],
      },
    ],
  },
]);

export default router;
