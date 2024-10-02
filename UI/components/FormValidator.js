// components/FormValidator.js

import {Alert} from 'react-native';

// Validar formulario de registro
export const validateRegistrationForm = formData => {
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
    Alert.alert('Error', 'Todos los campos son obligatorios.');
    return false;
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:,.<>\/?]).{1,8}$/;

  if (!passwordRegex.test(contraseña)) {
    Alert.alert(
      'Error',
      'La contraseña debe tener máximo 8 caracteres, al menos una mayúscula, una letra, un número y un carácter especial.',
    );
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    Alert.alert('Error', 'El correo electrónico no es válido.');
    return false;
  }

  const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
  if (!dateRegex.test(fechaNacimiento)) {
    Alert.alert('Error', 'La fecha debe estar en el formato YYYY/MM/DD.');
    return false;
  }

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
    Alert.alert('Error', 'Debe tener entre 18 y 50 años.');
    return false;
  }

  return true; // Formulario válido
};

// Validar formulario de login
// export const validateLoginForm = password => {
//   if (!password) {
//     Alert.alert('Error', 'La contraseña es obligatoria.');
//     return false;
//   }

//   // Validar formato de correo
//   const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:,.<>\/?]).{1,8}$/;

//   if (!passwordRegex.test(password)) {
//     Alert.alert('Error', 'La contraseña no es válida.');
//     return false;
//   }

//   return true; // Formulario válido
// };
