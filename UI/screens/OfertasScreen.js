import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList, Pressable, Alert} from 'react-native';
import {List, Button, Card} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import firestore from '@react-native-firebase/firestore';
import {CartContext} from '../../context/CartContext';

const OfertasScreen = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [productos, setProductos] = useState(null);
  const [noProductsMessage, setNoProductsMessage] = useState(''); // Estado  mensaje sin productos
  const {dispatch, state} = useContext(CartContext);

  // Opciones de marcas
  const brandOptions = {
    Hogar: ['Whirlpool', 'Sealy', 'LG', 'Ashley'],
    Aseo: ['Dove', 'Downy', 'Scott', 'Axion'],
    Autos: ['Toyota', 'Honda', 'Chevrolet', 'Ford'],
    Tecnología: ['Samsung', 'Dell', 'Xiaomi', 'Bose', 'HP'],
    Ropa: ['Zara', 'Adidas', 'Nike', 'H&M'],
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productosCollection;

        // Buscar por categoriaa y marca si estan seleccionados
        if (selectedCategory && selectedBrand) {
          productosCollection = await firestore()
            .collection('products')
            .where('category', '==', selectedCategory)
            .where('brand', '==', selectedBrand)
            .where('offer', '==', true)
            .get();
        } else if (selectedCategory) {
          // Solo por categoraa
          productosCollection = await firestore()
            .collection('products')
            .where('category', '==', selectedCategory)
            .where('offer', '==', true)
            .get();
        } else {
          // En oferta solo de  meustra sin seleccionar nada
          productosCollection = await firestore()
            .collection('products')
            .where('offer', '==', true)
            .limit(10)
            .get();
        }

        const productosData = productosCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(productosData);

        if (productosData.length === 0) {
          setNoProductsMessage(
            selectedBrand
              ? `No hay ofertas disponibles para la marca ${selectedBrand}.`
              : 'No hay ofertas disponibles en este momento.',
          );
        } else {
          setNoProductsMessage('');
        }
      } catch (error) {
        console.log('Error al obtener los productos', error);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectedBrand]);

  const handlePress = item => {
    navigation.navigate('DetalleScreen', {item});
  };

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
        <Pressable onPress={() => handlePress(item)} style={styles.gridArts}>
          <View style={styles.container_card_oferta}>
            <Card>
              <Card.Title title={item.brand} titleStyle={styles.negrita} />
              <Card.Cover source={{uri: item.imgSrc}} />
              <Card.Content>
                <Text style={styles.descripcion}>{item.description}</Text>
                <Text style={styles.offer_txt}>Antes: {item.price}</Text>
                <Text style={styles.offer_txt}>
                  Descuento: {item.offerprice}
                </Text>
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
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.ofertas_nav}>
        <View style={styles.containerofertasnav}>
          <List.Section style={styles.sectionfertas}>
            <List.Accordion
              titleStyle={{color: 'white'}}
              title="Productos"
              style={styles.list_sbar}
              left={props => (
                <List.Icon {...props} icon="baby-carriage" color="#ffffff" />
              )}>
              <List.Item
                onPress={() => {
                  setSelectedCategory('Hogar');
                  setSelectedBrand(null); // Vaciar la marca al cambiar de categoría
                }}
                title="Hogar"
                titleStyle={{color: 'white'}}
              />
              <List.Item
                onPress={() => {
                  setSelectedCategory('Aseo');
                  setSelectedBrand(null);
                }}
                title="Aseo"
                titleStyle={{color: 'white'}}
              />
              <List.Item
                onPress={() => {
                  setSelectedCategory('Autos');
                  setSelectedBrand(null);
                }}
                title="Automóvil"
                titleStyle={{color: 'white'}}
              />
              <List.Item
                onPress={() => {
                  setSelectedCategory('Tecnología');
                  setSelectedBrand(null);
                }}
                title="Tecnología"
                titleStyle={{color: 'white'}}
              />
              <List.Item
                onPress={() => {
                  setSelectedCategory('Ropa');
                  setSelectedBrand(null);
                }}
                title="Ropa"
                titleStyle={{color: 'white'}}
              />
            </List.Accordion>
          </List.Section>

          <List.Section style={styles.sectionfertas}>
            <List.Accordion
              titleStyle={{color: 'white'}}
              title="Marca"
              style={styles.list_sbar}
              left={props => (
                <List.Icon {...props} icon="tag" color="#ffffff" />
              )}>
              {/* Si hay categoria seleccionada buscar en opciones de marca por esa categoria y recorrer y al presionar setear la marca si sabe */}
              {selectedCategory &&
                brandOptions[selectedCategory].map((brand, index) => (
                  <List.Item
                    key={index}
                    title={brand}
                    titleStyle={{color: 'white'}}
                    onPress={() => setSelectedBrand(brand)}
                  />
                ))}
            </List.Accordion>
          </List.Section>
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.text_pr}>Ofertas</Text>
          <Text style={styles.ofert_p}>
            {selectedCategory
              ? `Estos son algunos de nuestros productos en el área de ${selectedCategory}`
              : 'Estos son algunos de nuestros productos en oferta'}
          </Text>
        </View>

        {noProductsMessage ? (
          <Text style={styles.errorText}>{noProductsMessage}</Text>
        ) : (
          <FlatList
            data={productos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
};

export default OfertasScreen;
