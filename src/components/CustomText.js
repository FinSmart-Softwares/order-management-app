import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ children, style, weight = 'Regular', ...props }) => {
  // Allowed font weights (ensure these .ttf files are added in your assets/fonts)
  const validWeights = ['Regular', 'Medium', 'Bold'];

  // Fallback to Regular if an invalid weight is passed
  const finalWeight = validWeights.includes(weight) ? weight : 'Regular';

  const fontFamily = `Montserrat-${finalWeight}`;

  return (
    <Text {...props} style={[{ fontFamily }, style]}>
      {children}
    </Text>
  );
};

export default CustomText;
