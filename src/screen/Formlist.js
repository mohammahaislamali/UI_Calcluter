import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Butoon from '../navigatoin/Butoon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native'

const Formlist = ({navigation}) => {
 const [name, setname]= useState('');
const[boy,setboy] = useState([]);
console.log("==>name",name)
const get = async()=>{
let name = await AsyncStorage.getItem('ikm')
 if(name) {
  setboy(JSON.parse(name))
 }

   setname(name)
  
}

useEffect(()=>{
  get()
 },[useIsFocused()])
 const deletebtn=async(i)=>{
  let abcd=boy.filter((item,index)=>{

 return index != i

  })
  setboy(abcd)
  await AsyncStorage.setItem('ikm',JSON.stringify(abcd))
 }
const logeout=async()=>{
await AsyncStorage.clear()
setboy()
navigation.reset({
idex:0,
routes:[{name:'Login'}]
})
} 

     
 return (
  <ScrollView>  
 <View> 
  <View>
 <Butoon btn="add" style={{  marginLeft:150,marginVertical:20}} onp={()=>navigation.navigate("Form",{get})} />
 <Butoon btn="Logeout" style={{  marginLeft:150,marginVertical:20}} onp={logeout}/>
  </View>
  <View>
    <FlatList
    data={boy}
    renderItem={({item,index})=>{
  return(
    <View  style={{borderWidth:2,borderColor:'red',marginHorizontal:10,marginVertical:10}}>
    <Text style={{fontSize:30}}>name: {item?.name}</Text>
    <Text style={{fontSize:30}}>email: {item?.email}</Text>
    <Text style={{fontSize:30}}>password: {item?.password}</Text>
    <Text style={{fontSize:30}}>pincode: {item?.pincode}</Text>
    <Text style={{fontSize:30}}>addersh: {item.addersh}</Text>
    <View style={{flexDirection:'row'}}>
    <Butoon style={{marginHorizontal:10}} onp={()=>navigation.navigate('Form',{data:{item,index}})} btn='Edit'/>
    <Butoon btn='delete' onp={()=>deletebtn(index)}/>
    </View>
    </View>
  )
  
    }}
     />
   </View>

</View>
</ScrollView>
  )}
  
export default Formlist;

const styles = StyleSheet.create({
  
  
});
