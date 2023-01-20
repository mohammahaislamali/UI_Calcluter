import React from 'react'
import colors from '../constanst/colors';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack'
const commonOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: colors.white,
    },
     headerShadowVisible: false,
     cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
     ,
     headerShown: false
};


const StackNavigator = () => {
    const { Navigator, Screen } = createStackNavigator();

    

    return (
        <Navigator
            screenOptions={{
                // your stack style
            }}
          initialRouteName='BottumTab' >
               <Screen
                name='BottumTab'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../navigatoin/BottumTab').default}
            
                options={{
                    ...commonOptions
                }} 
            />
             <Screen
                name='Listdata'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/before_login/Listdata').default}
            
                options={{
                    ...commonOptions
                }} 
            />
                <Screen
                name='Dtl'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/before_login/Dtl').default}
            
                options={{
                    ...commonOptions
                }} 
            />
          <Screen
                name='Faverate'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/before_login/Faverate').default}
            
                options={{
                    ...commonOptions
                }} 
            />
              <Screen
                name='Cart'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/before_login/Cart').default}
            
                options={{
                    ...commonOptions
                }} 
            />
   
        </Navigator>
    )
}

export default StackNavigator