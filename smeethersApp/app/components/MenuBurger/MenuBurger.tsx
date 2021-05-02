import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import BlacCross from '../Svg/BlackCross';
import {translate} from '../../i18n';
import {
  ContainerView,
  BlackCrossTouchableOpacity,
  MenuText,
  MenuContainer,
  DisconnectText,
  SmallText,
} from './MenuBurger.style';

interface MenuBurgerProps {}

const MenuBurger: FC<MenuBurgerProps> = props => {
  const {}: MenuBurgerProps = props;

  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <ContainerView>
      <BlackCrossTouchableOpacity onPress={() => goBack()}>
        <BlacCross />
      </BlackCrossTouchableOpacity>
      <MenuContainer>
        <MenuText
          tx={'menuBurger.profile'}
          onPress={() => console.log('goToProfile')}
        />
        <>
          <MenuText
            tx={'menuBurger.calendar'}
            onPress={() => console.log('goToCalendar')}
            isNoMargin
          />

          <SmallText tx={'menuBurger.googleCalendar'} />
        </>
        <MenuText
          tx={'menuBurger.myFriends'}
          onPress={() => console.log('goToMyFriends')}
        />
        <MenuText
          tx={'menuBurger.settings'}
          onPress={() => console.log('goTozbi')}
        />
      </MenuContainer>
      <DisconnectText tx={'menuBurger.logout'} onPress={() => goBack()} />
    </ContainerView>
  );
};

export default MenuBurger;
