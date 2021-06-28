import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UKRAINIAN_CURRENCY } from './constants';
import {
  InteractionContainerWrapper,
  MainContentWrapper,
  MainLayoutContainer,
} from './styled';
import { Footer, Header, Navigation } from './components';
import ConverterPage from './pages/ConverterPage';
import CoursePage from './pages/CoursePage';
import { getCurrencyRequest } from './api';

const App = () => {
  const [loadedCurrency, setLoadedCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrencyRequest.then((res) => {
      setLoadedCurrency([...res, { ...UKRAINIAN_CURRENCY }]);
      setIsLoading(false);
    });
  }, []);

  return (
    <MainLayoutContainer fluid>
      <Header />
      <MainContentWrapper>
        <Router>
          <Navigation sm={2} />
          <InteractionContainerWrapper sm={10}>
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <ConverterPage
                    isLoading={isLoading}
                    loadedCurrency={loadedCurrency}
                  />
                )}
              />
              <Route
                exact
                path="/course"
                render={() => (
                  <CoursePage
                    isLoading={isLoading}
                    loadedCurrency={loadedCurrency}
                  />
                )}
              />
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
