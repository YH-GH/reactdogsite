import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import DogBreeds from './Components/DogBreeds';
import TrainingAccessoriesShop from './Components/TrainingAccessoriesShop';
import Tips from './Components/Tips';


class App extends React.Component {
  render() {
      return (
        <Router>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tips">Training Tips</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
        </nav>

        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/tips"><Tips /></Route>
            <Route path="/shop"><TrainingAccessoriesShop /></Route>

            {/* <Route path="/display/:subject" render={({ match }) => <DisplayInfo id="12345" match={match} />} />
            <Route path="/display/" render={({ match }) => <DisplayInfo match={match} />} /> */}
        </Switch>
      </Router>
      );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-1"></div>
          <div className="col-7 text-center">
            <DogBreeds/>
            <div className="css-typing">
              <h1>You and your Dog...</h1>
              <p>Are in a relationship.</p>
              Your dog may be of any breed, and might have known behavioral issues considered to be imprinted in the breed's DNA.
              <h3>BUT...</h3>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
