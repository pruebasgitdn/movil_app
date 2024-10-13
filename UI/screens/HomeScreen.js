import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from '../../styles/globalStyles';
import {CartContext} from '../../context/CartContext';
import {Card, Button} from 'react-native-paper';
import {usuarios} from '../../constants';
import firestore from '@react-native-firebase/firestore'; // Importa Firestore

const HomeScreen = ({navigation}) => {
  //Extraer del contexto
  const {setUser, setIsAuthenticated, user, isAuthenticated} =
    useContext(CartContext);
  const [productos, setProductos] = useState([]); // Estado para los productos

  useEffect(() => {
    const s = async () => {
      try {
        const productosCollection = await firestore()
          .collection('products')
          .limit(2)
          .get();
        const productosData = productosCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data(), // Extrae los datos del documento
        }));

        console.log(productosData);
      } catch (error) {
        console.error('error', error);
      }
    };
    s();
  }, []);

  console.log(usuarios);
  console.log(isAuthenticated);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../styles/assets/fondo.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.overlay}>
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
