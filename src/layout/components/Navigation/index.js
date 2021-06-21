import React, { useState } from 'react';
import { NavigationComponent, NavButton } from './styledComponets';

function Navigation() {
  const [converterActive, setConverterActive] = useState(false);
  const [courseActive, setCourseActive] = useState(false);

  return (
    <NavigationComponent>
      <NavButton
        primary={converterActive}
        onClick={() => setConverterActive(!converterActive)}
      >
        Converter Button
      </NavButton>
      <NavButton
        primary={courseActive}
        onClick={() => setCourseActive(!courseActive)}
      >
        Course Button
      </NavButton>
    </NavigationComponent>
  );
}

export default Navigation;
