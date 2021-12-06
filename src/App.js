import logo from './logo.svg';
import './App.css';

import Footer from './Pages/Shared/Footer/Footer';
import NavVar from './Pages/Shared/NavVar/NavVar';
import Home from './Pages/HomePage/Home/Home';
import Navs from './Pages/HomePage/Navs/Navs';

function App() {
  return (
    <div className="App">
      
      <Navs></Navs>
      <NavVar></NavVar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
