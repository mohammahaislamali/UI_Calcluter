import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Paragraph from '../../componet/Ui/Paragraph'
import Clickable from '../../componet/HOC/Clickable'
import UiButton from '../../componet/Ui/UiButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Dtl = ({route,navigation}) => {
   let abc = route?.params?.data.item;
   const addtoCart = async () => {
    let arr = []
    let oldCartData = await AsyncStorage.getItem('CartData');
    if (oldCartData) {
        arr = JSON.parse(oldCartData);
        arr.push(abc);
        await AsyncStorage.setItem("CartData", JSON.stringify(arr));
    }
    else {
        arr = [];
        arr.push(abc);
        await AsyncStorage.setItem("CartData", JSON.stringify(arr));
    }
    navigation.navigate('Cart')
   }
   console.log('==>',abc) 
  return (
    <View style={{borderWidth:5,flex:1,borderColor:'yellow',backgroundColor:'black'}}>   
     <View style={{width:'100%',height:400,borderWidth:5,borderColor:'red',}}>
    <Image style={{width:'100%',height:390,resizeMode:'stretch',}} source={abc?.Image}/>
    </View>
    <View style={{width:'100%',height:200,justifyContent:'center',marginVertical:10,backgroundColor:'pink',}}> 
    <Paragraph size={30}> name:-{abc?.name}</Paragraph>
    <Paragraph size={30}> price:-{abc?.price}</Paragraph>
  
   <Paragraph size={30}> category:-{abc?.category}</Paragraph>

    <View style={{flexDirection:'row',borderWidth:2,width:100,marginVertical:10,marginHorizontal:10,alignItems:'center'}}>
    <Clickable style={{backgroundColor:'red'}} >
     <Text style={{fontSize:20,fontWeight:"bold",marginHorizontal:10,color:'white'}}>+</Text>
      </Clickable >
       <Text style={{fontSize:20,fontWeight:"bold",marginHorizontal:10}}>{abc.qty}</Text>
      <Clickable style={{backgroundColor:'red'}}>
      <Text style={{fontSize:20,fontWeight:"bold",marginHorizontal:10,color:'white'}}>-</Text>
        </Clickable> 
    </View>
  
    </View>
    <Clickable>
     <UiButton text='Add cad' style={{alignItems:'center'}} onPress={(e)=>addtoCart(e)}/> 
    </Clickable>
    </View>

  )
}

export default Dtl

const styles = StyleSheet.create({})
