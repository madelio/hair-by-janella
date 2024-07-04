import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Navigation from './Components/Navigation';
import LandingPage from './Components/Pages/LandingPage';
import Pricing from './Components/Pages/ServicesPage';
import Service from './Components/Pages/BookingPage';
import Stack from '@mui/material/Stack';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/services",
    element: <Pricing/>
  },
  {
    path: "/services/:id",
    element: <Service/>
  }
])


function App() {
  return (
    <div className="App">
      <Stack alignItems="center">
        <Navigation/>
        <RouterProvider router={router}/>
      </Stack>
    </div>
  );
}

export default App;
