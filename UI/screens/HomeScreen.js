import React, {useContext} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from '../../styles/globalStyles';
import {CartContext} from '../../context/CartContext';

import {Card, Button} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  //Extraer del contexto
  const {setUser, setIsAuthenticated, user, isAuthenticated} =
    useContext(CartContext);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../styles/assets/fondo.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Card style={styles.card_home}>
            <Text style={styles.titulo_home}>
              Consigue el carro de tus sueños
            </Text>
            <Card.Content style={{gap: 8}}>
              {/* {!isAuthenticated && (
                <Button
                  mode="contained"
                  buttonColor="#032e85"
                  onPress={() => navigation.navigate('LoginScreen')}>
                  Iniciar Sesion
                </Button>
              )} */}

              <Button
                mode="contained"
                buttonColor="#032e85"
                onPress={() => navigation.navigate('ArticulosScreen')}>
                Ver más
              </Button>
            </Card.Content>
          </Card>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
