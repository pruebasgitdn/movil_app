import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {Card, Icon, Button} from 'react-native-paper';
import styles from '../../styles/globalStyles';

const ProfileScreen = ({user, navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        alignContent: 'center',
        marginHorizontal: '5%',
        marginTop: '25%',
      }}>
      <Card>
        <Card.Content
          style={{
            backgroundColor: '#0394fc',
            padding: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Image
            src={user.foto}
            style={{
              width: 150,
              height: 150,
              borderRadius: 70,
            }}
          />
          <Text style={styles.profile_letra}>
            {user.nombre} {user.apellidos[0]} {user.apellidos[1]}
          </Text>
          <Text style={styles.profile_subletra}>{user.fecha}</Text>
        </Card.Content>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 10,
          }}>
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
        <View
          style={{
            borderBottomColor: '#9e9c98',
            borderBottomWidth: 1,
            marginHorizontal: 50,
            marginVertical: 15,
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 10,
          }}>
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
