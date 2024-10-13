import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Card, SegmentedButtons} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/globalStyles';

const DetalleScreen = ({route, navigation}) => {
  const {item} = route.params; // Extraer item de los parámetros de navegación

  return (
    <ScrollView>
      <View style={styles.container_detalle}>
        <ScrollView>
          <Card>
            <Card.Cover src={item.imgSrc} />
            <Card.Content>
              <Text style={styles.titlecardetalle}>{item.title}</Text>
              <Text style={styles.negrita}>
                Descripcion:
                <View>
                  <Text style={styles.textodetalle}>{item.description}</Text>
                </View>
              </Text>

              <Text style={styles.negrita}>
                Precio:
                <View>
                  <Text style={styles.textodetalle}>{item.price}</Text>
                </View>
              </Text>

              {/* MEDIOS DE PAGO */}
              <View style={styles.detalle_mediospago}>
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

              {/* INPUTS */}
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
