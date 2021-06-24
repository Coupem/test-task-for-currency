import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Footer, Navigation, Header } from '../components';
import CoursePage from '../pages/CoursePage';
import ConverterPage from '../pages/ConverterPage';

import {
  UKRAINIAN_CURRENCY,
  URL_CURRENCY_REQUEST,
  DEFAULT_URL,
  COURSE_PAGE,
} from './constants';
import { InteractionContainerWrapper, MainContentWrapper } from '../styled';

const MainLayout = () => {
  const [loadedCurrency, setLoadedCurrency] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showConverter, setShowConverter] = useState(true);
  const [showCourse, setShowCourse] = useState(false);

  useEffect(() => {
    axios.get(URL_CURRENCY_REQUEST).then((res) => {
      setLoadedCurrency([...res.data, { ...UKRAINIAN_CURRENCY }]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (window.location.href === DEFAULT_URL) {
      setShowConverter(true);
      setShowCourse(false);
    }
    if (window.location.href === COURSE_PAGE) {
      setShowConverter(false);
      setShowCourse(true);
    }
  }, []);

  return (
    <React.Fragment>
      <Header />
      <MainContentWrapper>
        <Navigation showConverter={showConverter} showCourse={showCourse} />
        <InteractionContainerWrapper>
          {!isLoading && showConverter && (
            <ConverterPage loadedCurrency={loadedCurrency} />
          )}
          {!isLoading && showCourse && (
            <CoursePage loadedCurrency={loadedCurrency} />
          )}
        </InteractionContainerWrapper>
      </MainContentWrapper>
      <Footer />
    </React.Fragment>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
