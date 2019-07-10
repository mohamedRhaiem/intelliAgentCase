import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/layout/Header';
import { MainApollo } from './component/ApolloWay/mainApollo';
import { MainRest } from './component/RestWay/mainRest';
import MainMultiWayReduxThunk from './component/MultiWayReduxThunk/mainMultiWayReduxThunk';
import MainMultiWayReduxSaga from './component/MultiWayReduxSaga/mainMultiWayReduxSaga';

const App = () => {
  return (<Router>
    <div className="App">
      <Header branding="IntelliAgent Effect Side Communication" />
      <div className="container">
        <Switch>
          <Route exact path="/" component={MainApollo} />
          <Route exact path="/rest" component={MainRest} />
          <Route exact path="/multiWayReduxThunk" component={MainMultiWayReduxThunk} />
          <Route exact path="/multiWayReduxSaga" component={MainMultiWayReduxSaga} />
        </Switch>
      </div>
    </div>
  </Router>)
}

export default App;
