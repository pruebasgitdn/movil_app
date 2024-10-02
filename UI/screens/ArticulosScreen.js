import React, {useContext, useReducer, useState, useEffect} from 'react';
import {View, Text, Image, FlatList, Pressable, Alert} from 'react-native';
import styles from '../../styles/globalStyles';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {List, Button, Card} from 'react-native-paper';
import {carros, usuarios} from '../../constants';
import {CartContext} from '../../context/CartContext';
import {usuarios as uconstants} from '../../constants';

const ArticulosScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Acciones del reducer
  const {dispatch, state, user} = useContext(CartContext);
  const carrito = state.user?.carrito; // Asumiendo que el carrito está en el state del user

  useEffect(() => {
    console.log('Carrito actualizado:', state.user.carrito);
  }, [state.user?.carrito]);

  useEffect(() => {
    console.log('User actualizado:', state.user);
  }, [state.user]);

  const handleAddFavo = item => {
    console.log('Item a agregar:', item);
    // Verificar si el item ya está en el carrito
    const isInCart = carrito.some(cartItem => cartItem.id === item.id);

    if (!isInCart) {
      dispatch({type: 'ADD_TO_CART', payload: item});
      Alert.alert('Carrito', 'Producto añadido al carrito.');
    } else {
      Alert.alert('Info', 'El Producto ya esta en el carrito.');
    }

    // dispatch({type:'ADD_TO_FAVORITES',payload: item })
    // console.log(item);
  };

  const filtredData = selectedCategory
    ? carros.filter(item => item.marca === selectedCategory)
    : carros;

  const handlePress = item => {
    navigation.navigate('DetalleScreen', {item});
  };

  //Renderizado del flatlist
  // Renderizado del flatlist
  const renderItem = ({item}) => {
    //Verificar si esta en favoritps
    const isFavorite = state.user.favoritos.some(
      favItem => favItem.id === item.id,
    );

    const handleFavorites = () => {
      if (isFavorite) {
        dispatch({type: 'REMOVE_FROM_FAVORITES', payload: item.id});
        Alert.alert('Favoritos', 'Producto eliminado de favoritos.');
      } else {
        dispatch({type: 'ADD_TO_FAVORITES', payload: item});
        Alert.alert('Favoritos', 'Producto añadido a favoritos.');
      }
    };

    return (
      <Pressable onPress={() => handlePress(item)}>
        <View style={{marginVertical: 10, marginHorizontal: 10}}>
          <Card>
            <Card.Title title={item.marca} titleStyle={styles.negrita} />
            <Card.Cover source={{uri: item.imgSrc}} />
            <Card.Content>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
              <Text style={styles.negrita}>Precio: {item.precio}</Text>
              <View style={styles.btns_detalle_prd}>
                <Button
                  textColor="#fefefd"
                  buttonColor="#01b45e"
                  onPress={() => handleAddFavo(item)}>
                  Añadir al carro
                </Button>

                <Button
                  textColor="#fefefd"
                  buttonColor={isFavorite ? '#ff0226' : '#01cbca'}
                  onPress={handleFavorites}>
                  {isFavorite ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'}
                </Button>
              </View>
            </Card.Content>
          </Card>
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: '#010f26',
          padding: 10,
        }}>
        <Searchbar
          placeholder="Buscar"
          onChangeText={setSearchQuery}
          value={searchQuery}
          icon=""
          mode="view"
          style={styles.search_bar}
        />
        {/* Campo Busqueda */}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}>
          <View style={styles.containerlistselect}>
            {/* Seleccion de Marca */}
            <List.Section>
              <List.Accordion
                title="Marca"
                titleStyle={{color: 'white'}}
                style={{backgroundColor: '#010f26'}}
                left={props => (
                  <List.Icon {...props} icon="chart-bar" color="#ffffff" />
                )}>
                <List.Item
                  title="Toyota"
                  titleStyle={{color: 'white'}}
                  onPress={() => setSelectedCategory('toyota')}
                />
                <List.Item
                  title="BMW"
                  titleStyle={{color: 'white'}}
                  onPress={() => setSelectedCategory('bmw')}
                />
                <List.Item
                  title="Audi"
                  titleStyle={{color: 'white'}}
                  onPress={() => setSelectedCategory('audi')}
                />
                <List.Item
                  title="Chevrolet"
                  titleStyle={{color: 'white'}}
                  onPress={() => setSelectedCategory('Chevrolet')}
                />
                <List.Item
                  title="Ford"
                  titleStyle={{color: 'white'}}
                  onPress={() => setSelectedCategory('ford')}
                />
              </List.Accordion>
            </List.Section>

            {/* Seleccion de Tipo */}
            <List.Section>
              <List.Accordion
                title="Tipo"
                titleStyle={{color: 'white'}}
                style={{backgroundColor: '#010f26'}}
                left={props => (
                  <List.Icon {...props} icon="chart-bar" color="#ffffff" />
                )}>
                <List.Item
                  title="Electricos"
                  titleStyle={{color: 'white'}}
                  onPress={() => setSelectedCategory('Toyota')}
                />
                <List.Item
                  title="Hibridos"
                  titleStyle={{color: 'white'}}
                  onPress={() => setSelectedCategory('Hibridos')}
                />
              </List.Accordion>
            </List.Section>
          </View>

          <View>
            <Button
              mode="contained-tonal"
              onPress={() => {
                navigation.navigate('OfertasScreen');
              }}>
              Ofertas
            </Button>
          </View>
        </View>
      </View>

      <View>
        <FlatList
          data={filtredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ArticulosScreen;
