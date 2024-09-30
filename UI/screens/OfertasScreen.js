import React from 'react';
import {View, Text, FlatList, Pressable, ScrollView} from 'react-native';
import {List, Button, Card} from 'react-native-paper';
import {carros_oferta} from '../../constants';
import styles from '../../styles/globalStyles';

const OfertasScreen = ({navigation}) => {
  const handlePress = item => {
    navigation.navigate('DetalleScreen', {item});
  };
  const renderItem = ({item}) => (
    <Pressable onPress={() => handlePress(item)}>
      <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <Card>
          <Card.Title title={item.marca} titleStyle={styles.negrita} />
          <Card.Cover source={{uri: item.imgSrc}} />
          <Card.Content>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
            <Text style={styles.negrita}>Precio: {item.precio}</Text>
            <Text style={styles.negrita}>Descuento: {item.descuento}</Text>
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
        <List.Section>
          <List.Accordion
            titleStyle={{color: 'white'}}
            title="Categorias"
            style={{backgroundColor: '#010f26'}}
            left={props => (
              <List.Icon {...props} icon="chart-bar" color="#ffffff" />
            )}>
            <List.Item title="Electricos" titleStyle={{color: 'white'}} />
            <List.Item title="Hibridos" titleStyle={{color: 'white'}} />
          </List.Accordion>
        </List.Section>
      </View>

      <View>
        <FlatList
          data={carros_oferta}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default OfertasScreen;
