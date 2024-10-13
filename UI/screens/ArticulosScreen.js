import React, {useContext, useReducer, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import styles from '../../styles/globalStyles';
import {Searchbar, Icon, Badge} from 'react-native-paper';
import {List, Button, Card} from 'react-native-paper';
import {CartContext} from '../../context/CartContext';
import {products} from '../../constants';
import firestore from '@react-native-firebase/firestore';

const ArticulosScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productos, setProductos] = useState([]);

  //Acciones del reducer
  const {dispatch, state} = useContext(CartContext);
  const carrito = state.user?.carrito;

  useEffect(() => {
    console.log('Carrito actualizado:', state.user.carrito);
  }, [state.user?.carrito]);

  useEffect(() => {
    console.log('User actualizado:', state.user);
  }, [state.user]);

  // obtener productos 10
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productosCollection = await firestore()
          .collection('products')
          .limit(10)
          .get();
        const productosData = productosCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data(), // Extrae los datos del documento
        }));
        setProductos(productosData);
      } catch (error) {
        console.log('Error al obtener los productos', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddFavo = item => {
    const isInCart = carrito.some(cartItem => cartItem.id === item.id);
    if (!isInCart) {
      dispatch({type: 'ADD_TO_CART', payload: item});
      Alert.alert('Carrito', 'Producto añadido al carrito.');
    } else {
      Alert.alert('Info', 'El Producto ya esta en el carrito.');
    }
  };

  const filtredData = selectedCategory
    ? productos.filter(item => item.category === selectedCategory)
    : productos; // Filtrar productos por categoría

  const handlePress = item => {
    navigation.navigate('DetalleScreen', {item});
  };

  const renderItem = ({item}) => {
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
      <View style={styles.ss}>
        <Pressable onPress={() => handlePress(item)} style={styles.gridArts}>
          <Card style={styles.card_art}>
            <Card.Title title={item.brand} titleStyle={styles.negrita} />
            <Card.Cover src={item?.imgSrc} />
            <Card.Content>
              <Text>Categoria: {item.category}</Text>
              <Text style={styles.descripcion}>{item.description}</Text>
              <Text style={styles.negrita}>Precio: {item.price}</Text>
              <View style={styles.btns_detalle_prd}>
                <Button
                  textColor="#fefefd"
                  buttonColor="#01b45e"
                  onPress={() => handleAddFavo(item)}>
                  Añadir al carro
                </Button>

                <Button
                  textColor="#fefefd"
                  buttonColor={isFavorite ? '#ff0226' : '#02243d'}
                  onPress={handleFavorites}>
                  {isFavorite ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'}
                </Button>
              </View>
            </Card.Content>
          </Card>
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.searchbarcontainer}>
          <Searchbar
            placeholder="Buscar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            icon=""
            mode="view"
            style={styles.search_bar}
          />

          <View style={styles.subsearchbarcontainer}>
            <View style={styles.containerlistselect}>
              <List.Section style={styles.list_section}>
                <List.Accordion
                  title="Categorias"
                  titleStyle={{color: 'white'}}
                  style={styles.list_sbar}>
                  <List.Item
                    title="Tecnologia"
                    titleStyle={{color: 'white'}}
                    onPress={() => setSelectedCategory('smartphones')}
                  />
                  <List.Item
                    title="Automotriz"
                    titleStyle={{color: 'white'}}
                    onPress={() => setSelectedCategory('automotive')}
                  />
                </List.Accordion>
              </List.Section>
            </View>
            <Button
              mode="contained-tonal"
              onPress={() => {
                navigation.navigate('OfertasScreen');
              }}>
              Ofertas
            </Button>
          </View>
        </View>

        <View>
          <Text style={styles.text_pr}>Categorias</Text>
          <View style={styles.gridContainer}>
            <View style={styles.gridItem}>
              <Card onPress={() => navigation.navigate('RopaProducts')}>
                <Card.Title title="Ropa" />
                <Card.Cover
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ116R89dHQoXD20iQDdQ12UUrmEB-r9trzA&s',
                  }}
                />
              </Card>
            </View>
            <View style={styles.gridItem}>
              <Card onPress={() => navigation.navigate('TecnoProducts')}>
                <Card.Title title="Tecnologia" />
                <Card.Cover
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQem27tPvIelIBALjzjK-VjN2VjPaUOcuRH9Q&s',
                  }}
                />
              </Card>
            </View>
            <View style={styles.gridItem}>
              <Card onPress={() => navigation.navigate('AseoProducts')}>
                <Card.Title title="Aseo" />
                <Card.Cover
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0F3yACDRqM4LsMddq67KBD-xM6BJm-75UWw&s',
                  }}
                />
              </Card>
            </View>
            <View style={styles.gridItem}>
              <Card onPress={() => navigation.navigate('AutoProducts')}>
                <Card.Title title="Automotriz" />
                <Card.Cover
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKp9oy1ObbQBoDcvx9f-6ZCWQg59qTgkjEg&s',
                  }}
                />
              </Card>
            </View>
            <Card
              style={styles.card_total}
              onPress={() => navigation.navigate('HogarProducts')}>
              <Card.Title title="Inmueble" />
              <Card.Cover
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhNX9UajfFZL7DYbxjvUA0BKH0dU9IRtFoA&s',
                }}
              />
            </Card>
          </View>

          <View>
            <Text style={styles.text_pr}>Productos</Text>
            <FlatList
              data={productos}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2} // Dos columnas
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArticulosScreen;
