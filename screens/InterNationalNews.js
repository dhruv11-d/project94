import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import AppHeader from '../AppHeader';
import * as WebBrowser from 'expo-web-browser';

export default class CovidNews extends Component {
  _handleOpenWithWebBrowser = ()=>{
    WebBrowser.openBrowserAsync('https://news.google.co.in/');
  };

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>

          <ImageBackground style={styles.Image} source={require('../bg.jpeg')}>
            <AppHeader/>
             <Image
              style={{ width: 310, height: 180, alignSelf:'center', borderRadius: 10, marginTop: 20 }}
              source={{uri:'https://lh3.googleusercontent.com/proxy/K2mbxxv_BJoyXKjlYGJkokbwPwDmcYnYi3btTtqJLA1uXmbuZHjMC5xCzwddciH2YYb9E0KBLjZScnOBCs1oJEdbjl6UMWA'}}
            /> 
          </ImageBackground>

          <View style={styles.Text}>
           World news or international news or even foreign coverage is the news media jargon for news from abroad, about a country or a global subject. ... The first news agencies were then founded, like AFP (France), Reuters (UK), Wolff (currently DPA, Germany) and the AP (US)...
          </View>

         <TouchableOpacity
            style={[styles.button1, { backgroundColor: '#204A86' }]}
             onPress={()=>{this.props.navigation.navigate('HomeScreen')}}>
            <Text style={styles.buttonText1}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#204A86' }]}
            onPress={this._handleOpenWithWebBrowser}>
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
          </View> 
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
  },
  Image: {
    width: 333, 
    height: 668
  },
  Text: {
    marginTop: -370,
    marginBottom: 10,
    margin: 4,
    fontSize: 22,
    fontWeight: 'bold',
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: 'lightblue'
  },
  button: {
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 20,
    marginTop: -60,
    marginLeft: 170,
    width: 160,
    height: 60,
  },
  button1: {
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 20,
    marginRight: 170,
    marginTop: 50,
    width: 150,
    height: 60,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonText1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23
  },
});