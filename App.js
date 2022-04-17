import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { render } from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
       <Button title="Alterar texto" onPress={()=>{this.setState({contador:this.state.contador + 1})}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
