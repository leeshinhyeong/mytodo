import React from 'react';
import { StyleSheet, Text, View ,Dimensions, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons"
export default function Listitem({deleteItem, name, isComplete, changeComplete}) {
  return (
    <View style = {styles.listitembox} >
        <View style = {styles.makerow}>
            <TouchableOpacity onPress={changeComplete}>
                <AntDesign name={isComplete? "checkcircle":'frowno'} size = {20} style = {styles.checkmargin} />
            </TouchableOpacity>
        <Text style = {styles.item}>{name}</Text>
        </View>
        <TouchableOpacity onPress={deleteItem}>
            <AntDesign name="close" size={20} />
        </TouchableOpacity>
    </View>
  );
}


const { width,height } = Dimensions.get('window')

const styles = StyleSheet.create({
    listitembox: {
      borderBottomWidth:1,
      padding:5,
      marginTop:20,
      width: width-100,
      flexDirection : 'row',
      alignItems:"center",
      justifyContent:'space-between',
    },
    item:{
        fontSize:20,
        fontWeight:'bold',
    },
    makerow:{
        flexDirection:'row'
    },
    checkmargin:{
        marginRight:10, 
    }
  });
  