import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import AppHeader from '../AppHeader';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
      <ImageBackground style={styles.Image} source={require('../bg.jpeg')}>
        <AppHeader />
         <Image
          style={{ width: 290, height: 120, alignSelf:'center', marginTop: 20, marginLeft: 10 }}
          source={{uri:'https://www.nicepng.com/png/full/472-4725557_tv-channel-logos-ktn-news.png'}}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#204A86' }]}
          onPress={() => {
            this.props.navigation.navigate('CovidNews');
          }}>
          <Text style={styles.buttonText}>Covid News</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#204A86' }]}
          onPress={() => {
           this.props.navigation.navigate('InternationalNews');
          }}>
          <Text style={styles.buttonText}>International News</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#204A86' }]}
          onPress={() => {
            this.props.navigation.navigate('NationalNews');
          }}>
          <Text style={styles.buttonText}>National News</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#204A86' }]}
          onPress={() => {
            this.props.navigation.navigate('SportsNews');
          }}>
          <Text style={styles.buttonText}>Sports News</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Image: {
    width: 333,
    height: 668
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: 20,
    marginTop: 50,
    width: 250,
    height: 60,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
});