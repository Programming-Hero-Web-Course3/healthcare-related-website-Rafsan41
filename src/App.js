import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import NavVar from './Pages/Shared/NavVar/NavVar';
import Home from './Pages/HomePage/Home/Home';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import About from './Pages/AboutPage/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/ServicePage/Service/Service';
import RegisterFrom from './Pages/RegisterPage/RegisterFrom';
import LogIn from './Pages/LogInPage/LogIn';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
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

          <PrivateRoute path="/service">
          <Service></Service>
          </PrivateRoute>

          <PrivateRoute path="/apointment">
          <h2>this is  appointment</h2>
          </PrivateRoute>

          <PrivateRoute path="/counciling">
          <h2>this is counciling</h2>
          </PrivateRoute>

          <Route path="/register">
          <RegisterFrom></RegisterFrom>
          </Route>
            
          <Route path="/logIn">
          <LogIn></LogIn>
          </Route>

          <Route path="*">
          <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    
     
     
      
    </div>
  );
}

export default App;
