import React from 'react';
import Screen from '../../components/Screen/Screen';

import {HeaderBox, PendingReplyText} from './home-screen.styles';

import BurgerMenu from '../../components/Svg/BurgerMenu';
import CharacterLogo from '../../components/Svg/CharacterLogo';
import Add from '../../components/Svg/Add';

const HomeScreen = () => {
  return (
    <Screen>
      <HeaderBox>
        <BurgerMenu />
        <CharacterLogo />
        <Add />
      </HeaderBox>

      <PendingReplyText text="Monsieur Rabire, vous avez 2 demandes en attente de réponse" />
    </Screen>
  );
};

export default HomeScreen;
