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
        Converter Button
      </NavButton>
      <NavButton primary={showCourse} onClick={onClickButtonCourse}>
        Course Button
      </NavButton>
    </NavigationComponent>
  );
};

Navigation.propTypes = {
  showConverter: PropTypes.bool,
  showCourse: PropTypes.bool,
};

export default Navigation;
