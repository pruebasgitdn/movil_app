import React, {useContext, useEffect, useState} from 'react';
import {View, Alert, ImageBackground} from 'react-native';
import {Card, Text, TextInput, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import auth from '@react-native-firebase/auth';
import {CartContext} from '../../context/CartContext';
import firestore from '@react-native-firebase/firestore';

const LoginScreen = ({navigation}) => {
  // Acceder a la navegación con useNavigation
  const {dispatch, state} = useContext(CartContext);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    contraseña: '',
    correo: '',
  });

  useEffect(() => {
    if (state.isAuthenticated) {
      navigation.navigate('HomeScreen');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isAuthenticated]);

  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value});
    setErrors({...errors, [name]: ''});
  };

  const validateForm = () => {
    const {contraseña, correo} = formData;

    let valid = true;
    let newErrors = {};

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:,.<>\/?])(?=.*[0-9]).{1,8}$/;
    if (!contraseña) {
      newErrors.contraseña = 'La contraseña es obligatoria.';
      valid = false;
    } else if (!passwordRegex.test(contraseña)) {
      newErrors.contraseña =
        'La contraseña debe tener máximo 8 caracteres, al menos una mayúscula, una letra, un número y un carácter especial.';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo) {
      newErrors.correo = 'El correo es obligatorio.';
      valid = false;
    } else if (!emailRegex.test(correo)) {
      newErrors.correo = 'El correo electrónico no es válido.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const userCredential = await auth().signInWithEmailAndPassword(
          formData.correo,
          formData.contraseña,
        );

        //UID del autenticado
        const userId = userCredential.user.uid;

        //Buscar por el id en la coleccion usuarios
        const userDoc = await firestore()
          .collection('usuarios')
          .doc(userId)
          .get();

        if (userDoc) {
          //Extraer la info
          const userData = userDoc.data();

          dispatch({
            type: 'LOGIN',
            payload: {
              id: userId,
              ...userData,
            },
          });

          Alert.alert('Inicio de sesion exitoso');
          navigation.navigate('ProfileScreen');
        }
      } catch (error) {
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Error', 'La contraseña es incorrecta.');
        } else if (error.code === 'auth/user-not-found') {
          Alert.alert('Error', 'No se encontró un usuario con este correo.');
        } else {
          Alert.alert('Error', error.message);
        }
      }
    }
  };
  return (
    <ImageBackground
      source={require('../../styles/assets/flogin.jpg')}
      style={styles.backgroundLogin}>
      <View style={styles.containerlogin}>
        <Card style={styles.cardlogin}>
          <Text style={styles.textlogin}>Iniciar Sesion</Text>
          <Card.Content>
            <TextInput
              label="Email"
              mode="outlined"
              activeOutlineColor="#228ef0"
              onChangeText={text => handleChange('correo', text)}
            />

            <TextInput
              label="Contraseña"
              mode="outlined"
              activeOutlineColor="#228ef0"
              maxLength={8}
              secureTextEntry={true}
              onChangeText={text => handleChange('contraseña', text)}
            />

            <Button
              mode="contained"
              onPress={() => handleLogin()}
              style={styles.loginbnt}>
              Entrar
            </Button>

            <View style={styles.loginfooter}>
              <Text style={styles.subtitulo}>No tienes una cuenta?</Text>
              <Button
                style={styles.crearuna}
                onPress={() => navigation.navigate('RegisterScreen')}
                mode="contained">
                Crear una
              </Button>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
