import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import Homepage from './HomePage/Homepage';
import Footer from './Footer/Footer';
import LoginPage from './LoginPage/Loginpage';
import AboutPage from './AboutPage/AboutPage';

function App() {
  return (
    <div>
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
      <Routes>
        <Route path="/about" element= {<AboutPage/>}/>
        <Route path="/login" element= {<LoginPage/>}/>
        <Route path="/" element= {<Homepage/>}/>
      
      </Routes>

      </div>
      
      <Footer/>
    </Router>
    </div>

  

    
  );
}

export default App;
