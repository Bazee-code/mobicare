import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import './App.css';

// local
import {Home,ProductDetails,Navbar,Cart} from './components';

const App = ()=>{
  return(
    <React.Fragment>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path={["/","/dashboard"]} component={Home} />
        <Route exact path="/details" component={ProductDetails} />
        <Route path ="/cart" component={Cart}/> 
        <Redirect to="/" />
      </Switch>    
      </Router>
    </React.Fragment>
    )
};

export default App;
