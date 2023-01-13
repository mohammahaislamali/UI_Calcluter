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
          initialRouteName='SingUp' >
          
          <Screen
                name='Home'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/before_login/Home').default}
            
                options={{
                    ...commonOptions
                }} 
            />
         
              <Screen
                name='Login'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/after_login/Login').default}
            
                options={{
                    ...commonOptions
                }} 
            />  
                 <Screen
                name='SingUp'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screen/after_login/SingUp').default}
            
                options={{
                    ...commonOptions
                }} 
            />
          
             
        
        </Navigator>
    )
}

export default StackNavigator