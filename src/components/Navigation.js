import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { NavButton, NavigationComponent } from '../styled';

const Navigation = ({ showConverter }) => {
  const history = useHistory();

  const onClickButtonConverter = () => {
    history.push('/');
  };

  const onClickButtonCourse = () => {
    history.push('/course');
  };

  return (
    <NavigationComponent>
      <NavButton primary={showConverter} onClick={onClickButtonConverter}>
        Converter
      </NavButton>
      <NavButton primary={!showConverter} onClick={onClickButtonCourse}>
        Course
      </NavButton>
    </NavigationComponent>
  );
};

Navigation.propTypes = {
  showConverter: PropTypes.bool,
};

export default Navigation;
