import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';

// local
import {Home,ProductDetails,Navbar,Cart,Login,Signup} from './components';

// create a private route
let authenticated;


class App extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      authenticated : false
    }
  };

  componentDidMount(){
    const token = localStorage.FBIdToken;
    if(token){
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);

      if(decodedToken.exp * 1000 < Date.now()){ //its expired
        // redirect user to login page
        this.setState({
          authenticated : false
        })
        // window.location.reload();
        window.location.href =  "/login"

      }
      else{
        this.setState({
          authenticated : true
        })
        // window.location.reload();
      }
    };
  };

  handleLogout = ()=>{
    window.location.reload();
    const token = localStorage.removeItem("FBIdToken");
      return token;
    this.setState({
      authenticated : false
    });
    // window.location.reload();
  };

  render(){
    const {authenticated} = this.state;
  return(
    <React.Fragment>
      <Router>
      <Navbar authenticated={authenticated} handleLogout={this.handleLogout}/>
      <Switch>
        <Route exact path={["/","/dashboard"]} component={Home} />
        <Route exact path="/details" component={ProductDetails} />
        <Route path ="/cart" component={Cart}/> 
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>    
      </Router>
    </React.Fragment>
    )
  }
};

export default App;

// characteristics of a private route
// 1. have the same API as <route />
// 2. render a route and pass all the props to it
// 3. if authenticated,it should render a comp if
// 4. if not redirects user