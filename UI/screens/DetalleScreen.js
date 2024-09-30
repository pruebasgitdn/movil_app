import React from 'react';
import {View, Text, Image, Button, TextInput, ScrollView} from 'react-native';
import {Card, SegmentedButtons} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/globalStyles';

const DetalleScreen = ({route, navigation}) => {
  const {item} = route.params; // Extraer item de los parámetros de navegación

  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          alignContent: 'center',
          marginHorizontal: '5%',
          marginTop: '0%',
        }}>
        <ScrollView>
          <Card>
            <Card.Title
              titleStyle={{textAlign: 'center', fontWeight: 'bold'}}
              title={`Carro ${item.marca}`}
            />

            <Card.Cover
              src={item.imgSrc}
              style={{
                height: '15%',
                width: '90%',
                marginHorizontal: '3%',
              }}
            />
            <Card.Content>
              <Text style={styles.negrita}>
                Descripcion:{' '}
                <Text style={styles.textodetalle}>{item.descripcion} </Text>
              </Text>
              <Text style={styles.negrita}>
                Caracteristicas:{' '}
                <Text style={styles.textodetalle}>{item.caracteristicas} </Text>{' '}
              </Text>

              <Text style={styles.negrita}>
                Precio: <Text style={styles.textodetalle}>{item.precio}</Text>{' '}
              </Text>
              <View style={{marginVertical: 10, gap: 4}}>
                <Text style={styles.negrita}>Medios de pago:</Text>
                <SegmentedButtons
                  buttons={[
                    {
                      value: 'MasterCard',
                      label: 'MasterCard',
                    },
                    {
                      value: 'BBVA',
                      label: 'BBVA',
                    },
                    {value: 'AV VILLAS', label: 'AV VILLAS'},
                  ]}
                />
              </View>
              <View>
                <Text style={styles.subnegrita}>Preguntas:</Text>
                <TextInput
                  placeholder="Preguntas?"
                  multiline
                  numberOfLines={4}
                  maxLength={40}
                />
                <Button title="Enviar Preguntas" />
              </View>
              <View>
                <Text style={styles.subnegrita}>Comentarios:</Text>
                <TextInput
                  placeholder="Añadir Comentario"
                  multiline
                  numberOfLines={4}
                  maxLength={40}
                />
                <Button title="Enviar Comentario" />
              </View>

              <View>
                <Text style={styles.subnegrita}>Calificacion:</Text>
                <TextInput
                  placeholder="Añadir Calificacion"
                  multiline
                  numberOfLines={4}
                  maxLength={40}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',

                    justifyContent: 'center',
                  }}>
                  <Icon name="star" size={25} color="#0000ff" />
                  <Icon name="star" size={25} color="#0000ff" />
                  <Icon name="star" size={25} color="#0000ff" />
                  <Icon name="star" size={25} color="#0000ff" />
                </View>
              </View>

              <Button title="Calificar" />
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default DetalleScreen;
