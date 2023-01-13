import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../componet/Ui/Input'
import UiButton from '../../componet/Ui/UiButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Paragraph from '../../componet/Ui/Paragraph'
import colors from '../../constanst/colors'
const SingUp = ({navigation}) => {
  const[name,setname]=useState('')
  const[errorname,seterrorname]=useState('')
  const[email,setemail]=useState('')
  const[erroremail,seterroremail]=useState('')
  const[password,setpassword]=useState('')
  const[errorpasword,seterrorpassword]=useState('')
  const[number,setnumber]=useState('')
  const[errornumber,seterrornumber]=useState('') 


const validatoin =()=>{
if(name){
  seterrorname('')
}
else{
  seterrorname('name is enter')
}
if(email.includes('@gmail.com')){
seterroremail('')
}
else{
  seterroremail('email is requrer')
}
if(password){
  seterrorpassword('')
}
else{
  seterrorpassword('password is requrer')
}
if(number.length==10){

  seterrornumber('')
 }

 else{
  seterrornumber(number.length <=9  ? <Text>min  value </Text> : <Text>max value</Text>)
 }

if(name&&email.includes('@gmail.com')&&password&&number.length>=10&&number.length<=11){
  sing();
}
}
 const obj={ 
    name:name,
    email:email,
    password:password,
    number:number,
 }

 console.log('obj==>',obj)

 const sing= async()=>{
  let arr =[]
  arr.push(obj)
  await AsyncStorage.setItem('data',JSON.stringify(arr))

  navigation.navigate('Login')

 }
 
  return (
    <View>
      <Paragraph ></Paragraph>

     <Input style={{backgroundColor:name.length == 0 ? 'white' : 'red',}}  onchange={(e)=>setname(e)}  placeholder='enter the name' error={errorname} value={name}/>
      <Input 
       placeholder='enter the email' error={erroremail}/>
      <Input onchange={(e)=>setpassword(e)} placeholder='enter the password' error={errorpasword}/>
      <Input onchange={(e)=>setnumber(e)} placeholder='enter the password' error={errornumber}/>
      <UiButton onPress={validatoin}/>
    </View>
  )
}

export default SingUp

const styles = StyleSheet.create({
  aa:{
  }
})