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
            <Route exact path="/tips"><Home /></Route>
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
      <div>
        home
        <DogBreeds/>
      </div>

    );
  }
}

export default App;
