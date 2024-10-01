import React, {useState} from 'react';
import {View, Text, Image, FlatList, Pressable, ScrollView} from 'react-native';
import styles from '../../styles/globalStyles';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {List, Button, Card} from 'react-native-paper';
import {carros} from '../../constants';

const myIcon = <Icon name="rocket" size={30} color="#000000" />;

const ArticulosScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filtredData = selectedCategory
    ? carros.filter(item => item.marca === selectedCategory)
    : carros;

  const handlePress = item => {
    navigation.navigate('DetalleScreen', {item});
  };

  //Renderizado del flatlist
  const renderItem = ({item}) => (
    <Pressable onPress={() => handlePress(item)}>
      <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <Card>
          <Card.Title title={item.marca} titleStyle={styles.negrita} />
          <Card.Cover source={{uri: item.imgSrc}} />
          <Card.Content>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
            <Text style={styles.negrita}>Precio: {item.precio}</Text>
          </Card.Content>
        </Card>
      </View>
    </Pressable>
  );

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
