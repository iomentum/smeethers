import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import Screen from '../../components/Screen/Screen';

import {HeaderBox, PendingReplyText} from './home-screen.styles';

import BurgerMenu from '../../components/Svg/BurgerMenu';
import CharacterLogo from '../../components/Svg/CharacterLogo';
import Add from '../../components/Svg/Add';

const HomeScreen = () => {
  const openMenu = useCallback(() => {
    console.log('openm enu');
  }, []);

  const addMeeting = useCallback(() => {
    console.log('go to addMeeting screen');
  }, []);

  return (
    <Screen>
      <HeaderBox>
        <TouchableOpacity onPress={openMenu}>
          <BurgerMenu />
        </TouchableOpacity>
        <CharacterLogo />
        <TouchableOpacity onPress={addMeeting}>
          <Add />
        </TouchableOpacity>
      </HeaderBox>

      <PendingReplyText text="Monsieur Rabire, vous avez 2 demandes en attente de réponse" />
    </Screen>
  );
};

export default HomeScreen;
