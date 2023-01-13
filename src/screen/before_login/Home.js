import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../../componet/Ui/Card'
import Input from '../../componet/Ui/Input'
import ScrollContainer from '../../componet/HOC/ScrollContainer'
import ViewContainer from '../../componet/HOC/ViewContainer'
import Clickable from '../../componet/HOC/Clickable'
import UiButton from '../../componet/Ui/UiButton'
import colors from '../../constanst/colors'
const Home = () => {
  return (
    <ScrollContainer>
      <ViewContainer>
       <Card style={styles.card}>
       <Input placeholder='' style={styles.input}/>
      

     
       <View style={styles.box}>
        
     <Clickable><UiButton style={styles.bottan} text='AC'  /></Clickable>
     <Clickable><UiButton  style={styles.bottan} UiButton text='+/-'/></Clickable>
     <Clickable><UiButton style={styles.bottan} UiButton text='%'/></Clickable>
     <Clickable><UiButton  style={styles.bottan} UiButton text='/'/></Clickable>
     </View>
     <View  style={styles.box}>
        
        <Clickable><UiButton  style={styles.bottan} text='7'/></Clickable>
        <Clickable><UiButton  style={styles.bottan} UiButton text='8'/></Clickable>
        <Clickable><UiButton  style={styles.bottan} UiButton text='9'/></Clickable>
        <Clickable><UiButton  style={styles.bottan}  UiButton text='*'/></Clickable>
        </View>

        <View  style={styles.box}>
        
        <Clickable><UiButton  style={styles.bottan} text='4'/></Clickable>
        <Clickable><UiButton  style={styles.bottan} UiButton text='5'/></Clickable>
        <Clickable><UiButton  style={styles.bottan} UiButton text='6'/></Clickable>
        <Clickable><UiButton  style={styles.bottan}  UiButton text='-'/></Clickable>
        </View>

        <View  style={styles.box}>
        
        <Clickable><UiButton  style={styles.bottan} text='1'/></Clickable>
        <Clickable><UiButton  style={styles.bottan} UiButton text='2'/></Clickable>
        <Clickable><UiButton  style={styles.bottan} UiButton text='3'/></Clickable>
        <Clickable><UiButton  style={styles.bottan} UiButton text='+'/></Clickable>
        </View>
        <View  style={styles.box}>
        
        <Clickable><UiButton   style={styles.bottanend} text='0'/></Clickable>
        <Clickable><UiButton  style={styles.bottan} UiButton text='.'/></Clickable>
        <Clickable><UiButton  style={styles.bottan} UiButton text='='/></Clickable>
        
        </View>
        </Card>
    </ViewContainer>
    </ScrollContainer>
  )
}

export default Home

const styles = StyleSheet.create({
  input:{
  padding:50,textAlign:'right',
  width:'100%',alignSelf:'center',
  fontSize:30,
  backgroundColor:colors.white
  
  },
  card:{
   borderWidth:2,
   backgroundColor:colors.grayligth,
   width:'95%',
   alignSelf:'center'

  },
  box:{
    flexDirection:'row',
    justifyContent:'center',
   width:'100%',
    backgroundColor:colors.red,

       
  },
  bottan:{
    
   width:70,
   alignItems:'center',
   backgroundColor:colors.black,
   borderRadius:10,marginVertical:5,
   marginHorizontal:5  },
   bottanend:{
    width:150,
    alignItems:'center',
    backgroundColor:colors.black,
    borderRadius:10,marginVertical:5,
    marginHorizontal:5  },
   



})