import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"
import { StatusBar } from "expo-status-bar"

function Header(){

    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image style={styles.logo} source={require('../assets/Logo.png')}></Image>
            <Text style={styles.text}>Recuperação de Senha</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#011E83",
    alignItems: 'center'
  },
  logo: {
    width: 181,
    height: 39,
    marginTop: 65,
    marginBottom: 20,
    marginHorizontal: 73
  },
  text: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24.2
  },
})

export default Header