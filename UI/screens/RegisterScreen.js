import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {Card, TextInput, Button, List} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {usuarios} from '../../constants'; // Importando el array de usuarios

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
    setMunicipios(departamentos[dept] || []); // Actualizar municipios según el departamento seleccionado
  };

  // Validar el formulario
  const validateForm = () => {
    const {
      usuario,
      contraseña,
      correo,
      direccion,
      fechaNacimiento,
      departamento,
      municipio,
    } = formData;

    if (
      !usuario ||
      !contraseña ||
      !correo ||
      !direccion ||
      !fechaNacimiento ||
      !departamento ||
      !municipio
    ) {
      // Mostrar alerta si falta algún campo
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return false;
    }

    return true; // El formulario es válido
  };

  // Función para registrar un nuevo usuario
  const handleRegister = () => {
    if (validateForm()) {
      // Generar ID único para el nuevo usuario
      const newUserId = usuarios.length + 1;

      // Crear nuevo objeto usuario
      const newUser = {id: newUserId, ...formData};

      // Agregar el nuevo usuario al array `usuarios`
      usuarios.push(newUser);

      // Mostrar los datos en consola
      console.log('Nuevo usuario registrado:', newUser);
      console.log('Usuarios actuales:', usuarios);

      // Simular una alerta de éxito
      Alert.alert(
        'Registro exitoso',
        `Usuario ${formData.usuario} registrado con éxito.`,
      );

      // Redirigir al usuario a la pantalla de inicio
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

              <List.Section
                title={<Text style={styles.listTitle}>Ubicación</Text>}
                style={styles.ubicacion_container}>
                {/* Acordeón de Departamento */}
                <List.Accordion
                  title={<Text>Departamento</Text>}
                  left={props => <List.Icon {...props} icon="folder" />}>
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
