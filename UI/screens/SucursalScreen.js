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

const SucursalScreen = ({route}) => {
  const {aux, total} = route.params;

  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState('');
  const renderItem = ({item}) => (
    <View style={styles.container_sucursal}>
      <Card>
        <Card.Content style={styles.card_sucursal}>
          <View>
            <Image src={item.imgSrc} style={styles.img_product_sucursal} />
          </View>

          <View style={styles.info_product_sucursal}>
            <Text style={styles.negrita}>{item.brand}</Text>
            <Text style={styles.textodetalle}>{item.description}</Text>
            <Text style={styles.negrita}>
              Precio:{' '}
              {item.offer === true ? <>{item.offerprice}</> : <>{item.price}</>}
            </Text>
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
            <Text style={styles.textlogin}>Sucursal de Pago.</Text>
          </View>
          <FlatList
            data={aux}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View>
          <Card>
            <Card.Content style={styles.sucursal_direccion_pago}>
              <Text style={styles.textlogin}>Direccion y Pago</Text>
              <TextInput
                label="Direccion de Entrega"
                value={text}
                maxLength={30}
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
                <View style={styles.sucursal_total_pagar}>
                  <Text style={styles.negrita}>$ {total}</Text>
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
