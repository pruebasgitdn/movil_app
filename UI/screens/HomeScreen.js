import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from '../../styles/globalStyles';
import {CartContext} from '../../context/CartContext';
import {Card, Button} from 'react-native-paper';
import {usuarios} from '../../constants';
import firestore from '@react-native-firebase/firestore'; // Importa Firestore
import {Icon, MD3Colors} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  const [us, setUs] = useState('');

  const {state} = useContext(CartContext);
  useEffect(() => {
    const s = async () => {
      try {
        console.log('user', state.user);
        setUs(state?.user?.usuario);
      } catch (error) {
        console.error('error', error);
      }
    };
    s();
  }, [state.user]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../styles/assets/fondo.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
          {state.isAuthenticated ? (
            <View>
              <Card style={styles.card_aut_home}>
                <Card.Content style={{gap: 8}}>
                  <Text
                    style={
                      styles.aut_text_home
                    }>{`! Bienvenido, ${us} !`}</Text>
                  <Button
                    mode="contained"
                    style={styles.homebtn}
                    onPress={() => navigation.navigate('ProfileScreen')}>
                    Perfil
                  </Button>
                  <Button
                    mode="contained"
                    style={styles.homebtn}
                    onPress={() => navigation.navigate('ArticulosScreen')}>
                    Productos
                  </Button>
                </Card.Content>
              </Card>
            </View>
          ) : (
            <Card style={styles.card_home}>
              <Text style={styles.titulo_home}>
                Productos innovadores y al mejor precio del mercado
              </Text>
              <Card.Content style={{gap: 8}}>
                <Button
                  mode="contained"
                  style={styles.homebtn}
                  onPress={() => navigation.navigate('LoginScreen')}>
                  Iniciar Sesion
                </Button>
                <Button
                  mode="contained"
                  style={styles.homebtn}
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  Registrarse
                </Button>
              </Card.Content>
            </Card>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
