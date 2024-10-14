import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {Card, TextInput, Button, List, HelperText} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {CartContext} from '../../context/CartContext';

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
  const {dispatch, state} = useContext(CartContext);
  const [municipios, setMunicipios] = useState([]);
  const [errors, setErrors] = useState({}); // almacenar errores

  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: '',
    correo: '',
    direccion: '',
    fechaNacimiento: '',
    departamento: '',
    municipio: '',
  });

  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value});
    setErrors({...errors, [name]: ''});
  };

  const handleSelectDept = dept => {
    handleChange('departamento', dept);
    setMunicipios(departamentos[dept] || []);
  };

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

    let valid = true;
    let newErrors = {};

    if (!usuario) {
      newErrors.usuario = 'El usuario es obligatorio.';
      valid = false;
    } else if (usuario.length > 10) {
      newErrors.usuario = 'Máximo 10 caracteres.';
      valid = false;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:,.<>\/?])(?=.*[0-9]).{1,8}$/;
    if (!contraseña) {
      newErrors.contraseña = 'La contraseña es obligatoria.';
      valid = false;
    } else if (!passwordRegex.test(contraseña)) {
      newErrors.contraseña =
        'La contraseña debe tener máximo 8 caracteres, al menos una mayúscula, una letra, un número y un carácter especial.';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo) {
      newErrors.correo = 'El correo es obligatorio.';
      valid = false;
    } else if (!emailRegex.test(correo)) {
      newErrors.correo = 'El correo electrónico no es válido.';
      valid = false;
    }

    if (!direccion) {
      newErrors.direccion = 'La dirección es obligatoria.';
      valid = false;
    } else if (direccion.length > 30) {
      newErrors.direccion = 'Máximo 30 caracteres.';
      valid = false;
    }

    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!fechaNacimiento) {
      newErrors.fechaNacimiento = 'La fecha de nacimiento es obligatoria.';
      valid = false;
    } else if (!dateRegex.test(fechaNacimiento)) {
      newErrors.fechaNacimiento =
        'La fecha debe estar en el formato YYYY/MM/DD.';
      valid = false;
    } else {
      const today = new Date();
      const birthDate = new Date(fechaNacimiento);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      if (age < 18 || age > 50) {
        newErrors.fechaNacimiento =
          'No está en el rango de edad para crear la cuenta. Debe tener entre 18 y 50 años.';
        valid = false;
      }
    }

    if (!departamento) {
      newErrors.departamento = 'Seleccione un departamento.';
      valid = false;
    }

    if (!municipio) {
      newErrors.municipio = 'Seleccione un municipio.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleRegister = async () => {
    if (validateForm()) {
      try {
        const userCredential = await auth().createUserWithEmailAndPassword(
          formData.correo,
          formData.contraseña,
        );

        // Obtener el ID del nuevo usuario
        const userId = userCredential.user.uid;

        // Guardar datos adicionales en usuarios documento (numero id del auth user) y seteamos los campos con el valor
        await firestore().collection('usuarios').doc(userId).set({
          usuario: formData.usuario,
          direccion: formData.direccion,
          fechaNacimiento: formData.fechaNacimiento,
          departamento: formData.departamento,
          municipio: formData.municipio,
          contraseña: formData.contraseña,
          favoritos: [],
          carrito: [],
          compras: [],
        });

        //DESPUES DE TAN QUEDA LOGUEADO SI SABE
        dispatch({type: 'LOGIN', payload: formData});
        Alert.alert(
          'Registro exitoso',
          `Usuario ${formData.usuario} registrado con éxito.`,
        );

        navigation.navigate('HomeScreen');
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <ScrollView style={styles.bgpur}>
      <View style={styles.container_register}>
        <Card style={styles.register_form}>
          <Text style={styles.textregister}>Registro de usuario</Text>
          <Card.Content>
            <TextInput
              label="Usuario"
              style={styles.register_inps}
              mode="outlined"
              maxLength={10}
              value={formData.usuario}
              onChangeText={value => handleChange('usuario', value)}
            />
            <HelperText type="error" visible={!!errors.usuario}>
              {errors.usuario}
            </HelperText>

            <TextInput
              label="Contraseña"
              secureTextEntry={true}
              maxLength={8}
              mode="outlined"
              value={formData.contraseña}
              onChangeText={value => handleChange('contraseña', value)}
            />
            <HelperText type="error" visible={!!errors.contraseña}>
              {errors.contraseña}
            </HelperText>

            <TextInput
              label="Correo"
              mode="outlined"
              value={formData.correo}
              onChangeText={value => handleChange('correo', value)}
            />
            <HelperText type="error" visible={!!errors.correo}>
              {errors.correo}
            </HelperText>

            <TextInput
              label="Dirección"
              mode="outlined"
              maxLength={30}
              value={formData.direccion}
              onChangeText={value => handleChange('direccion', value)}
            />
            <HelperText type="error" visible={!!errors.direccion}>
              {errors.direccion}
            </HelperText>

            <TextInput
              label="Fecha de nacimiento"
              mode="outlined"
              placeholder="YYYY/MM/DD"
              value={formData.fechaNacimiento}
              onChangeText={value => handleChange('fechaNacimiento', value)}
            />
            <HelperText type="error" visible={!!errors.fechaNacimiento}>
              {errors.fechaNacimiento}
            </HelperText>

            {/* DEPARTAMENTOS Y MUNICIPIO */}
            <List.Section
              title={<Text style={styles.listTitle}>Ubicación</Text>}
              style={styles.ubicacion_container}>
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

              {formData.departamento ? (
                <Text style={styles.selectedText}>
                  Departamento seleccionado: {formData.departamento}
                </Text>
              ) : null}

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
                  <List.Item title={<Text>Seleccione un departamento</Text>} />
                )}
              </List.Accordion>

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
                mode="contained"
                style={styles.btns_reg}>
                Volver al inicio
              </Button>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
