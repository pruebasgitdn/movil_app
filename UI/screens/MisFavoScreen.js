import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {Card, Icon, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {favo_ejemplo} from '../../constants';

const MisFavoScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.container_favo}>
      <Card>
        <Card.Content style={styles.card_container_favo}>
          <View>
            <Image src={item.imgSrc} style={styles.image_favo} />
          </View>

          <View style={styles.detalle_card_favo}>
            <Text style={styles.textodetalle}>{item.descripcion}</Text>

            <View style={styles.second_row_favo_card}>
              <View
                style={{
                  display: 'flex',
                }}>
                <Text style={styles.negrita}>Estado: </Text>
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
    <ScrollView>
      <View>
        <View>
          <Text style={styles.textlogin}>Mis Favoritos.</Text>
        </View>
        <FlatList
          data={favo_ejemplo}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default MisFavoScreen;
