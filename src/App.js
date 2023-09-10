import About from './About';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {

  return (
   
  <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path ="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    

    </BrowserRouter>
    </>
  );
}

export default App;
