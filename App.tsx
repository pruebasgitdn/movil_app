import React, {useContext, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider, Avatar, Button} from 'react-native-paper';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import styles from './styles/globalStyles';

import HomeScreen from './UI/screens/HomeScreen';
import ShopCartScreen from './UI/screens/ShopCartScreen';
import ProfileScreen from './UI/screens/ProfileScreen';
import MisComprasScreen from './UI/screens/MisComprasScreen';
import MisFavoScreen from './UI/screens/MisFavoScreen';

import {item_detalle_ejemplo, user_ejemplo} from './constants';
import LoginScreen from './UI/screens/LoginScreen';
import RegisterScreen from './UI/screens/RegisterScreen';
import ArticulosScreen from './UI/screens/ArticulosScreen';
import OfertasScreen from './UI/screens/OfertasScreen';
import AyudaScreen from './UI/screens/AyudaScreen';
import DetalleScreen from './UI/screens/DetalleScreen';
import SucursalScreen from './UI/screens/SucursalScreen';
import {CartContext, CartProvider} from './context/CartContext';
import {View, Text} from 'react-native';
import AuthCheck from './UI/components/AuthCheck';
import TecnoProducts from './UI/components/TecnoProducts';
import RopaProducts from './UI/components/RopaProducts';
import AseoProducts from './UI/components/AseoProducts';
import AutoProducts from './UI/components/AutoProducts';
import HogarProducts from './UI/components/HogarProducts';
import {importDataToFirestore} from './android/app/src/services/fireStoreImport';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  // useEffect(() => {
  //   importDataToFirestore();
  // }, []);

  function Cart() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="ShopCartScreen"
          component={ShopCartScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="SucursalScreen"
          component={SucursalScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="ArticulosScreen"
          component={ArticulosScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="DetalleScreen"
          component={DetalleScreen}
        />
      </Stack.Navigator>
    );
  }

  function Profile() {
    //AUTENTICACION PA MOSTRAR O NO PESTAÑAS
    const {user} = useContext(CartContext); // Acceso al contexto

    return (
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="ProfileScreen">
          {props => <ProfileScreen {...props} user={user}
           />}
        </Stack.Screen> */}
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="MisComprasScreen"
          component={MisComprasScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="MisFavoScreen"
          component={MisFavoScreen}
        />
      </Stack.Navigator>
    );
  }

  function Home() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="ArticulosScreen"
          component={ArticulosScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="DetalleScreen"
          component={DetalleScreen}
        />
        {/* <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="DetalleScreen">
          {props => <DetalleScreen {...props} item={item_detalle_ejemplo} />}
        </Stack.Screen> */}
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="OfertasScreen"
          component={OfertasScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="ShopCartScreen"
          component={ShopCartScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="MisComprasScreen"
          component={MisComprasScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="MisFavoScreen"
          component={MisFavoScreen}
        />
      </Stack.Navigator>
    );
  }

  function AyudaSoporte() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="AyudaScreen"
          component={AyudaScreen}
        />
      </Stack.Navigator>
    );
  }

  function Products() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="ArticulosScreen"
          component={ArticulosScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="OfertasScreen"
          component={OfertasScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="DetalleScreen"
          component={DetalleScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="TecnoProducts"
          component={TecnoProducts}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="RopaProducts"
          component={RopaProducts}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="AseoProducts"
          component={AseoProducts}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="AutoProducts"
          component={AutoProducts}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="HogarProducts"
          component={HogarProducts}
        />
      </Stack.Navigator>
    );
  }

  //PANTALLAS BAJO NAV
  function MyTabs() {
    //AUTENTICACION PA MOSTRAR O NO PESTAÑAS
    const {isAuthenticated, state} = useContext(CartContext); // Acceso al contexto

    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Inicio" component={Home} />

        {state.isAuthenticated && (
          <>
            <Tab.Screen name="Compras" component={Cart} />
            <Tab.Screen name="Perfil" component={Profile} />
            <Tab.Screen name="Productos" component={Products} />
          </>
        )}

        <Tab.Screen name="Soporte" component={AyudaSoporte} />
      </Tab.Navigator>
    );
  }

  return (
    //COntext.Provider
    <PaperProvider>
      <CartProvider>
        <NavigationContainer>
          {/* <AuthCheck /> */}
          <MyTabs />
        </NavigationContainer>
      </CartProvider>
    </PaperProvider>
  );
};

export default App;
