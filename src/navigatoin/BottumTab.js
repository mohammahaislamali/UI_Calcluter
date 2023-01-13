import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import colors from '../constanst/colors';
import Icon from '../componet/Ui/Icon';
import icons from '../constanst/icons';
import Home from '../screen/before_login/Home';
import Cart from '../screen/before_login/Cart';
import Favourite from '../screen/before_login/Favourite';
import Category from '../screen/before_login/Category'
const Tab = createBottomTabNavigator();

const BottumTab=()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
       tabBarActiveTintColor:colors.grayligth,
      tabBarActiveBackgroundColor:colors.green,
     tabBarInactiveBackgroundColor:colors.green,
     
      }}
    >
      <Tab.Screen
  
        name="Home"
        component={Home}
        options={{ headerShown: false,
          tabBarLabel: 'Home',
         
          tabBarIcon: ({ color, size }) => (
            <Icon  tintColor={colors.grayligth} source={icons.home} />
          ),
        }}
      />
       <Tab.Screen
        name="Category"
        component={Category}
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
        name="Favourite"
        component={Favourite}
        options={{
          headerShown: false,
          tabBarLabel: 'Favorite',
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
            <Icon  tintColor={colors.grayligth} source={icons.shoppingbag} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}
export default BottumTab;