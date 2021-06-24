import React from 'react';
import PropTypes from 'prop-types';

import { NavButton, NavigationComponent } from '../../styled';

const Navigation = ({ showConverter, showCourse }) => {
  const onClickButtonConverter = () => {
    window.location.href = '/';
  };

  const onClickButtonCourse = () => {
    window.location.href = '/course';
  };

  return (
    <NavigationComponent>
      <NavButton primary={showConverter} onClick={onClickButtonConverter}>
        Converter
      </NavButton>
      <NavButton primary={showCourse} onClick={onClickButtonCourse}>
        Course
      </NavButton>
    </NavigationComponent>
  );
};

Navigation.propTypes = {
  showConverter: PropTypes.bool,
  showCourse: PropTypes.bool,
};

export default Navigation;
