import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {Card, TextInput, Button, List} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {usuarios} from '../../constants'; // Importando el array de usuarios
import {validateRegistrationForm} from '../components/FormValidator';

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

const RegisterScreen = ({navigation}) => {
  // Inicializar formData
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: '',
    correo: '',
    direccion: '',
    fechaNacimiento: '',
    departamento: '',
    municipio: '',
  });

  const [municipios, setMunicipios] = useState([]);

  // Asignar cambios al formData
  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  // Seleccionar departamento
  const handleSelectDept = dept => {
    handleChange('departamento', dept); // Actualizar el departamento
    setMunicipios(departamentos[dept] || []); // Actualizar municipios con el departamento seleccionado
  };

  // // Validar el formulario
  // const validateForm = () => {
  //   const {
  //     usuario,
  //     contraseña,
  //     correo,
  //     direccion,
  //     fechaNacimiento,
  //     departamento,
  //     municipio,
  //   } = formData;

  //   if (
  //     !usuario ||
  //     !contraseña ||
  //     !correo ||
  //     !direccion ||
  //     !fechaNacimiento ||
  //     !departamento ||
  //     !municipio
  //   ) {
  //     // Mostrar alerta si falta algún campo
  //     Alert.alert('Error', 'Todos los campos son obligatorios.');
  //     return false;
  //   }

  //   // Validar contraseña: 1 mayúscula, 1 carácter especial,1-8 caracteres
  //   const passwordRegex =
  //     /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:,.<>\/?]).{1,8}$/;

  //   //.test()verifica el regex = true o false
  //   if (!passwordRegex.test(contraseña)) {
  //     Alert.alert(
  //       'Error',
  //       'La contraseña debe tener máximo 8 caracteres, al menos una mayúscula, una letra, un número y un carácter especial.',
  //     );
  //     return false;
  //   }

  //   // Validar correo: formato de correo válido
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(correo)) {
  //     Alert.alert('Error', 'El correo electrónico no es válido.');
  //     return false;
  //   }

  //   // Validar formato de fecha: YYYY/MM/DD
  //   const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
  //   if (!dateRegex.test(fechaNacimiento)) {
  //     Alert.alert('Error', 'La fecha debe estar en el formato YYYY/MM/DD.');
  //     return false;
  //   }

  //   // Validar edad: mayor de 18 y menor de 50 años
  //   //Se obtiene la edad actual today,y se convierte a fecha, luego la de la nacimiento tambien, se calcula el año apartir de hoy menos el de la fecha de nacimiento y los meses de diferenica tambien
  //   const today = new Date();
  //   const birthDate = new Date(fechaNacimiento);
  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   const monthDiff = today.getMonth() - birthDate.getMonth();

  //   if (
  //     monthDiff < 0 ||
  //     (monthDiff === 0 && today.getDate() < birthDate.getDate())
  //   ) {
  //     age--;
  //   }

  //   if (age < 18 || age > 50) {
  //     Alert.alert(
  //       'Error',
  //       'No está disponible en el rango de edad para crear la cuenta. Debe tener entre 18 y 50 años.',
  //     );
  //     return false;
  //   }

  //   return true; // El formulario es válido
  // };

  // Función para registrar un nuevo usuario
  const handleRegister = () => {
    if (validateRegistrationForm(formData)) {
      const newUserId = usuarios.length + 1;
      const newUser = {id: newUserId, ...formData};
      usuarios.push(newUser);
      Alert.alert(
        'Registro exitoso',
        `Usuario ${formData.usuario} registrado con éxito.`,
      );
      navigation.navigate('HomeScreen');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container_register}>
        <View>
          <Text style={styles.textregister}>Registro de usuario</Text>
          <Card style={styles.form_container}>
            <Card.Content>
              <TextInput
                label="Usuario"
                mode="outlined"
                maxLength={10}
                value={formData.usuario}
                onChangeText={value => handleChange('usuario', value)}
              />
              <TextInput
                label="Contraseña"
                secureTextEntry={true}
                maxLength={8}
                mode="outlined"
                value={formData.contraseña}
                onChangeText={value => handleChange('contraseña', value)}
              />
              <TextInput
                label="Correo"
                mode="outlined"
                value={formData.correo}
                onChangeText={value => handleChange('correo', value)}
              />
              <TextInput
                label="Dirección"
                mode="outlined"
                maxLength={30}
                value={formData.direccion}
                onChangeText={value => handleChange('direccion', value)}
              />
              <TextInput
                label="Fecha de nacimiento"
                mode="outlined"
                placeholder="YYYY/MM/DD"
                value={formData.fechaNacimiento}
                onChangeText={value => handleChange('fechaNacimiento', value)}
              />

              {/* DEPARTAMENTOS   Y MUNICIPIO*/}
              <List.Section
                title={<Text style={styles.listTitle}>Ubicación</Text>}
                style={styles.ubicacion_container}>
                {/* Acordeón de Departamento */}
                <List.Accordion
                  title={<Text>Departamento</Text>}
                  left={props => <List.Icon {...props} icon="folder" />}>
                  {/* Recorrer el departamento como dept renderizando el item de la lista y su valor, al presionar se asigna el el dept al formdata */}
                  {Object.keys(departamentos).map(dept => (
                    <List.Item
                      key={dept}
                      title={dept}
                      onPress={() => handleSelectDept(dept)}
                    />
                  ))}
                </List.Accordion>

                {/* Mostrar departamento seleccionado */}
                {formData.departamento ? (
                  <Text style={styles.selectedText}>
                    Departamento seleccionado: {formData.departamento}
                  </Text>
                ) : null}

                {/* Acordeón de Municipio */}
                <List.Accordion
                  title={<Text>Municipio</Text>}
                  left={props => <List.Icon {...props} icon="folder" />}>
                  {/* Recorremos el array de municipios y asignamos al formdata que se setea de acuerdo al departametno seleccionado*/}
                  {municipios.length > 0 ? (
                    municipios.map((municipio, index) => (
                      <List.Item
                        key={index}
                        title={municipio}
                        onPress={() => handleChange('municipio', municipio)}
                      />
                    ))
                  ) : (
                    <List.Item
                      title={<Text>Seleccione un departamento</Text>}
                    />
                  )}
                </List.Accordion>

                {/* Mostrar municipio seleccionado */}
                {formData.municipio ? (
                  <Text style={styles.selectedText}>
                    Municipio seleccionado: {formData.municipio}
                  </Text>
                ) : null}
              </List.Section>

              <View style={styles.containerbts_register}>
                <Button mode="contained" onPress={handleRegister}>
                  Crear cuenta
                </Button>

                <Button
                  onPress={() => navigation.navigate('HomeScreen')}
                  mode="contained-tonal">
                  Volver al inicio
                </Button>
              </View>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
