import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useState } from 'react'
import Input from '../../componet/Ui/Input'
import UiButton from '../../componet/Ui/UiButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Paragraph from '../../componet/Ui/Paragraph'

const Login = ({navigation}) => {
   const[dataa,setdataa]=useState([])
  
  // const[password,setpassword]=useState('')  
  const getitem =async()=>{
let abc=  await  AsyncStorage.getItem('data')
 let aaa= JSON.parse(abc)
setdataa(aaa)

console.log('abc==>',aaa)
  }


  return (
    <View>
      <UiButton onPress={getitem}/>
      <FlatList
      data={dataa}
      renderItem={({item,index})=>{
         return(
   <View style={{height:130,width:300,borderWidth:2}}>
   <Paragraph style={{fontSize:20,margin:1}}> name:{item?.name}</Paragraph>
   <Paragraph style={{fontSize:20,margin:1}}> email:{item?.email}</Paragraph>
<Paragraph style={{fontSize:20,margin:1}}>passwors:{item?.password}</Paragraph> 
<Paragraph style={{fontSize:20,margin:1}}>number:{item?.number}</Paragraph>

</View>
         )
  

       }}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})