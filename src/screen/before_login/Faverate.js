import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import colors from '../../constanst/colors'
import Paragraph from '../../componet/Ui/Paragraph'
import ViewContainer from '../../componet/HOC/ViewContainer'
import icons from '../../constanst/icons'
const Faverate = () => {
  
const[favdata,setfavdata]=useState('') 
 
const getdata =async()=>{

let data =await AsyncStorage.getItem('ListData')

let newdat = JSON.parse(data)
let abc=newdat.filter((item,index)=>{
  return item.icon == icons.heart;
})
setfavdata(abc);
console.log('data==>',data)
}

useEffect(()=>{
getdata()
},[useIsFocused()])
  return (
    <View>
   <FlatList
   data={favdata}
   renderItem={({item,index})=>{
    return(
      <ViewContainer style={styles.flex}>
      <Image style={styles.Image} source={item.Image}/>
      <View>
      <Text style={{width:200}}>name:-{item.name}</Text>
      <Text>price:-{item.price}</Text>
      <Text>category
        ;-{item.category}</Text>
     
      </View>
      </ViewContainer>
    )
   }}
   /> 
  
 

    </View>
  )
}

export default Faverate

const styles = StyleSheet.create({
  nofound:{
    textAlign:'center',
    justifyContent:'center',
    color:colors.green,

  },
  textview:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
    Image:{
    height:100,
    width:100,
    resizeMode:'contain',
    marginHorizontal:10
      },
      flex:{
        flexDirection:'row',
        alignItems:"center",
        backgroundColor:'white',
        marginVertical:10,
        marginHorizontal:10,
        borderRadius:10,
       elevation:10
      },


})