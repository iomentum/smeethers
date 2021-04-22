import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

function Add(): FC {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24">
      <Path
        fill="#AF46AE"
        d="M22.322 10.35h-8.616V1.678C13.706.728 12.98 0 12.028 0S10.35.727 10.35 1.678v8.672H1.678c-.95 0-1.678.727-1.678 1.678s.727 1.678 1.678 1.678h8.672v8.672c0 .95.727 1.678 1.678 1.678s1.678-.727 1.678-1.678v-8.672h8.672c.95 0 1.678-.727 1.678-1.678s-.783-1.678-1.734-1.678z"></Path>
    </Svg>
  );
}

export default Add;
