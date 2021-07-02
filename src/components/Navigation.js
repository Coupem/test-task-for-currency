import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { CONVERTER_URL, COURSE_URL } from '../constants';
import { NavButton, NavigationComponent } from '../styled';

const Navigation = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onClickButtonConverter = () => {
    history.push('/');
  };

  const onClickButtonCourse = () => {
    history.push('/course');
  };

  return (
    <NavigationComponent>
      <NavButton
        primary={pathname === CONVERTER_URL}
        onClick={onClickButtonConverter}
      >
        Converter
      </NavButton>
      <NavButton
        primary={pathname === COURSE_URL}
        onClick={onClickButtonCourse}
      >
        Course
      </NavButton>
    </NavigationComponent>
  );
};

Navigation.propTypes = {};

export default Navigation;
