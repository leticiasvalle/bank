import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './MyButton';
import MyTextInput from './MyTextInput';
import { colors } from '../utils/colors';
import { Switch } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const Banco = () => {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [limite, setLimite] = useState(1000);
  const [selectedValue, setSelectedValue] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const resetar = () => {
    setNome('');
    setIdade('');
    setLimite(1000);
    setIsSwitchOn(false);
    setSelectedValue('');
  }

  const alerta = () => {
    if(nome && idade > 0 ){
      alert("Parabéns!\nSua conta foi criada com sucesso!\n\nNome: " + nome + "\nIdade: " + idade + "\nGênero: " + selectedValue + "\nLimite: R$ " + limite)
    }else{
      alert("Insira os dados corretamente!")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>L8 Bank</Text>
      <Text style={styles.subText}>Faça seu Cadastro</Text>
      <View style={styles.viewTextInput}>
        <MyTextInput
            texto="Seu Nome"
            value={nome}
            onChangeText={nome => setNome(nome)}>
        </MyTextInput>
        <MyTextInput
            texto="Sua Idade"
            value={idade}
            onChangeText={idade => setIdade(idade)}>
        </MyTextInput>
      </View>
      <View>
        <Picker style={styles.picker}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                <Picker.Item label="--- Selecione seu Gênero ---" value="--- Selecione seu Gênero ---" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
        </Picker>
      </View>
      <View>
        <Text style={styles.textSlider}>Seu Limite: {limite}</Text>
        <Slider style={styles.slider}
          value={limite}
          onValueChange={limite => limite ? setLimite(parseInt(limite)) : setLimite(limite + 100)}
          minimumValue={1000}
          maximumValue={10000}
          minimumTrackTintColor="#F9AA33"
          maximumTrackTintColor="#4A6572"
          thumbTintColor="#344955">
        </Slider>
      </View>
      <View style={styles.viewSwitch}>
        <Text style={styles.textStudent}>Estudante:</Text>
        <Switch style={styles.switch} value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      <MyButton
            texto="Abrir Conta!"
            onPress={alerta}
            color={colors.yellow}>
      </MyButton>
      <MyButton
            texto="Resetar"
            onPress={resetar}
            color={colors.red}>
      </MyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 32,
    fontFamily: 'Bradley Hand',
    fontWeight: 'bold',
  },
  
  subText: {
    fontSize: 18,
    fontFamily: 'Bradley Hand',
    fontWeight: 'bold',
  },

  textLabel: {
    paddingRight: 180,
  },

  viewTextInput: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 100,
  },

  picker: {
    flex:1,
    width: 300,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: colors.white,
    borderBottomColor: colors.black,
  },

  textSlider: {
    textAlign: 'center',
    paddingTop: 40,
  },

  slider: {
    width: 300,
    height: 40,
  },

  viewSwitch: {
    flex: 0.1,
    flexDirection:'row',
    justifyContent:'space-between',
    margin: 20,
  },

  textStudent: {
    paddingRight: 10,
  }
});

export default Banco;