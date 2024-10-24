import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {carros_oferta} from '../../constants';
import styles from '../../styles/globalStyles';
import {CartContext} from '../../context/CartContext';

const ShopCartScreen = ({navigation}) => {
  const [cantidad, setCantidad] = React.useState(1);
  const [aux, setAux] = useState(null);
  const {user, isAuthenticated, state, dispatch} = useContext(CartContext);

  useEffect(() => {
    setAux(state.user.carrito);
  }, [state.user.carrito]);

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

  const updateCantidad = (item, newCantidad) => {
    if (newCantidad > 0) {
      dispatch({
        type: 'UPDATE_CART_ITEM',
        payload: {id: item.id, quantity: newCantidad},
      });
    } else {
      Alert.alert('Cantidad', 'La cantidad no puede ser menor a 1.');
    }
  };

  const calculateTotal = () => {
    //acumular
    return state.user.carrito.reduce((total, item) => {
      const price = item.offer === true ? item.offerprice : item.price;
      return total + price * item.quantity;
    }, 0);
  };

  const total = calculateTotal();
  const a = `${parseInt(total).toLocaleString()}`;

  const renderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <Card>
        <Card.Content style={styles.cardContent}>
          <View>
            <Image source={{uri: item.imgSrc}} style={styles.image} />
            <Text style={styles.itemPrecio}>
              ${' '}
              {item.offer === true ? (
                <>Oferta {item.offerprice}</>
              ) : (
                <>Precio Normal {item.price}</>
              )}
            </Text>
          </View>
          <View style={styles.itemInfo}>
            <Text style={styles.itemMarca}>{item.brand}</Text>
            <Text style={styles.itemDescripcion}>{item.description} </Text>

            <View style={styles.quantityContainer}>
              <View style={styles.quantityControls}>
                <Button
                  mode="outlined"
                  onPress={() => updateCantidad(item, item.quantity + 1)}>
                  +
                </Button>
                <Text style={styles.itemCantidad}>{item.quantity}</Text>
                <Button
                  mode="outlined"
                  onPress={() => updateCantidad(item, item.quantity - 1)}>
                  -
                </Button>
              </View>
              <Button
                style={styles.deleteButton}
                buttonColor="red"
                textColor="white"
                onPress={() => removeFromCart(item)}>
                Eliminar Producto
              </Button>
              <Text style={styles.totalText}>
                Total item: ${' '}
                {item.quantity * (item.offer ? item.offerprice : item.price)}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );

  return (
    <ScrollView>
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
                  <View style={styles.blocktotal}>
                    <Text style={styles.totalTO}>TOTAL: ${a}</Text>
                  </View>
                  <View style={styles.footerbtns_cart}>
                    <Button
                      style={styles.payButton}
                      buttonColor="#0ac404"
                      textColor="white"
                      onPress={() =>
                        navigation.navigate('SucursalScreen', {
                          aux: state?.user.carrito,
                          total,
                        })
                      }>
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
    </ScrollView>
  );
};

export default ShopCartScreen;
