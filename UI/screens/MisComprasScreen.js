import React, {useContext} from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import {Card, Icon, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {compras_ejemplo} from '../../constants';
import {CartContext} from '../../context/CartContext';

const MisComprasScreen = ({navigation}) => {
  const {user, isAuthenticated, state} = useContext(CartContext);
  const renderItem = ({item}) => (
    <View style={styles.container_compras_hechas}>
      <Card>
        <Card.Content style={styles.card_container_compras}>
          <View>
            <Image src={item.imgSrc} style={styles.image_compras_hechas} />
          </View>

          <View style={styles.detalle_card_compras_hc}>
            <Text style={styles.textodetalle}>{item.descripcion}</Text>

            <View style={styles.second_row_detalle_card}>
              <View
                style={{
                  display: 'flex',
                }}>
                <Text style={styles.negrita}>Estado: </Text>
              </View>

              <View>
                <Button
                  buttonColor={
                    item.estado === 'Entregado'
                      ? '#0ac404'
                      : item.estado === 'Cancelado'
                      ? '#b00202'
                      : '#0545f5'
                  }
                  textColor="white">
                  {item.estado}
                </Button>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );

  return (
    <View style={styles.container_card}>
      {state.user.compras && state.user.compras.length > 0 ? (
        <>
          <FlatList
            data={compras_ejemplo}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            //Header de la lista
            ListHeaderComponent={
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Mis Compras</Text>
              </View>
            }
            //Footer de la lista
            ListFooterComponent={
              <View style={styles.footerContainer}>
                <Button
                  style={styles.payButton}
                  buttonColor="#0ac404"
                  textColor="white"
                  onPress={() => navigation.navigate('ProfileScreen')}>
                  Perfil
                </Button>
              </View>
            }
          />
        </>
      ) : (
        <View style={styles.container_carro_vacio}>
          <Text style={styles.textlogin}>
            No has realizado compras, de momento.
          </Text>
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

    // <View>
    //   <View>
    //     <Text style={styles.textlogin}>Compras Realizadas.</Text>
    //   </View>
    //   <FlatList
    //     data={compras_ejemplo}
    //     renderItem={renderItem}
    //     keyExtractor={item => item.id}
    //   />
    // </View>
  );
};

export default MisComprasScreen;
