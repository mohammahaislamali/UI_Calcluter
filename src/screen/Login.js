import {StyleSheet, Text,Image, View} from 'react-native';
import React, { useState } from 'react';
import Butoon from '../navigatoin/Butoon';
import Input from '../navigatoin/Input';
import ImagePath from '../ImagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation,route}) => {
  // let data=route?.params?.abc
  // value or invalide//  //  //input  / // / //
  const [email,setemail]=useState('') 
   const [emailerror,setemailerror]=useState('') 
  const  [password,setpassword]=useState('')
   const [passworderror,setpassworederror]=useState('')  
 
   const invalidinput=({navigation})=>{
    
   if(email.includes('@gmail.com')){
     setemailerror('') 
   }
 
   else{
    setemailerror('enter the valide email ')
  }
   if(password.length>=8 && password.length<=20){
     setpassworederror('')
   }
   else{
     setpassworederror('enter the valide password')
   }
 if(email.includes('@gmail.com')&&password.length==8){
  login()
 }
 navigation.navigate('Formlist')

 }

 

 // tokan...// tokan... login......
  let tokan= 'demo token'
  const login =async()=>{
  await AsyncStorage.setItem('Token',tokan)
    navigation.reset({
      index:0,
      routes:[{name:'Formlist'}]
    })
    
  }
  return (
    <View style={styles.mainbox}>
      <View>
        <Text style={styles.txt}>LOGIN</Text>
      </View>
      <View style={{marginHorizontal: 10, marginVertical: 20}}>
      
        
        <Input  onchange={(e)=>setemail(e)} title2="black" title="enter the email" error={emailerror}  />
        <View>
        <Input  onchange={(e)=>setpassword(e)} title2="black" title="enter the password" error={passworderror} />
        <Text style={styles.txtpassword}>Forgot possword?</Text>
        </View>
        <View>
        <Butoon
          onp=  {invalidinput}
          style={{width: 120, marginVertical: 20}}
          btn="Login"
        />
        {/* <Butoon onp={()=>navigation.navigate('Submit')}/> */}
        <View>
        {/* <Text>Don't have an account ? </Text> */}
      
        </View>
        </View>

      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainbox: {
    height: 500,
    width: '80%',
    backgroundColor: 'blue',
    alignSelf: 'center',
    margin: 50,
    borderRadius: 20,
  },
  txt: {
    fontSize: 50,
    color: 'white',
    marginHorizontal: 20,
  },
  txtpassword:{
color:'white',textAlign:'right',marginHorizontal:10,fontSize:17

  },
});
