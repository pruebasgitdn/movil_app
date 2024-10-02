import React, {useContext, useEffect} from 'react';
import {View, Alert} from 'react-native';
import {Card, Text, TextInput, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {CartContext} from '../../context/CartContext';
import {usuarios} from '../../constants';
import {useNavigation} from '@react-navigation/native'; // Importar useNavigation

const LoginScreen = () => {
  //Extraer del contexto
  const {setUser, setIsAuthenticated, user, isAuthenticated, dispatch, state} =
    useContext(CartContext);

  // Acceder a la navegación con useNavigation
  const navigation = useNavigation();
  const [usuario, setUsuario] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [usuarioError, setUsuarioError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);

  // const handleUserValidation = text => {
  //   const usuarioRegex = /^[a-zA-Z0-9]{1,10}$/;
  //   if (usuarioRegex.test(text)) {
  //     setUsuarioError(null);
  //   } else {
  //     setUsuarioError('Usuario debe contener al menos 10 caracteres');
  //   }
  //   setUser(text);
  // };

  // const handlePasswordValidation = text => {
  //   const passwordRegex =
  //     /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:,.<>\/?]).{1,8}$/;
  //   if (passwordRegex.test(text)) {
  //     setPasswordError(null);
  //   } else {
  //     setPasswordError('Contraseña debe contener al menos 8 caracteres');
  //   }
  //   setPassword(text);
  // };

  const handleLogin = () => {
    // Buscar en usuarios[] por user si en .crreo == al seteado en el form y lo mismo en contraseña con password
    const userFound = usuarios.find(
      userr => userr.usuario === usuario && userr.contraseña === password,
    );

    if (userFound) {
      // Si el usuario existe, actualizar el estado de autenticación
      // setUser(userFound);
      setIsAuthenticated(true);
      dispatch({type: 'LOGIN', payload: userFound});
      Alert.alert('Login exitoso', `Bienvenido ${userFound.usuario}`);
      navigation.navigate('ProfileScreen');
    } else {
      // Si no se encuentra, mostrar un mensaje de error
      Alert.alert('Error', 'Credenciales incorrectas. Intenta nuevamente.');
    }
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
              onChangeText={text => setUsuario(text)}
            />

            <TextInput
              label="Contraseña"
              mode="outlined"
              maxLength={8}
              secureTextEntry={true}
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
