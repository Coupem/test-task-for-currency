import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ConverterPage } from '../pages/converter';
import { CoursePage } from '../pages/course';
import {
  MainContentWrapper,
  InteractionContainerWrapper,
} from './styledComponents';

function MainLayout() {
  return (
    <React.Fragment>
      <Header />
      <MainContentWrapper>
        <Navigation />
        <InteractionContainerWrapper>
          <ConverterPage />
          {/* <CoursePage /> */}
        </InteractionContainerWrapper>
      </MainContentWrapper>
      <Footer />
    </React.Fragment>
  );
}

export default MainLayout;
