import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function AccountIcon({ size = 18, color = '#78AC43', ...props }) {
  return (
    <Svg
      width={size * 1.05}
      height={size}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.672 4c0 2.21-1.804 4-4.032 4-2.228 0-4.032-1.79-4.032-4S6.412 0 8.64 0c2.228 0 4.032 1.79 4.032 4zM.576 14c0-2.66 5.373-4 8.064-4s8.064 1.34 8.064 4v1c0 .55-.453 1-1.008 1H1.584c-.554 0-1.008-.45-1.008-1v-1z"
        fill={color}
      />
    </Svg>
  );
}

export default AccountIcon;
