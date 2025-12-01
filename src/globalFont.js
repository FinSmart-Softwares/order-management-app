import { Text } from 'react-native';
import React from 'react';

const oldRender = Text.render;

Text.render = function (...args) {
  const origin = oldRender.call(this, ...args);
  return React.cloneElement(origin, {
    style: [{ fontFamily: 'Montserrat-Regular' }, origin.props.style],
  });
};
