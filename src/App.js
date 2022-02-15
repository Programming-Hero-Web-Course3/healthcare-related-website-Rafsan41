import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import NavVar from './Pages/Shared/NavVar/NavVar';
import Home from './Pages/HomePage/Home/Home';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import About from './Pages/AboutPage/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/ServicePage/Service/Service';


function App() {
  return (
    <div className="App">
      <Router>
            <NavVar></NavVar>
        <Switch>

          <Route exact path="/">
          <Home></Home>
          </Route>

          <Route path="/home">
          <Home></Home>
          </Route>
          
          <Route path="/about">
          <About></About>
          </Route>

          <Route path="/service">
          <Service></Service>
          </Route>

          <Route path="/apointment">
          <About></About>
          </Route>

          <Route path="/counciling">
          <About></About>
          </Route>

          <Route path="*">
          <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    
     
     
      
    </div>
  );
}

export default App;
