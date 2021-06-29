import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { COURSE_PAGE, DEFAULT_URL, UKRAINIAN_CURRENCY } from './constants';
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
  const { pathname } = useLocation();

  const [loadedCurrency, setLoadedCurrency] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showConverter, setShowConverter] = useState(true);

  useEffect(() => {
    getCurrencyRequest.then((res) => {
      setLoadedCurrency([...res, { ...UKRAINIAN_CURRENCY }]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (pathname === DEFAULT_URL) {
      setShowConverter(true);
    }

    if (pathname === COURSE_PAGE) {
      setShowConverter(false);
    }
  }, [pathname]);

  return (
    <MainLayoutContainer fluid>
      <Header />
      <MainContentWrapper>
        <Navigation sm={2} showConverter={showConverter} />
        <InteractionContainerWrapper sm={10}>
          {!isLoading && showConverter && (
            <ConverterPage loadedCurrency={loadedCurrency} />
          )}
          {!isLoading && !showConverter && (
            <CoursePage loadedCurrency={loadedCurrency} />
          )}
        </InteractionContainerWrapper>
      </MainContentWrapper>
      <Footer />
    </MainLayoutContainer>
  );
};

App.propTypes = {};

export default App;
