import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>News</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#3472BF'
  },
  text:{
    color: 'white',
    padding: 10,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;