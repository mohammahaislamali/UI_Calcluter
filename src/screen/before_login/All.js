import { StyleSheet, Text, View,FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useIsFocused } from '@react-navigation/native'
import { data } from '../backend/data'
import { IconPath } from '../assete'
import AsyncStorage from '@react-native-async-storage/async-storage'
const ListData = ({navigation}) => {
  const[LikeData,setLikeData]=useState();
  const [searchData, setsearchData] = useState("")
  const [error, seterror] = useState("")
  console.log("===========>",navigation);
  const iconreset=async(index)=>{
    let abc=[...LikeData];
    abc[index].icon=abc[index].icon==IconPath.iconRed?IconPath.iconblank:IconPath.iconRed;

    setLikeData(abc);
    await AsyncStorage.setItem("ListData",JSON.stringify(LikeData))





  };
  const Plusquantity =(index)=>{
   let abc=[...LikeData];
   if(Number(abc[index].cont)<10){
      abc[index].cont= Number (abc[index].cont)+1;
      setLikeData(abc)  
   }
  }
  const Lessquantity=(index)=>{
    let abc =[...LikeData];
    if(Number(abc[index].cont)>1){
     abc[index].cont=Number(abc[index].cont)-1;
     setLikeData(abc)
   }
  }
  const getListData =async()=>{
      let listDataa = await AsyncStorage.getItem("ListData")
      if(listDataa){
         setLikeData(JSON.parse(listDataa))
      }
      else{
        setLikeData(data);
      }
  }
    useEffect(() => {
      getListData();
    }, [useIsFocused()])
    

  const search=(e)=>{
    
     let filterData = LikeData.filter((item,index)=>{
       return item.price == e;
     })
     setLikeData(filterData);
     seterror("");
     if(filterData.length ==0){
      setLikeData(data);
      seterror("s Enter the Valid price")
     }
     
  }
  
    const renderItem =({item,index})=>{
      
       console.log("===========>",item)
       return(
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Details',{data:{item}})}>
        <View style={[styles.cardContainer,{backgroundColor:"skyblue"}]}>
           <View style={styles.imageContainer}>
                 <Image source={{uri:item.image}} style={{width: 95, height: 95}} resizeMode="cover"/>
           </View>
           <View style={styles.textContainer}>
             <Text style={styles.textTitle}>Title :-{item.title}</Text>
             <Text style={styles.textTitle}>Price :-{item.price}$</Text>
             <Text style={[styles.textTitle,{fontSize:10}]}>Description :-{item.description}</Text>
             <Text style={styles.textTitle}>Category :-{item.category}</Text>

             <View style={{flexDirection:'row'}}>
             <TouchableOpacity onPress={()=>iconreset(index)}>
             <Image source={item.icon} style={{width:25,height:25}}/>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>Plusquantity(index)}>
              <Text style={{fontSize:20,color:'black',marginHorizontal:10}}>+</Text>
             </TouchableOpacity>

              <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:10}}>{item.cont}</Text>
  
             <TouchableOpacity onPress={()=>Lessquantity(index)}>
              <Text style={{fontSize:20, color:'black',fontWeight:'bold',marginHorizontal:10}}>-</Text>
             </TouchableOpacity>
             </View>  
           </View>
        </View>
        </TouchableOpacity>
       )
    }
  return (
    <View>
      <View style={{backgroundColor:"grey",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <TextInput placeholder='Enter the Product' onChangeText={(e)=>{search(e)}}/>
        <TouchableOpacity>
           <Image source={IconPath.searchIcon} style={{width:30,height:30}}/>
           </TouchableOpacity>
  
      </View>
      <Text style={{color:'red',fontSize:15}}>{error}</Text>
        <FlatList
        renderItem={renderItem}
        data={LikeData}
        />
    </View>
  )
}

export default ListData

const styles = StyleSheet.create({
    cardContainer:{
    //  borderWidth:2,
     borderColor:"red",
    backgroundColor:"#ffff",
    margin:5,
    borderRadius:10,
    elevation:10,
     height:300,
     width:383,
     flexDirection:"row",
     justifyContent:"space-around",
     alignItems:"center"
    },
    imageContainer:{
        width:100,
        height:100,
        // borderColor:"blue",
        // borderWidth:2
    },
    textContainer:{
        width:250,
        height:250,
        padding:0
        // borderColor:"blue",
        // borderWidth:2
    },
    textTitle:{
      fontWeight:"bold",
      fontSize:13,
      margin:5,
      color:"black"

    }
})
