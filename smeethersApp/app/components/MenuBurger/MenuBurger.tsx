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

  const tx = (text: string) => translate(text);
  const navigation = useNavigation();

  const goToLogin = () => navigation.navigate('login');

  return (
    <ContainerView>
      <BlackCrossTouchableOpacity onPress={() => goToLogin()}>
        <BlacCross />
      </BlackCrossTouchableOpacity>
      <MenuContainer>
        <MenuText onPress={() => console.log('goToProfile')}>
          {tx('menuBurger.profile')}
        </MenuText>
        <>
          <MenuText onPress={() => console.log('goToCalendar')} isNoMargin>
            {tx('menuBurger.calendar')}
          </MenuText>
          <SmallText>{tx('menuBurger.googleCalendar')}</SmallText>
        </>
        <MenuText onPress={() => console.log('goToMyFriends')}>
          {tx('menuBurger.myFriends')}
        </MenuText>
        <MenuText onPress={() => console.log('goTozbi')}>
          {tx('menuBurger.settings')}
        </MenuText>
      </MenuContainer>
      <DisconnectText onPress={() => goToLogin()}>
        {tx('menuBurger.logout')}
      </DisconnectText>
    </ContainerView>
  );
};

export default MenuBurger;
