import './App.css';
import Footer from './Pages/Shared/Footer/Footer';

import Home from './Pages/HomePage/Home/Home';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import About from './Pages/AboutPage/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/ServicePage/Service/Service';
import RegisterFrom from './Pages/RegisterPage/RegisterFrom';
import LogIn from './Pages/LogInPage/LogIn';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MenuVar from './Pages/Shared/MenuVar/MenuVar';
import SubMenuVar from './Pages/Shared/SubMenuVar/SubMenuVar';
import Appointment from './Pages/AppointmentPage/Appointment/Appointment';
import Counciling from './Pages/CouncilingPage/Counciling/Counciling';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <SubMenuVar></SubMenuVar>
          <MenuVar></MenuVar>
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

          <PrivateRoute path="/appointment">
          <Appointment></Appointment>
          </PrivateRoute>

          <PrivateRoute path="/counciling">
         <Counciling></Counciling>
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
