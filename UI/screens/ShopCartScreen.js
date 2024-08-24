import React from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import {List, Button, Card} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {carros_oferta} from '../../constants';

const ShopCartScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={{marginVertical: 10, marginHorizontal: 10}}>
      <Card>
        <Card.Content
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            overflow: 'scroll',
          }}>
          <View>
            <Image
              src={item.imgSrc}
              style={{
                width: 120,
                height: 120,
                borderRadius: 40,
              }}
            />
          </View>

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
            }}>
            <Text style={styles.negrita}>{item.marca}</Text>
            <Text style={styles.textodetalle}>{item.descripcion}</Text>
            <Text style={styles.textodetalle}>$ {item.precio}</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                marginVertical: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 4,
                }}>
                <Button mode="outlined">+</Button>
                <Text style={styles.negrita}>1</Text>
                <Button mode="outlined">-</Button>
              </View>

              <View
                style={{
                  width: '100%',
                }}>
                <Button buttonColor="red" textColor="white">
                  Eliminar Producto
                </Button>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
  return (
    <ScrollView>
      <View>
        <View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Mi carrito.
            </Text>
          </View>
          <FlatList
            data={carros_oferta}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Text style={styles.negrita}>$ 130.394.234.999</Text>
          <Button
            buttonColor="#0ac404"
            textColor="white"
            onPress={() => navigation.navigate('SucursalScreen')}>
            Ir al Pago
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShopCartScreen;
