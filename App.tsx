import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

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

const App = () => {
  //FlatList es un componente en React Native que se utiliza para renderizar listas grandes y optimizadas.
  const Stack = createNativeStackNavigator();

  // Creación del Bottom Tab Navigator
  const Tab = createBottomTabNavigator();

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
      </Stack.Navigator>
    );
  }

  function Profile() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="ProfileScreen"
          component={props => <ProfileScreen {...props} user={user_ejemplo} />}
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
          component={props => (
            <DetalleScreen {...props} item={item_detalle_ejemplo} />
          )}
        />
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
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Comptas" component={Cart} />
        <Tab.Screen name="Perfil" component={Profile} />
        <Tab.Screen name="Productos" component={Products} />
        <Tab.Screen name="Soporte" component={AyudaSoporte} />
      </Tab.Navigator>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
