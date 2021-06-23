import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NavigationComponent, NavButton } from './styledComponets';

function Navigation({ handleClickCourse, handleClickConverter }) {
  const [converterActive, setConverterActive] = useState(true);
  const [courseActive, setCourseActive] = useState(false);

  const onClickButtonConverter = () => {
    handleClickConverter();
    setConverterActive(true);
    setCourseActive(false);
  };

  const onClickButtonCourse = () => {
    handleClickCourse();
    setConverterActive(false);
    setCourseActive(true);
  };

  return (
    <NavigationComponent>
      <NavButton primary={converterActive} onClick={onClickButtonConverter}>
        Converter Button
      </NavButton>
      <NavButton primary={courseActive} onClick={onClickButtonCourse}>
        Course Button
      </NavButton>
    </NavigationComponent>
  );
}

Navigation.propTypes = {
  handleClickCourse: PropTypes.func,
  handleClickConverter: PropTypes.func,
};

export default Navigation;
