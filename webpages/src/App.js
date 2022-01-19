import React from 'react';
import './App.css';
import Login from './pages/login/login'
import Home from './pages';
import About from "./pages/about"; 
import Events from './pages/events';
import Blogs from './pages/blogs';
import Teams from './pages/teams';
import Register from './pages/register/register';
import Homepage from './pages/homepage/homepage'
import Navbar from './components/Navbar';
import {BrowserRouter,Switch,Route} from "react-router-dom";
function App() {
  return (
    <div>
     <BrowserRouter>
    <Navbar />
    <Switch>
    <Route path='/' exact component={Home} />
    <Route exact path="/events"  component={Events} />
    <Route exact path="/about" component={About} />
    <Route exact path='/team' component={Teams} />
    <Route exact path='/blogs' component={Blogs} />
    
    <Route exact path='/register' component={Register} />
    <Route exact path='/homepage' component={Homepage} />
    <Route exact path='/login' component={Login} />
    <Login>
          <Login to='/signin'>Login</Login>
        </Login>
    </Switch>
    </BrowserRouter>
        </div>
        
  );
}

export default App;