import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function HomeIcon({ size = 18, color = '#78AC43', ...props }) {
  return (
    <Svg
      width={size * 1.05}
      height={size}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.342 16.328v-5h4.032v5c0 .55.454 1 1.008 1h3.024c.554 0 1.008-.45 1.008-1v-7h1.713c.464 0 .686-.57.333-.87L10.033.927a1.022 1.022 0 00-1.35 0L.255 8.457c-.343.3-.131.87.332.87h1.714v7c0 .55.453 1 1.008 1h3.024c.554 0 1.008-.45 1.008-1z"
        fill={color}
      />
    </Svg>
  );
}

export default HomeIcon;
