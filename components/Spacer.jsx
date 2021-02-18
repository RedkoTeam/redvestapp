import { widthPercentageToDP, heightPercentageToDP } from 'redvest/util/scaler';

import React from 'react';
import { View } from 'react-native';

function Spacer({ width = 0, height = 0 }) {
  return (
    <View
      style={{
        width: widthPercentageToDP(width),
        height: heightPercentageToDP(height),
      }}
    />
  );
}

export default Spacer;
