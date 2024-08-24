import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {Card, Icon, Button, List, TextInput} from 'react-native-paper';
import styles from '../../styles/globalStyles';

const AyudaScreen = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignContent: 'center',
        marginHorizontal: '5%',
        marginTop: '25%',
      }}>
      <Card>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Ayuda y Soporte.
        </Text>

        <Card.Content>
          <Text style={styles.descripcion}>
            Describe la manera en que podremos ayudarte, o serte útil.
          </Text>
          <View
            style={{
              display: 'flex',
              gap: 20,
            }}>
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
                multiline={true}
                label="Descripcion:"
                numberOfLines={10}
                mode="outlined"
                style={{height: 200, textAlignVertical: 'top'}}
              />
            </View>
            <Button buttonColor="#0ac404" textColor="white">
              Enviar
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default AyudaScreen;
