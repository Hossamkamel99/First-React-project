import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Notfound from './components/Notfound/Notfound';
const Router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: '', element: <Home /> },
      { path: 'Home', element: <Home /> },
      { path: 'About', element:<About/>},
      { path: 'Portfolio', element: <Portfolio /> },
      { path: 'Contact', element: <Contact /> },
      { path: 'Notfound', element: <Notfound /> },
      { path: '*', element: <Notfound /> },
    ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}
export default App;
