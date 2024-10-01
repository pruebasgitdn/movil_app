import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {carros_oferta} from '../../constants';
import styles from '../../styles/globalStyles';

const ShopCartScreen = ({navigation}) => {
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
                <Button mode="outlined">+</Button>
                <Text style={styles.itemCantidad}>1</Text>
                <Button mode="outlined">-</Button>
              </View>
              <Button
                style={styles.deleteButton}
                buttonColor="red"
                textColor="white">
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
      <FlatList
        data={carros_oferta}
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
            <Button
              style={styles.payButton}
              buttonColor="#0ac404"
              textColor="white"
              onPress={() => navigation.navigate('SucursalScreen')}>
              Ir al Pago
            </Button>
          </View>
        }
      />
    </View>
  );
};

export default ShopCartScreen;
