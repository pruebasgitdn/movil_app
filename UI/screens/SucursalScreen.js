import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
  Linking,
} from 'react-native';
import {Card, Button, TextInput, SegmentedButtons} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {initMercadoPago} from '@mercadopago/sdk-react';
import {Payment, MercadoPagoConfig, Preference} from 'mercadopago';
import {handleIntegrateMP} from '../../MPintegration';

const SucursalScreen = ({route}) => {
  const {aux, total} = route.params;
  const [cardToken, setCardToken] = React.useState(null);
  const [error, setError] = React.useState('');
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState('');

  const handleCardForm = async data => {
    const {token, error} = data;
    if (error) {
      setError(error);
      return;
    }
    setCardToken(token);
  };

  const handlePayment = async () => {
    const data = await handleIntegrateMP();
    if (!data) {
      return console.log('Ha ocurrido un error');
    }
    Linking.openURL(data);
  };

  const renderItem = ({item}) => (
    <View style={styles.container_sucursal}>
      <Card>
        <Card.Content style={styles.card_sucursal}>
          <View>
            <Image
              source={{uri: item.imgSrc}}
              style={styles.img_product_sucursal}
            />
          </View>

          <View style={styles.info_product_sucursal}>
            <Text style={styles.negrita}>{item.brand}</Text>
            <Text style={styles.textodetalle}>{item.description}</Text>
            <Text style={styles.negrita}>
              Precio: {item.offer ? item.offerprice : item.price}
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
        <Text style={styles.textlogin}>Sucursal de Pago.</Text>
        <FlatList
          data={aux}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        <Card>
          <Card.Content style={styles.sucursal_direccion_pago}>
            <Text style={styles.textlogin}>Dirección y Pago</Text>
            <TextInput
              label="Dirección de Entrega"
              value={text}
              maxLength={30}
              mode="outlined"
              onChangeText={setText}
            />
            <SafeAreaView style={styles.container}>
              <SegmentedButtons
                value={value}
                onValueChange={setValue}
                buttons={[
                  {value: 'visa', label: 'Visa'},
                  {value: 'master', label: 'MasterCard'},
                ]}
              />

              <View style={styles.sucursal_total_pagar}>
                <Text style={styles.negrita}>$ {total}</Text>
                <Button
                  onPress={handlePayment}
                  buttonColor="#0ac404"
                  textColor="white">
                  PAGAR
                </Button>
              </View>
            </SafeAreaView>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default SucursalScreen;
