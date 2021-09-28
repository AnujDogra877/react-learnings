import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import NavBar from '../components/NavBar';

import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container fluid>
      <Router>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route path="/*" component={<div>Oops page not found</div>} />
          </Switch>
        </Row>
      </Router>
    </Container>
  );
};

export default App;
