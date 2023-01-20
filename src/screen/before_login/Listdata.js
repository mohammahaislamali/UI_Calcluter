import { StyleSheet, Text, View,FlatList,Image,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Clickable from '../../componet/HOC/Clickable'
import Paragraph from '../../componet/Ui/Paragraph'
import Card from '../../componet/Ui/Card'
import { data } from './Array'
import Icon from '../../componet/Ui/Icon'
import icons from '../../constanst/icons'
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Listdata = ({navigation}) => {
const[listdataaa,setlistdataaa]=useState(data)
const [searchData, setsearchData] = useState("")
const [error, seterror] = useState("")
const getListData =async()=>{
  let listDataa = await AsyncStorage.getItem("ListData")
  if(listDataa){
    setlistdataaa(JSON.parse(listdataaa))
  }
  else{
    listdataaa(listdataaa);
  }
}
useEffect(()=>{
  getListData();
}, [useIsFocused()])

// faveroute 
   
const iconreset=async(index)=>{
  let abc=[...listdataaa];
  abc[index].icon=abc[index].icon==icons.dil?icons.heart:icons.dil;

 setlistdataaa(abc);
  await AsyncStorage.setItem("ListData",JSON.stringify(listdataaa))
navigation.navigate('Faverate')
};


      //  + -
       const Addquinty =(index)=>{
        let arr =[...listdataaa];
      if( Number(arr[index].qty) <10){
         arr[index].qty =  Number(arr[index].qty) + 1;
        setlistdataaa(arr)
        }
     
       }
       const Subquinty =(index)=>{
         let arr =[...listdataaa];
         if( Number(arr[index].qty) >1){
         arr[index].qty =  Number(arr[index].qty) - 1;
         setlistdataaa(arr)
         }
      }
      // search
      const search=()=>{
        let filterData = listdataaa.filter((item,index)=>{
          return item.name == searchData;
        })
        setlistdataaa(filterData);
        seterror("");
        if(filterData.length ==0){
          setlistdataaa(data);
         seterror("Pleace Enter the Valid price")
        }
        
     }

  return (
      <View>
      <Clickable style={{backgroundColor:'red',width:120,height:40,alignSelf:'center',marginVertical:10,}}>
      <Paragraph size={30} style={{color:'white',alignSelf:'center'}}>Listdata</Paragraph>
      </Clickable>
      <View style={{backgroundColor:"grey",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <TextInput placeholder='Enter the Product' onChangeText={(e)=>{setsearchData(e)}}/>
        <Clickable onPress={(e)=>search(e)}>
           <Image source={icons.home} style={{width:30,height:30}}/>
          
       </Clickable>
  
      </View>
   
    <View>
     
       <FlatList
        data={listdataaa}
       renderItem={({item,index})=>{
       return(
        <Clickable onPress={()=>navigation.navigate('Dtl',{data:{item,index}})}>
         <Card> 
          <View style={{flexDirection:'row',borderWidth:1}}>      
         <View style={{width:'40%',height:200,borderWidth:1,backgroundColor:'white',elevation:10,margin:2}}>  
          <Image style={{height:190,width:'100%',alignSelf:'center', resizeMode:"stretch"}} source={item?.Image}/>
         </View>
          <View style={{width:'60%',backgroundColor:'white',elevation:10,margin:2,borderWidth:1,justifyContent:'center'}}>   
          <Paragraph size={30}>name:-{item?.name}</Paragraph>
         <Paragraph size={30}>price:-{item?.price}</Paragraph>
         <Paragraph size={22}>category:-{item?.category}</Paragraph>
         <View style={{flexDirection:'row',borderWidth:1,borderColor:'red',marginHorizontal:10,marginVertical:10,width:120}}>
         <Clickable onPress={()=>iconreset(index)} activeOpacity={0.1}>
          <Image source={item.icon} style={{ width:25,height:25}} /> 
          </Clickable>
         <Clickable style={{backgroundColor:'red'}}  onPress={()=>Addquinty(index)}>
         <Paragraph style={{fontSize:20,fontWeight:"bold",marginHorizontal:10,color:'white'}}>+</Paragraph>
          </Clickable >
          <Paragraph style={{fontSize:20,fontWeight:"bold",marginHorizontal:10}}>{item.qty}</Paragraph>
             <Clickable style={{backgroundColor:'red'}} onPress={()=>Subquinty(index)}>
             <Paragraph style={{fontSize:20,fontWeight:"bold",marginHorizontal:10,color:'white'}}>-</Paragraph>
        </Clickable>
        </View>               
         </View>        
         </View>
         </Card>
          
      </Clickable>
       )
        }}
       />

    </View>
    </View>
   
  )
}

  export default Listdata

const styles = StyleSheet.create({})