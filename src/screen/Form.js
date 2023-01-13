import { StyleSheet,  View,TouchableOpacity,Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../navigatoin/Input'
import Butoon from '../navigatoin/Butoon'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Form = ({navigation,route}) => {
  const edit = route?.params?.data
  console.log("==>edit",edit)
  const[name, setname]=useState('')
  const[nameerr, setnameerr]=useState('')
  const [email, setemail]=useState('')
  const [emailerr, setemailerr]=useState('')
  const [password,setpassword]=useState('')
  const [passworderr,setpassworderr]=useState('')
  const [pincode,setpincode]=useState('')
  const [pincodeerr,setpincodeerr]=useState('')
  const [addersh,setaddersh]=useState('')
  const [addersherr,setadderserr]=useState('')
  let obj={
  name:name,
  email:email,
  password:password,
  pincode:pincode,
  addersh:addersh
  }
  console.log(obj)
  let setdata = async() => {
   let arr = [];
   let old = await AsyncStorage.getItem('ikm')
    if(old){
      if(edit){
     let newarr = JSON.parse(old)
     newarr[edit?.index]=obj
     arr=newarr
      }
     else{
      arr=JSON.parse(old)
      arr.push(obj);
     }
    }
    else{
      arr.push(obj);
    }

    
   await AsyncStorage.setItem('ikm',JSON.stringify(arr))

  }
useEffect(()=>{
 console.log("===>edit",edit)
 if(edit){
 setname(edit?.item?.name)
 setemail(edit?.item?.email)
setpassword(edit?.item?.password)
 setpincode(edit?.item?.pincode)
 setaddersh(edit?.item?.addersh)
 }
 console.log('==>name',edit?.item?.name)
},[]) 
const invalid =()=>{
  if(name){
    setnameerr('')
  }
  else{
    setnameerr('Name is requred')
  }
  if(email.includes('@gmail.com')){
    setemailerr('')
  }
  else{
    setemailerr('email is requred')
  }
  if(password.length >= 8 && password.length <=15 ){
    setpassworderr('')
  }
  else{
    setpassworderr('enter the 8 digit password')
  }
  if(pincode.length >= 6 && pincode.length <=10 ){
    setpincodeerr('')
  }
  else{
    setpincodeerr('enter 6 digit pincode number')
  }
  if(addersh){
    setadderserr('')
  }
  else{
    setadderserr('enter Addresh')
  }
  if(name && email.includes('@gmail.com') && password.length >= 8 && password.length <=15   && pincode.length == 6 && addersh){
    setdata()
  }
  
}
  
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
      <View >
        <Text style={{color:"white",fontSize:20}}>name:{name}</Text>
        <Text style={{color:"white",fontSize:20}}>email:{email}</Text>
        <Text style={{color:"white",fontSize:20}}>password:{password}</Text>
        <Text style={{color:"white",fontSize:20}}>pincode:{pincode}</Text>
     <Text style={{color:"white",fontSize:20}}>addersh:{addersh}</Text>
      <Input onchange={(xt)=>setname(xt)} value={name} title='enter the name'title2='blue' error={nameerr}/>
      <Input onchange={(xt)=>setemail(xt)} value={email} title2='blue' title="enter the email" error={emailerr}/>
      <Input onchange={(xt)=>setpassword(xt)} value={password} title2='blue'  title="enter the password" error={passworderr}/>
      <Input onchange={(xt)=>setpincode(xt)} value={pincode} title2='blue'  title="enter the  pincode" error={pincodeerr}/>
      <Input onchange={(xt)=>setaddersh(xt)} value={addersh} title2='blue'  title="enter the addersh" error={addersherr} />
    
      </View>
      <View style={{flexDirection:"row" ,alignSelf:"center"}}>
     
     
     <Butoon  style={{margin:5}} onp={()=> invalid()} btn={edit?'uplode':'save' }/>
     <Butoon style={{margin:5}} btn="back" onp={()=>navigation.goBack('')}/>
  </View>
    </View>
  
  )
}

export default Form

const styles = StyleSheet.create({
  
  TouchableOpacity: {
         backgroundColor: 'red',
         height: 50,
         width: 100,
         borderRadius: 20,
         alignSelf: 'center',
       },
       submit: {
         fontSize: 20,
         color: 'black',
         textAlign: 'center',
       marginVertical: 10,
       }

})