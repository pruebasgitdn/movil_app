import React from 'react';
import {View, Text} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';

const RegisterScreen = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <View
      style={{
        display: 'flex',
        alignContent: 'center',
        marginHorizontal: '5%',
        marginTop: '25%',
      }}>
      <View style={{}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            padding: 5,
          }}>
          Registro de usuario
        </Text>
        <Card style={styles.form_container}>
          <Card.Content>
            <TextInput
              label="Nombre"
              mode="outlined"
              value={text}
              onChangeText={text => setText(text)}
            />
            <TextInput
              label="Apellido"
              mode="outlined"
              value={text}
              onChangeText={text => setText(text)}
            />
            <TextInput
              label="Usuario"
              mode="outlined"
              value={text}
              onChangeText={text => setText(text)}
            />
            <TextInput
              label="Correo Electronico"
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
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginVertical: 10,
              }}>
              <Button mode="contained" onPress={() => console.log('Pressed')}>
                Crear cuenta.
              </Button>

              <Button
                onPress={() => navigation.navigate('HomeScreen')}
                mode="contained-tonal">
                Volver al inicio.
              </Button>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default RegisterScreen;
