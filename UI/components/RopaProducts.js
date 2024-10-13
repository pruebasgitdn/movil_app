import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Pressable, ScrollView} from 'react-native';
import {Searchbar, List, Button, Card} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {products} from '../../constants';
import firestore from '@react-native-firebase/firestore';

const RopaProducts = ({navigation}) => {
  const [productos, setProductos] = useState([]);

  const handlePress = item => {
    navigation.navigate('DetalleScreen', {item});
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productosCollection = await firestore()
          .collection('products')
          .get();
        const productosData = productosCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data(), // Extrae los datos del documento
        }));
        const a = productosData.filter(b => b.category === 'Ropa');
        setProductos(a);
      } catch (error) {
        console.log('Error al obtener los productos', error);
      }
    };

    fetchProducts();
  }, []);

  const renderItem = ({item}) => {
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
              <View style={styles.btns_detalle_prd}>
                <Button textColor="#fefefd" buttonColor="#01b45e">
                  Añadir al carro
                </Button>
                <Button buttonColor="#02243d" textColor="#fefefd">
                  Favoritos
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
                  style={styles.list_sbar}>
                  <List.Item title="Samsung" titleStyle={{color: 'white'}} />
                  <List.Item title="Motorola" titleStyle={{color: 'white'}} />
                  <List.Item title="Lenovo" titleStyle={{color: 'white'}} />
                  <List.Item title="Huwaei" titleStyle={{color: 'white'}} />
                  <List.Item title="Apple" titleStyle={{color: 'white'}} />
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
          <Text style={styles.text_pr}>Prendas de Vestir</Text>

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

export default RopaProducts;
