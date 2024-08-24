import React from 'react';
import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import {Card, Icon, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {compras_ejemplo} from '../../constants';

const MisComprasScreen = () => {
  const renderItem = ({item}) => (
    <View style={{marginVertical: 10, marginHorizontal: 10}}>
      <Card>
        <Card.Content
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            overflow: 'scroll',
          }}>
          <View>
            <Image
              src={item.imgSrc}
              style={{
                width: 120,
                height: 120,
                borderRadius: 40,
              }}
            />
          </View>

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
            }}>
            <Text style={styles.textodetalle}>{item.descripcion}</Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                marginVertical: 10,
              }}>
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
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Compras Realizadas.
          </Text>
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
