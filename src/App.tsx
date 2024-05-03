// App.tsx


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destinations from './assets/components/Destinations';
import SpotDetails from './assets/components/SpotDetails';
import ClimateList from './assets/components/ClimateList';
import Footer from './assets/components/Footer';
import LandingPage from './assets/components/LandingPage';
import PlannedTripsPage from './assets/components/PlannedTripsPage';
import Login from './assets/components/Login';

const App = () => {
  return (

    
    <Router>
      <Routes>
        <Route path="/climatelist" element={<ClimateList />} />
        <Route path="/destinations/:climateId" element={<Destinations />} />
        <Route path="/spots/:destinationId" element={<SpotDetails />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element = {<LandingPage />} />
        <Route path="/plannedtripspage" element={<PlannedTripsPage />} />
        <Route path="/Login" element={<Login/>}/>
       
        
      </Routes>
    </Router>




  );
};

export default App;
