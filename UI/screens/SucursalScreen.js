import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  Card,
  Icon,
  Button,
  TextInput,
  SegmentedButtons,
} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {carros_oferta} from '../../constants';

const SucursalScreen = () => {
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState('');
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
            <Text style={styles.negrita}>{item.marca}</Text>
            <Text style={styles.textodetalle}>{item.descripcion}</Text>
            <Text style={styles.negrita}>Precio: {item.precio}</Text>
            <Text style={styles.negrita}>Cantidad: 1</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
  return (
    <ScrollView>
      <View>
        <View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Sucursal de Pago.
            </Text>
          </View>
          <FlatList
            data={carros_oferta}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View>
          <Card>
            <Card.Content
              style={{
                display: 'flex',
                gap: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Direccion y Pago
              </Text>
              <TextInput
                label="Direccion de Entrega"
                value={text}
                mode="outlined"
                onChangeText={text => setText(text)}
              />
              <SafeAreaView style={styles.container}>
                <SegmentedButtons
                  value={value}
                  onValueChange={setValue}
                  buttons={[
                    {
                      value: 'BBVA',
                      label: 'BBVA',
                    },
                    {
                      value: 'MasterCard',
                      label: 'MasterCard',
                    },
                    {value: 'AV VILLAS', label: 'AV VILLAS'},
                  ]}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  <Text style={styles.negrita}>$ 130.394.234.999</Text>
                  <Button buttonColor="#0ac404" textColor="white">
                    PAGAR
                  </Button>
                </View>
              </SafeAreaView>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default SucursalScreen;
