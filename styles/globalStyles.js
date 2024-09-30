//Aplicar estilos react-native
import {StyleSheet} from 'react-native';

//Crear hoja de estilo => styles
const styles = StyleSheet.create({
  cart: {
    backgroundColor: '#34A84A',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3.85,
    elevation: 5,
  },

  foto: {
    width: 100,
    height: 100,
    borderRadius: 40,
    marginRight: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sub_home: {
    textAlign: 'center',
    fontSize: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  menu_container: {
    gap: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_menu: {
    width: '70%',
    marginTop: 10,
  },
  titulo_home: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    borderRadius: 8,
    padding: 15,
  },
  card_home: {
    width: '80%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // Para alinear el texto en la parte inferior
    alignItems: 'center', // Para centrar el texto horizontalmente
    marginBottom: '40%',
  },

  //ESTILOS FORM
  form_container: {
    display: 'flex',
    backgroundColor: '#D9DCE0',
    borderRadius: 10,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitulo: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '200',
    color: '#FFFFFF',
  },

  //SEARCH_BAR
  search_bar: {
    borderRadius: 10,
  },

  negrita: {
    marginVertical: 3,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  subnegrita: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  descripcion: {
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
  },

  //PROFILE
  profile_letra: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  profile_subletra: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },

  //DETALLE
  textodetalle: {
    fontSize: 16,
    color: '#3b3a39',
  },

  //BOTOM AVATAR CERRAR SESION
  topnav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    zIndex: 1,
    padding: 10,
    gap: 20,
  },

  topsesion: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    gap: 50,
    zIndex: 3333,
  },
  btncerrarsesion: {
    backgroundColor: '#ff0000',
    fontSize: 20,
  },
  usertop: {
    fontStyle: 'italic',
    fontWeight: '600',
    display: 'flex',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 20,
  },
  inic_top: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 8,
    height: 45,
    zIndex: 1,
    backgroundColor: '#4391ed',
    padding: 4,
  },

  btns_tpnv: {
    display: 'flex',
    flexDirection: 'row',

    zIndex: 3,
  },
});

export default styles;
