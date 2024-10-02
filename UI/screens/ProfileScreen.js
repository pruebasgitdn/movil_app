import React, {useContext, useEffect} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {Card, Icon, Button, Avatar} from 'react-native-paper';
import styles from '../../styles/globalStyles';
import {CartContext} from '../../context/CartContext';

const ProfileScreen = ({navigation, route}) => {
  const {user, state, dispatch} = useContext(CartContext);

  useEffect(() => {
    console.log('User actualizado:', state.user);
  }, [state.user]);
  useEffect(() => {
    console.log('AUT:', state.isAuthenticated);
  }, [state.isAuthenticated]);

  return (
    <View style={styles.container_profile}>
      <Card>
        <Card.Content style={styles.profile_card}>
          <Avatar.Image
            size={100}
            source={require('../../styles/assets/avatar.png')}
          />
          <Text style={styles.profile_letra}>{state.user?.usuario}</Text>
          <Text style={styles.profile_subletra}>{state.user?.correo}</Text>
        </Card.Content>

        {/* ACCIONES COMPRAS */}
        <View style={styles.container_btns_profile}>
          <Text
            style={{
              textAlign: 'center',
            }}>
            Compras
          </Text>
          <Button
            buttonColor="#031e4d"
            textColor="white"
            onPress={() => navigation.navigate('MisComprasScreen')}>
            Ver mis compras.
          </Button>
          <Button
            buttonColor="#031e4d"
            textColor="white"
            onPress={() => navigation.navigate('MisFavoScreen')}>
            Ver mis favoritos.
          </Button>
        </View>

        {/* BARRA */}
        <View
          style={{
            borderBottomColor: '#9e9c98',
            borderBottomWidth: 1,
            marginHorizontal: 50,
            marginVertical: 15,
          }}
        />

        {/* ACCIONES PERFIL */}
        <View style={styles.container_btns_profile}>
          <Text
            style={{
              textAlign: 'center',
            }}>
            Acciones Usuario
          </Text>
          <Button buttonColor="red" textColor="white">
            Cerrar Sesion.
          </Button>
          <Button buttonColor="green" textColor="white">
            Editar Perfil.
          </Button>
        </View>
      </Card>
    </View>
  );
};

export default ProfileScreen;
