import React from "react";

import { StyleSheet, Text, View, Button, FlatList } from "react-native";
 

function aleatorio() {
  let numero = [];
  function geraAleatorio() {
    let num = (Math.random() * 60 + 1).toFixed();
    return num;
  }
  for (let i = 0; i < 6; i++) {
    let aleatorio = geraAleatorio();
    numero.push(aleatorio);
  }
  let arrayUnica = numero.filter(function (atual, ultimo) {
    return numero.indexOf(atual) == ultimo;
  });

  while (arrayUnica.length < 6) {
    arrayUnica.push(geraAleatorio());
  }
  return arrayUnica;
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outPut: aleatorio(),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>1º número:  {this.state.outPut[0]}</Text>
        <Text>2º número:  {this.state.outPut[1]}</Text>
        <Text>3º número:  {this.state.outPut[2]}</Text>
        <Text>4º número:  {this.state.outPut[3]}</Text>
        <Text>5º número:  {this.state.outPut[4]}</Text>
        <Text>6º número:  {this.state.outPut[5]}</Text>
        <Button
          title="megasena"
          onPress={() => {
            this.setState({
              outPut: (this.outPut = aleatorio()),
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
