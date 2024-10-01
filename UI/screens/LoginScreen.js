import React, {useContext} from 'react';
import {View} from 'react-native';
import {Card, Text, TextInput, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {CartContext} from '../../context/CartContext';

const LoginScreen = ({navigation}) => {
  //Extraer del contexto
  const {setUser, setIsAuthenticated, user, isAuthenticated} =
    useContext(CartContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    if (email && password) {
      setUser({email, password});
      setIsAuthenticated(true);
    }
    navigation.navigate('ArticulosScreen');
    console.log({user});
    console.log(isAuthenticated);
  };
  return (
    <View style={styles.containerlogin}>
      {/* Plan machete    */}
      <View style={{}}>
        <Text style={styles.textlogin}>Iniciar Sesion</Text>
        <Card style={styles.form_container}>
          <Card.Content>
            <TextInput
              label="Usuario"
              mode="outlined"
              maxLength={10}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              label="Contraseña"
              mode="outlined"
              maxLength={8}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <Button
              mode="contained"
              onPress={() => handleLogin()}
              style={{
                marginVertical: 10,
              }}>
              Entrar
            </Button>

            <View style={styles.loginfooter}>
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
