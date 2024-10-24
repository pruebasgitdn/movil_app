import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, Text, Pressable, ScrollView, Alert} from 'react-native';
import {Searchbar, List, Button, Card} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import firestore from '@react-native-firebase/firestore';
import {CartContext} from '../../context/CartContext';

const AseoProducts = ({navigation}) => {
  const [productos, setProductos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {dispatch, state} = useContext(CartContext);

  const handlePress = item => {
    navigation.navigate('DetalleScreen', {item});
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productosCollection;

        if (selectedCategory) {
          productosCollection = await firestore()
            .collection('products')
            .where('brand', '==', selectedCategory)
            .get();
        } else {
          productosCollection = await firestore().collection('products').get();
        }

        const productosData = productosCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data(), // Extrae los datos del documento
        }));
        const a = productosData.filter(b => b.category === 'Aseo');
        setProductos(a);
      } catch (error) {
        console.log('Error al obtener los productos', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const renderItem = ({item}) => {
    const isInCart = state.user?.carrito?.some(
      cartItem => cartItem.id === item.id,
    );

    const isFavorite = state.user?.favoritos?.some(
      favItem => favItem.id === item.id,
    );

    const handleAddFavo = item => {
      if (!isInCart) {
        dispatch({type: 'ADD_TO_CART', payload: item});
        Alert.alert('Carrito', 'Producto añadido al carrito.');
      } else {
        dispatch({type: 'REMOVE_FROM_CART', payload: item.id});
        Alert.alert('Favoritos', 'Producto eliminado del carrito');
      }
    };

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
        <Pressable style={styles.gridArts} onPress={() => handlePress(item)}>
          <Card style={styles.card_art}>
            <Card.Title title={item.title} titleStyle={styles.negrita} />
            <Card.Cover src={item?.imgSrc} />

            <Card.Content>
              <Text>Categoria: {item.category}</Text>
              <Text style={styles.descripcion}>{item.description}</Text>
              <Text style={styles.negrita}>Precio: ${item.price}</Text>
              {item.offer === true ? (
                <Text style={styles.precios}>
                  Descuento: ${item.offerprice}
                </Text>
              ) : (
                <Text></Text>
              )}
              <View style={styles.btns_detalle_prd}>
                <Button
                  icon={isInCart ? 'cart-arrow-down' : 'cart-plus'}
                  textColor="#ffffff"
                  buttonColor={isInCart ? '#730224' : '#06b81a'}
                  onPress={() => handleAddFavo(item)}>
                  {}
                </Button>

                <Button
                  icon={isFavorite ? 'heart-broken' : 'heart'}
                  textColor="#fefefd"
                  buttonColor={isFavorite ? '#ff0226' : '#02243d'}
                  onPress={handleFavorites}>
                  {}
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
            icon=""
            mode="view"
            style={styles.search_bar}
          />

          <View style={styles.subsearchbarcontainer}>
            <View style={styles.containerlistselect}>
              <List.Section style={styles.list_section}>
                <List.Accordion
                  title="Marca"
                  titleStyle={{color: 'white'}}
                  style={styles.list_sbar}
                  right={props => (
                    <List.Icon {...props} icon="tag" color="#ffffff" />
                  )}>
                  <List.Item
                    title="Ariel"
                    titleStyle={{color: 'white'}}
                    onPress={() => setSelectedCategory('Ariel')}
                  />
                  <List.Item
                    title="Dove"
                    titleStyle={{color: 'white'}}
                    onPress={() => setSelectedCategory('Dove')}
                  />
                  <List.Item
                    title="Downy"
                    titleStyle={{color: 'white'}}
                    onPress={() => setSelectedCategory('Downy')}
                  />
                  <List.Item
                    title="Scott"
                    titleStyle={{color: 'white'}}
                    onPress={() => setSelectedCategory('Scott')}
                  />
                  <List.Item
                    title="Axión"
                    titleStyle={{color: 'white'}}
                    onPress={() => setSelectedCategory('Axion')}
                  />
                  <List.Item
                    title="Lysol"
                    titleStyle={{color: 'white'}}
                    onPress={() => setSelectedCategory('Lysol')}
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
          <Text style={styles.text_pr}>
            {selectedCategory ? `Productos ${selectedCategory}` : `Aseo`}
          </Text>

          <FlatList
            data={productos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AseoProducts;
