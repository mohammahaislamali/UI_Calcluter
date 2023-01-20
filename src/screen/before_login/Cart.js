import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ViewContainer from '../../componet/HOC/ViewContainer'
const Cart = () => {
    const [CartListData, setCartListData] = useState([])
    const getCartData = async () => {
        let data = await AsyncStorage.getItem('CartData');
        let cart = JSON.parse(data);
        console.log('====>', cart)
        setCartListData(cart)
    }
    useEffect(() => {
        getCartData()
    }, [useIsFocused()])
    const renderItem = ({ item, index }) => {
        return (
         
            
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
    }
    return (
        <View>
            <FlatList
                renderItem={renderItem}
                data={CartListData}
            />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
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