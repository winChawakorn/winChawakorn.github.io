import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import Home from './components/Home'
import ThailandAddressDemo from './components/ReactThailandAddressAutocomplete'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="raleway">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/react-thailand-address-autocomplete" component={ThailandAddressDemo} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
