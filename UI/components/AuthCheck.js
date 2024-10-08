import React, {useContext} from 'react';
import {View, Alert} from 'react-native';
import {Avatar, Button, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../../context/CartContext';
import styles from '../../styles/globalStyles';

const AuthCheck = () => {
  const {isAuthenticated, user, setUser, setIsAuthenticated, state, dispatch} =
    useContext(CartContext);

  const navigation = useNavigation(); // Hook de navegación

  const handleLogout = () => {
    setIsAuthenticated(false); // Manejar el logout
    dispatch({type: 'LOGOUT'});
    Alert.alert('Sesión cerrada', 'Has cerrado sesión correctamente.');
  };

  return (
    <View style={{height: 10}}>
      {state.isAuthenticated ? (
        <View style={styles.topnav}>
          <View style={styles.topsesion}>
            <Text style={styles.usertop}>{state.user.usuario}</Text>
            <Button
              onPress={() => handleLogout()}
              textColor="white"
              style={styles.btncerrarsesion}>
              Cerrar sesión
            </Button>
          </View>
        </View>
      ) : (
        <View style={styles.btns_tpnv}>
          <Button
            textColor="white"
            style={styles.inic_top}
            onPress={() => navigation.navigate('LoginScreen')}>
            Iniciar Sesión
          </Button>
          <Button
            textColor="white"
            style={styles.inic_top}
            onPress={() => navigation.navigate('RegisterScreen')}>
            Registrarse
          </Button>
        </View>
      )}
    </View>
  );
};

export default AuthCheck;
