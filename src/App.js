import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
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
      </Switch>    
      </Router>
    </React.Fragment>
    )
};

export default App;
