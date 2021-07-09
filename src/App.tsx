import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  InteractionContainerWrapper,
  MainContentWrapper,
  MainLayoutContainer,
} from './styled';
import { Footer, Header, Navigation } from './components';
import ConverterPage from './pages/ConverterPage';
import CoursePage from './pages/CoursePage';
import { getCurrency } from './redux/ducks/currency';

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  return (
    <MainLayoutContainer fluid>
      <Header />
      <MainContentWrapper>
        <Router>
          <Navigation />
          <InteractionContainerWrapper sm={10}>
            <Switch>
              <Route path="/" exact render={() => <ConverterPage />} />
              <Route exact path="/course" render={() => <CoursePage />} />
            </Switch>
          </InteractionContainerWrapper>
        </Router>
      </MainContentWrapper>
      <Footer />
    </MainLayoutContainer>
  );
};

App.propTypes = {};

export default App;
