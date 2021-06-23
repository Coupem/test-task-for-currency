import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NavigationComponent, NavButton } from './styledComponets';

function Navigation({ handleClickCourse, handleClickConverter }) {
  const [converterActive, setConverterActive] = useState(true);
  const [courseActive, setCourseActive] = useState(false);

  return (
    <NavigationComponent>
      <NavButton
        primary={converterActive}
        onClick={() => {
          handleClickConverter();
          setConverterActive(true);
          setCourseActive(false);
        }}
      >
        Converter Button
      </NavButton>
      <NavButton
        primary={courseActive}
        onClick={() => {
          handleClickCourse();
          setConverterActive(false);
          setCourseActive(true);
        }}
      >
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
