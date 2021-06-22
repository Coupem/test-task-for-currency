import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { CoursePage } from '../pages/course';
import {
  MainContentWrapper,
  InteractionContainerWrapper,
} from './styledComponents';

const UKRAINIAN_CURRENCY = { ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1' };

function MainLayout() {
  const [loadedCurrency, setLoadedCurrency] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then((res) => {
        setLoadedCurrency([...res.data, { ...UKRAINIAN_CURRENCY }]);
        setIsLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <MainContentWrapper>
        <Navigation />
        <InteractionContainerWrapper>
          {/* {!isLoading && <ConverterPage loadedCurrency={loadedCurrency} />} */}
          {!isLoading && <CoursePage loadedCurrency={loadedCurrency} />}
        </InteractionContainerWrapper>
      </MainContentWrapper>
      <Footer />
    </React.Fragment>
  );
}

export default MainLayout;
