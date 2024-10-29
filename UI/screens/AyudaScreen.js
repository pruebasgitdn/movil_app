import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Card, List, Button, TextInput} from 'react-native-paper';
import styles from '../../styles/globalStyles';

const AyudaScreen = () => {
  const [description, setDescription] = useState('');

  const handleSendTicket = () => {
    if (description.length >= 5) {
      Alert.alert(
        'Ticket enviado',
        'Tu solicitud se ha enviado correctamente.',
      );
      setDescription(''); // Limpiiar campo despues de tan
    } else {
      Alert.alert('Error', 'La descripción debe tener al menos 5 caracteres.');
    }
  };

  return (
    <View style={styles.container_support}>
      <Card>
        <Text style={styles.textlogin}>Ayuda y Soporte.</Text>

        <Card.Content>
          <Text style={styles.descripcion}>
            Describe la manera en que podremos ayudarte, o serte útil.
          </Text>
          <View style={styles.list_support}>
            <List.Section>
              <List.Accordion
                title="Tipo de Solicitud"
                left={props => <List.Icon {...props} icon="star" />}>
                <List.Item title="Queja" />
                <List.Item title="Ayuda" />
                <List.Item title="Soporte" />
              </List.Accordion>
            </List.Section>

            <View>
              <TextInput
                multiline
                label="Descripcion:"
                value={description}
                onChangeText={setDescription}
                numberOfLines={10}
                mode="outlined"
                activeOutlineColor="#417548"
                style={{height: 200, textAlignVertical: 'top'}}
              />
            </View>
            <Button
              buttonColor="#0ac404"
              textColor="white"
              onPress={handleSendTicket}>
              Enviar
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default AyudaScreen;
