import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import colors from '../constanst/colors';
import Icon from '../componet/Ui/Icon';
import icons from '../constanst/icons';
import Listdata from '../screen/before_login/Listdata';
import Dtl from '../screen/before_login/Dtl';
import Faverate from '../screen/before_login/Faverate';
import Cart from '../screen/before_login/Cart';
const Tab = createBottomTabNavigator();

const BottumTab=()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
       tabBarActiveTintColor:colors.grayligth,
      tabBarActiveBackgroundColor:colors.green,
     tabBarInactiveBackgroundColor:colors.green,
     tabBarHideOnKeyboard:true
      }}
    >
      <Tab.Screen
  
        name="Listdata"
        component={Listdata}
        options={{ headerShown: false,
          tabBarLabel: 'Home',
         
          tabBarIcon: ({ color, size }) => (
            <Icon  tintColor={colors.grayligth} source={icons.home} />
          ),
        }}
      />
       <Tab.Screen
        name="Dtl"
        component={Dtl}
        options={{
          headerShown: false,
          tabBarLabel: 'Category',
          tabBarIcon: ({ color, size }) => (
            <Icon tintColor={colors.grayligth} source={icons.menu} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Faverate"
        component={Faverate}
        options={{
          headerShown: false,
          tabBarLabel: 'Faverate',
          tabBarIcon: ({ color, size }) => (
            <Icon  tintColor={colors.grayligth} source={icons.heart} />
          ),
        }}
      />
      <Tab.Screen
       name="Cart"
       component={Cart}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Icon  tintColor={colors.grayligth} source={icons.cart} />
          ),
        }}
      />  
    </Tab.Navigator>
  );
}
export default BottumTab;