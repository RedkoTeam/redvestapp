import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function AccountIcon({ size = 18, color = '#78AC43', ...props }) {
  return (
    <Svg
      width={size * 1.05}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.564 7.054l1.451 1.44-4.919 4.88-3.316-3.29a1.008 1.008 0 00-1.422 0l-6.048 6.01a.99.99 0 000 1.41 1.01 1.01 0 001.422 0l5.332-5.3 3.316 3.29a1.01 1.01 0 001.422 0l5.634-5.58 1.452 1.44c.312.31.857.09.857-.35v-4.3a.483.483 0 00-.494-.5h-4.325c-.453 0-.675.54-.362.85z"
        fill={color}
      />
    </Svg>
  );
}

export default AccountIcon;
