import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import {Card, Icon, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {favo_ejemplo} from '../../constants';
import {CartContext} from '../../context/CartContext';

const MisFavoScreen = ({navigation}) => {
  const {user, isAuthenticated, state, dispatch} = useContext(CartContext);

  const removeFromFavo = obj => {
    const id = obj.id; //Accediendo al id del carro
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: id});
    Alert.alert('Favoritos', 'Producto eliminado de favoritos.');
    console.log('CARRO SELECCIONADO', id);
  };

  const renderItem = ({item}) => (
    <View style={styles.container_favo}>
      <Card>
        <Card.Content style={styles.card_container_favo}>
          <View>
            <Image src={item.imgSrc} style={styles.image} />
          </View>

          <View style={styles.detalle_card_favo}>
            <Text style={styles.textodetalle}>{item.description}</Text>

            <View style={styles.second_row_favo_card}>
              <View
                style={{
                  display: 'flex',
                }}>
                <Text style={styles.negrita}>Estado: Disponible </Text>
                <Button
                  buttonColor="red"
                  textColor="white"
                  onPress={() => removeFromFavo(item)}>
                  Eliminar de favoritos
                </Button>
              </View>

              <View>
                <Button
                  buttonColor={
                    item.estado === 'Disponible'
                      ? '#0ac404'
                      : item.estado === 'No Disponible'
                      ? '#b00202'
                      : 'contained-tonal'
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
      {state.user.favoritos && state.user.favoritos.length > 0 ? (
        <>
          <FlatList
            data={state.user.favoritos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            //Header de la lista
            ListHeaderComponent={
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Mis Favoritos</Text>
              </View>
            }
            //Footer de la lista
            ListFooterComponent={
              <View style={styles.footerContainer}>
                <Button
                  style={styles.btnfull}
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
          <Text style={styles.textlogin}>No hay favoritos, de momento.</Text>
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

export default MisFavoScreen;
