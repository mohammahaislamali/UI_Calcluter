// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import Form from '../screen/Form';
  import Formlist from '../screen/Formlist';
import Login from '../screen/Login';
import Submit from '../screen/Submit';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
const Stack = createNativeStackNavigator();
const Routes =()=> {
//  const[usertoken,setusertoken]=useState('') 
 const  navigate=React.useRef(null)
 console.log("====>",navigate.current)
 const gettoken = async()=>{
 let tokan = await AsyncStorage.getItem('Token')
 if(tokan){
  navigate.current.reset({
index:0,
routes:[{name:'Formlist'}]    
  })
 }
 
 } 
  React.useEffect(()=>{
    gettoken()
  },
  [])

  setTimeout(()=>{
  SplashScreen.hide()
                       // splashScreen
  },1000)

  
  return (
    <NavigationContainer ref={navigate}>
      <Stack.Navigator initialRouteName='Login'>
           <Stack.Screen name="Login" component={Login} />      
          <Stack.Screen name="Submit" component={Submit} />    
            <Stack.Screen name="Form" component={Form} />    
           <Stack.Screen name="Formlist" component={Formlist} />    

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;