import React, {useRef} from 'react';
import type {Node} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

// import LoginScreen from './screens/login-screen/login-screen';
// import SplashScreen from './screens/splash-screen/splash-screen';

import {RootNavigator} from './navigation';

const App: () => Node = () => {
  const navigationRef = useRef<NavigationContainerRef>();

  return (
    // <LoginScreen />
    // <SplashScreen />
    <RootNavigator ref={navigationRef} />
  );
};

export default App;
