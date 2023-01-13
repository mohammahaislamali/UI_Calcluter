import { AppState, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../navigatoin/Input'
import Butoon from '../navigatoin/Butoon'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Submit = ({navigation}) => {
  const[name,setname]=useState('')
  const[nameerr,setnameerr]=useState('')
  const[email,setemail]=useState('')
  const[emailerr,setemailerr]=useState('')
  const[password,setpassword]=useState('')
  const[passworderr,setpassworderr]=useState('')
  const[conformpassword,setconformpassword]=useState('')
  const[conformpassworderr,setconformpassworderr]=useState('')
  let obj={
name:name,
email:email,
password:password,
conformpassword:conformpassword
  }
 console.log("==>obj",obj)
 const singupdata=async()=>{
  let arr = [];
 await AsyncStorage.setItem('ik',JSON.stringify(arr))
 arr.push(obj)
 }
 const invalid=()=>{

 
 if(name){
   setnameerr('')
 }
 else{
  setnameerr('enter the name')
 }
 if(email.includes('@gmail.com')){
 setemailerr('')
 }
 else{
  setemailerr(email.length == 0 ? <Text>Enter your Email</Text> : <Text>Chek your Email</Text>)
 }
 if(password.length>= 8 && password.length<=15){
  setpassworderr('')
 }
 else{
  setpassworderr(password.length == 0 ? <Text>Enter your password</Text> : <Text>Chek your password</Text>)
 }
 if(conformpassword.length>=8 && conformpassword.length<=15){
  setconformpassworderr('')
 }
 else{
setconformpassworderr(conformpassword.length== 0 ? <Text>Enter the password</Text>:<Text>check the password</Text>)
 }
 if(name && email && password.length>= 8 && password.length<=15 &&conformpassword.length>=8 && conformpassword.length<=15 ) {
  navigation.goBack('')
 }
}

  return (
    <View style={{backgroundColor:"black",flex:1}}>
     <Text style={{fontSize:30,color:'white'}}>name:{name}</Text> 
     <Text style={{fontSize:30,color:'white'}}>email:{email}</Text> 
     <Text style={{fontSize:30,color:'white'}}>password:{password}</Text> 
     <Text style={{fontSize:30,color:'white'}}>conformpassword:{conformpassword}</Text> 
     
    <View>
    <Input onchange={(e)=>setname(e)} title='enter the FullName' title2='blue' error={nameerr}/>
    <Input onchange={(e)=>setemail(e)}  title2='blue' title="enter the Email" error={emailerr}/>
    <Input  onchange={(e)=>setpassword(e)} title2='blue'  title="enter the PassWord" error={passworderr}/>
    <Input secureTextEntry={true} onchange={(e)=>setconformpassword(e)} title2='blue' error={conformpassworderr} title="enter the Conform PassWord"/>
  
    </View>
    <View>
   <Butoon btn="submit" onp={invalid}/>
</View>

  </View>
  )
}

export default Submit

const styles = StyleSheet.create({})