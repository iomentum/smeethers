import React, {FC} from 'react';
import Svg, {Path, Defs, G, ClipPath} from 'react-native-svg';

function BurgerMenu(): FC {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="15"
      fill="none"
      viewBox="0 0 24 15">
      <G fill="#413C24" clipPath="url(#clip0)">
        <Path d="M1.678 3.357h20.644c.95 0 1.678-.728 1.678-1.679C24 .728 23.273 0 22.322 0H1.678C.728 0 0 .727 0 1.678s.727 1.679 1.678 1.679zM22.322 5.762H1.678C.728 5.762 0 6.49 0 7.441c0 .95.727 1.678 1.678 1.678h20.644c.95 0 1.678-.727 1.678-1.678s-.727-1.679-1.678-1.679zM22.322 11.524H1.678c-.95 0-1.678.728-1.678 1.679 0 .95.727 1.678 1.678 1.678h20.644c.95 0 1.678-.727 1.678-1.678s-.727-1.678-1.678-1.678z"></Path>
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Path fill="#fff" d="M0 0H24V14.881H0z"></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BurgerMenu;
