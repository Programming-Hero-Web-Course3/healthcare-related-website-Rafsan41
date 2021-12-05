import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import NavVar from './Pages/Shared/NavVar/NavVar';

function App() {
  return (
    <div className="App">
      <h2>this is app</h2>
      <NavVar></NavVar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
