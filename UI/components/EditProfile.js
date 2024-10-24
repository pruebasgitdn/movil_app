import React, {useContext, useState} from 'react';
import {View, ScrollView, Text, Alert} from 'react-native';
import {Card, Button, TextInput, List} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {CartContext} from '../../context/CartContext';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const departamentos = {
  Antioquia: ['Medellín', 'Envigado', 'Bello', 'Itagüí', 'Rionegro'],
  Cundinamarca: ['Bogotá', 'Soacha', 'Chía', 'Zipaquirá', 'Facatativá'],
  Santander: [
    'Bucaramanga',
    'Floridablanca',
    'Giron',
    'Barrancabermeja',
    'Piedecuesta',
  ],
  'Valle del Cauca': ['Cali', 'Palmira', 'Buenaventura', 'Tuluá', 'Buga'],
  Monteria: ['Montería', 'Cereté', 'Lorica', 'Planeta Rica', 'Sahagún'],
};

const EditProfile = ({navigation}) => {
  const {state, dispatch} = useContext(CartContext);
  const [selectedDept, setSelectedDept] = useState(
    state.user?.departamento || '',
  );
  const [selectedCity, setSelectedCity] = useState(state.user?.municipio || '');
  const [formData, setFormData] = useState({
    usuario: state.user?.usuario || '',
    correo: state.user?.correo || '',
    contraseña: state.user?.contraseña || '',
    direccion: state.user?.direccion || '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({...prevData, [field]: value}));
  };

  const getEditedValues = () => {
    //extraer claves de formdata como usuario coorreo etc y recorrer, las compara y con el estado y si ha hehco una modificaion lo almacena en editedVALUES
    const editedValues = {};
    Object.keys(formData).forEach(key => {
      if (formData[key] !== state.user?.[key]) {
        editedValues[key] = formData[key];
      }
    });
    if (selectedDept !== state.user?.departamento) {
      editedValues.departamento = selectedDept;
    }
    if (selectedCity !== state.user?.municipio) {
      editedValues.municipio = selectedCity;
    }
    return editedValues;
  };

  const handleEdit = async () => {
    const editedValues = getEditedValues();
    if (Object.keys(editedValues).length === 0) {
      Alert.alert('No se realizaron cambios.');
      return;
    }

    // Validaciones simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      Alert.alert('Por favor ingresa un correo válido.');
      return;
    }

    if (formData.direccion.length > 30) {
      Alert.alert('La dirección no puede tener más de 30 caracteres.');
      return;
    }

    if (formData.contraseña.length > 8) {
      Alert.alert('La contraseña no puede tener más de 8 caracteres.');
      return;
    }

    if (formData.usuario.length > 10) {
      Alert.alert('El usuario no puede tener más de 10 caracteres.');
      return;
    }

    const currentUser = auth().currentUser; // Obtener el usuario actual de Firebase Auth

    if (!currentUser) {
      Alert.alert('Usuario no autenticado.');
      return;
    }

    try {
      //Reautenticacion
      const credential = auth.EmailAuthProvider.credential(
        currentUser.email,
        formData.contraseña,
      );

      await currentUser.reauthenticateWithCredential(credential);

      // Cambiar el correo en Firebase Auth
      if (editedValues.correo) {
        await currentUser.updateEmail(editedValues.correo);
      }

      await firestore()
        .collection('usuarios')
        .doc(currentUser.uid) // Utiliza el UID del usuario aut como ID del document
        .update(editedValues);

      // Dispatch
      dispatch({
        type: 'EDIT_PROFILE',
        payload: editedValues,
      });

      Alert.alert('Perfil actualizado exitosamente.');
      navigation.navigate('ProfileScreen');
    } catch (error) {
      console.log('Error al editar el perfil:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container_register}>
        <Card style={styles.form_edit}>
          <Text style={styles.textregister}>Editar Perfil</Text>

          <TextInput
            label="Usuario"
            style={styles.register_inps}
            mode="outlined"
            activeOutlineColor="#097c99"
            value={formData.usuario}
            onChangeText={text => handleInputChange('usuario', text)}
          />
          <TextInput
            label="Correo"
            style={styles.register_inps}
            mode="outlined"
            activeOutlineColor="#097c99"
            value={formData.correo}
            onChangeText={text => handleInputChange('correo', text)}
          />
          <TextInput
            label="Contraseña"
            style={styles.register_inps}
            mode="outlined"
            activeOutlineColor="#097c99"
            value={formData.contraseña}
            onChangeText={text => handleInputChange('contraseña', text)}
          />
          <TextInput
            label="Dirección"
            style={styles.register_inps}
            mode="outlined"
            activeOutlineColor="#097c99"
            value={formData.direccion}
            onChangeText={text => handleInputChange('direccion', text)}
          />

          <Text style={styles.ubi}>
            Ubicación Actual: {state.user?.departamento} -{' '}
            {state.user?.municipio}
          </Text>

          <List.Section
            title={<Text style={styles.listTitle}>Seleccionar Ubicación</Text>}
            style={styles.ubicacion_container}>
            <List.Accordion
              title="Departamento"
              left={props => <List.Icon {...props} icon="folder" />}>
              {Object.keys(departamentos).map(dept => (
                <List.Item
                  key={dept}
                  title={dept}
                  onPress={() => setSelectedDept(dept)}
                />
              ))}
            </List.Accordion>
            {selectedDept && (
              <Text style={styles.selectedText}>
                Departamento seleccionado: {selectedDept}
              </Text>
            )}

            <List.Accordion
              title="Municipio"
              left={props => <List.Icon {...props} icon="folder" />}>
              {departamentos[selectedDept]?.map(city => (
                <List.Item
                  key={city}
                  title={city}
                  onPress={() => setSelectedCity(city)}
                />
              ))}
            </List.Accordion>
          </List.Section>
          {selectedCity && (
            <Text style={styles.selectedText}>
              Municipio seleccionado: {selectedCity}
            </Text>
          )}

          <View style={styles.containerbts_register}>
            <Button buttonColor="#06b81a" mode="contained" onPress={handleEdit}>
              Editar cuenta
            </Button>
            <Button
              onPress={() => navigation.navigate('ProfileScreen')}
              mode="contained"
              style={styles.btns_reg}>
              Cancelar
            </Button>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
