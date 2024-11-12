import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Resultado from "./Resultado";
import styles from "./style";

export default function Form() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [mensagemImc, setMensagemImc] = useState("Preencha o peso e a altura");
  const [textButton, setTextButton] = useState("Calcular");

  function calcular() {
    return setImc((peso / (altura * altura)).toFixed(2));
  }

  function validationImc() {
    if (peso > 0 && altura > 0) {
      calcular();
      setPeso("");
      setAltura("");
      setMensagemImc("O seu valor de IMC é:");
      setTextButton("Novo Cálculo");
      return;
    }
    setImc(0);
    setTextButton("Calcular");
    setMensagemImc("Preencha o peso e a altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 1.68"
          keyboardType="numeric"
          onChangeText={(text) => setAltura(text)}
          value={altura.toString()}
        />

        <Text style={styles.label}> Peso</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 55"
          keyboardType="numeric"
          onChangeText={(text) => setPeso(text)}
          value={peso.toString()}
        />
        <TouchableOpacity style={styles.calculator} onPress={validationImc}>
          <Text style={styles.calculatorText}>{textButton} </Text>
        </TouchableOpacity>
      </View>
      <Resultado resultadoImc={imc} mensagemResultado={mensagemImc} />
    </View>
  );
}
