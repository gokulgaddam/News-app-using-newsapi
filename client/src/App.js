import React, { Component } from 'react';
import News from './components/news';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Header from './components/HeaderComponent';
import Sports from './components/Sports';
import Business from './components/Bussiness';
import Health from './components/Health';
import Entertainment from './components/Entertainment';
import './App.css';



class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Header/>
        
        <Switch>
          <Route exact path="/" component={()=><News />}/>
          <Route exact path="/sports" component={()=><Sports />}/>
          <Route exact path="/business" component={()=><Business />}/>
          <Route exact path="/health" component={()=><Health />}/>
          <Route exact path="/entertainment" component={()=><Entertainment />}/>
          

         
        </Switch>
        
      </div>
      </BrowserRouter>
    
    );
  }
}
9
export default App;
