import React, {useState} from 'react';
import {View, Text, Button, TextInput, ScrollView, Alert} from 'react-native';
import {Card, SegmentedButtons} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/globalStyles';

const DetalleScreen = ({route, navigation}) => {
  const {item} = route.params;
  const [question, setQuestion] = useState('');
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState('');

  const handleQuestions = () => {
    if (question.length >= 5) {
      Alert.alert(
        'Pregunta enviada',
        'Tu pregunta se ha enviado correctamente.',
      );
      setQuestion('');
    } else {
      Alert.alert('Error', 'La pregunta debe tener al menos 5 caracteres.');
    }
  };
  const handleComments = () => {
    if (comment.length >= 5) {
      Alert.alert(
        'Comentario enviado',
        'Tu comentario se ha enviado correctamente.',
      );
      setQuestion('');
    } else {
      Alert.alert('Error', 'El comentario debe tener al menos 5 caracteres.');
    }
  };
  const handleRate = () => {
    if (rate.length >= 5) {
      Alert.alert(
        'Calificación enviada',
        'Tu calificación se ha enviado correctamente.',
      );
      setQuestion('');
    } else {
      Alert.alert('Error', 'La calificación debe tener al menos 5 caracteres.');
    }
  };

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
                <Text style={styles.textodetalle}>{item.description}</Text>
              </Text>

              <Text style={styles.negrita}>
                Precio:
                <Text style={styles.textodetalle}>{item.price}</Text>
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
                <Button title="Enviar Preguntas" onPress={handleQuestions} />
              </View>
              <View>
                <Text style={styles.subnegrita}>Comentarios:</Text>
                <TextInput
                  placeholder="Añadir Comentario"
                  multiline
                  numberOfLines={4}
                  maxLength={40}
                />
                <Button title="Enviar Comentario" onPress={handleComments} />
              </View>

              <View>
                <Text style={styles.subnegrita}>Calificacion:</Text>
                <TextInput
                  placeholder="Añadir Calificacion"
                  multiline
                  numberOfLines={4}
                  maxLength={40}
                />
              </View>

              <Button title="Calificar" onPress={handleRate} />
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default DetalleScreen;
