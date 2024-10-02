import React, {useContext} from 'react';
import {View, Text, FlatList, Image, StyleSheet, Alert} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {carros_oferta} from '../../constants';
import styles from '../../styles/globalStyles';
import {CartContext} from '../../context/CartContext';

const ShopCartScreen = ({navigation}) => {
  const [cantidad, setCantidad] = React.useState(1);
  const {user, isAuthenticated, state, dispatch} = useContext(CartContext);

  const sumarcantidad = () => {
    setCantidad(cantidad + 1);
  };

  const removeFromCart = obj => {
    const id = obj.id; //Accediendo al id del carro
    dispatch({type: 'REMOVE_FROM_CART', payload: id});
    Alert.alert('Carrito', 'Producto eliminado del carrito.');
    console.log('CARRO SELECCIONADO', id);
  };

  const handleEmptyCard = () => {
    dispatch({type: 'EMPTY_CART'});
    Alert.alert('Info', 'Se han eliminado los items del carrito de compras.');
  };

  const renderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <Card>
        <Card.Content style={styles.cardContent}>
          <View>
            <Image source={{uri: item.imgSrc}} style={styles.image} />
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemMarca}>{item.marca}</Text>
            <Text style={styles.itemDescripcion}>{item.descripcion}</Text>
            <Text style={styles.itemPrecio}>$ {item.precio}</Text>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityControls}>
                <Button mode="outlined" onPress={() => sumarcantidad()}>
                  +
                </Button>
                <Text style={styles.itemCantidad}>{cantidad}</Text>
                <Button mode="outlined">-</Button>
              </View>
              <Button
                style={styles.deleteButton}
                buttonColor="red"
                textColor="white"
                onPress={() => removeFromCart(item)}>
                Eliminar Producto
              </Button>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );

  return (
    <View style={styles.container_card}>
      {state.user.carrito && state.user.carrito.length > 0 ? (
        <>
          <FlatList
            data={state.user.carrito}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            //Header de la lista
            ListHeaderComponent={
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Mi carrito</Text>
              </View>
            }
            //Footer de la lista
            ListFooterComponent={
              <View style={styles.footerContainer}>
                <Text style={styles.totalText}>$ 130.394.234.999</Text>
                <View style={styles.footerbtns_cart}>
                  <Button
                    style={styles.payButton}
                    buttonColor="#0ac404"
                    textColor="white"
                    onPress={() => navigation.navigate('SucursalScreen')}>
                    Ir al Pago
                  </Button>
                  <Button
                    style={styles.deleteButton}
                    buttonColor="red"
                    textColor="white"
                    onPress={() => handleEmptyCard()}>
                    Vaciar Carrito
                  </Button>
                </View>
              </View>
            }
          />
        </>
      ) : (
        <View style={styles.container_carro_vacio}>
          <Text style={styles.textlogin}>Tu carrito está vacío.</Text>
          <Button
            buttonColor="#00bbfc"
            textColor="#f3fff9"
            style={styles.btn_carro_vacio}
            onPress={() => navigation.navigate('ArticulosScreen')}>
            Ver productos!!.
          </Button>
        </View>
      )}
    </View>
  );
};

export default ShopCartScreen;
