import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
 
  return (
    <div className="App">
    <BrowserRouter basename={document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf('/'))}>
     <Routes> 
       <Route path="/" element={<Home/>}/>
       <Route path="/service" element={<Service/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>   
     </Routes> 
 </BrowserRouter>
 </div>
  );
}

export default App;
