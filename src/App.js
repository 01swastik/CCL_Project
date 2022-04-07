import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Amplify from './Components/Amplify';
import S3 from './Components/S3';
import EC2 from './Components/EC2';

function App() {
  return (
    <Router>
      <Routes >
      <Route exact path="/" element={<Home />} />
      <Route exact path="/amplify" element={<Amplify />} />
      <Route exact path="/aws-S3" element={<S3 />} />
      <Route exact path="/EC2" element={<EC2 />} />
      </Routes>  
      </Router>
   
  );
}

export default App;
