import React from 'react';
import {View} from 'react-native';
import {Card, Text, TextInput, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';

const LoginScreen = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <View
      style={{
        display: 'flex',
        alignContent: 'center',
        marginHorizontal: '5%',
        marginTop: '25%',
      }}>
      {/* Plan machete    */}
      <View style={{}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            padding: 5,
          }}>
          Iniciar Sesion
        </Text>
        <Card style={styles.form_container}>
          <Card.Content>
            <TextInput
              label="Usuario"
              mode="outlined"
              value={text}
              onChangeText={text => setText(text)}
            />
            <TextInput
              label="Contraseña"
              mode="outlined"
              value={text}
              onChangeText={text => setText(text)}
            />
            <Button
              mode="contained"
              onPress={() => console.log('Pressed')}
              style={{
                marginVertical: 10,
              }}>
              Entrar
            </Button>

            <View
              style={{
                display: 'flex',
                gap: 8,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.subtitulo}>No tienes una cuenta?</Text>
              <Button
                onPress={() => navigation.navigate('RegisterScreen')}
                mode="contained-tonal">
                Crear una
              </Button>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default LoginScreen;
