import React from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import {Card, Icon, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {compras_ejemplo} from '../../constants';

const MisComprasScreen = () => {
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
    <ScrollView>
      <View>
        <View>
          <Text style={styles.textlogin}>Compras Realizadas.</Text>
        </View>
        <FlatList
          data={compras_ejemplo}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default MisComprasScreen;
