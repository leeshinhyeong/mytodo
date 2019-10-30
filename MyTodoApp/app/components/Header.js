import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { red } from 'ansi-colors';

export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>My To Do App</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    headercontainer: {
      marginTop:50,
      marginBottom:50,
    },
    headertext: {
        fontSize: 25,
        fontWeight:'bold',
        color:'#3f4e66',
        color:'red'

    }

  });
  