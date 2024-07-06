import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Navigation from './Components/Navigation';
import LandingPage from './Components/Pages/LandingPage';
import ServicesPage from './Components/Pages/ServicesPage';
import BookingPage from './Components/Pages/BookingPage';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/services",
    element: <ServicesPage/>
  },
  {
    path: "/services/:id",
    element: <BookingPage/>
  }
])


function App() {
  return (
    <div className="App">
      <Container sx={{ height: '100vh'}}>
          <Navigation/>
          <RouterProvider router={router}/>
      </Container>
    </div>
  );
}

export default App;
