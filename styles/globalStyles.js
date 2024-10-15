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
    fontSize: 23,
    fontWeight: 'bold',
    padding: 15,
    color: '#000000',
  },
  card_home: {
    width: '90%',
  },
  cardlogin: {
    width: '90%',
    display: 'flex',
    margin: 5,
    justifyContent: 'space-around',
  },
  homebtn: {
    backgroundColor: '#0f86f2',
  },

  loginbnt: {
    backgroundColor: '#0f86f2',
    marginVertical: 10,
  },
  crearuna: {
    backgroundColor: '#bc005d',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // Para alinear el texto en la parte inferior
    alignItems: 'center', // Para centrar el texto horizontalmente
    marginBottom: '5%',
  },

  //ESTILOS FORM
  register_form: {
    display: 'flex',
    backgroundColor: '#edeced',
    justifyContent: 'center',
    width: '90%',
  },
  btns_reg: {
    backgroundColor: '#3d85c6',
  },

  form_container: {
    display: 'flex',
    backgroundColor: '#D9DCE0',
    justifyContent: 'center',
    width: '90%',
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
    fontWeight: '400',
    color: '#000000',
  },

  //SEARCH_BAR
  search_bar: {
    borderRadius: 10,
    margin: 5,
  },
  list_section: {
    width: 150,
  },

  btnfull: {
    width: 350,
  },
  searchbarcontainer: {
    backgroundColor: '#010f26',
    padding: 0,
  },
  ofer_art: {
    display: 'flex',
    marginRight: 8,
  },
  subsearchbarcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  list_sbar: {
    backgroundColor: '#010f26',
  },
  negrita: {
    marginVertical: 3,
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  subnegrita: {
    fontSize: 15,
    fontWeight: '500',
  },
  descripcion: {
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 12,
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

  titlecardetalle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
  },
  //DETALLE
  textodetalle: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'flex-end',
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

  backgroundLogin: {
    height: '100%',
    objectFit: 'cover',
  },

  containerlistselect: {
    display: 'flex',

    flexDirection: 'row',
  },
  container_card: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f4f4f4',
  },
  headerContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  cardContainer: {
    marginVertical: 10,
  },
  cardContent: {
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
    gap: 5,
    marginHorizontal: 7,
  },
  itemMarca: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  itemDescripcion: {
    fontSize: 14,
    color: '#000000',
  },
  itemPrecio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 5,
  },
  quantityContainer: {
    marginTop: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemCantidad: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: 10,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginVertical: 20,
  },
  footerbtns_cart: {
    display: 'flex',
    flexDirection: 'column',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  payButton: {
    paddingHorizontal: 20,
  },
  textlogin: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
    color: '#000000',
  },
  card_aut_home: {
    width: 350,
  },
  aut_text_home: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
  },
  containerlogin: {
    alignItems: 'center',
    top: '58%',
  },

  btnsloging: {
    backgroundColor: '#0f86f2',
    margin: 5,
  },

  barrasearch: {},
  textregister: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    padding: 5,
  },
  ubicacion_container: {
    display: 'flex',
    gap: 10,
  },
  containerbts_register: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginVertical: 10,
  },
  container_register: {
    alignItems: 'center',
    marginVertical: 20,
  },
  bgpur: {
    backgroundColor: '#062161',
  },
  loginfooter: {
    display: 'flex',
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_support: {
    display: 'flex',
    alignContent: 'center',
    marginHorizontal: '5%',
    marginTop: '25%',
  },
  list_support: {
    display: 'flex',
    gap: 20,
  },

  container_detalle: {
    display: 'flex',
    alignContent: 'center',
    marginVertical: 20,
  },
  card_detalle_text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  detalle_mediospago: {
    marginVertical: 10,
    gap: 4,
  },
  container_compras_hechas: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card_container_compras: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    overflow: 'scroll',
  },
  image_compras_hechas: {
    width: 120,
    height: 120,
    borderRadius: 40,
  },
  detalle_card_compras_hc: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  second_row_detalle_card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  container_favo: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card_container_favo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    overflow: 'scroll',
  },
  image_favo: {
    width: 120,
    height: 120,
    borderRadius: 40,
  },
  detalle_card_favo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    overflow: 'visible',
  },
  second_row_favo_card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  container_card_oferta: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  ofertas_nav: {
    backgroundColor: '#010f26',
    padding: 10,
  },
  container_profile: {
    display: 'flex',
    alignContent: 'center',
    marginHorizontal: '5%',
    marginTop: '25%',
  },
  profile_card: {
    backgroundColor: '#0394fc',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  profile_img: {
    width: 150,
    height: 150,
    borderRadius: 70,
  },
  container_btns_profile: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 15,
  },
  container_sucursal: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card_sucursal: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    overflow: 'scroll',
  },
  img_product_sucursal: {
    width: 120,
    height: 120,
    borderRadius: 40,
  },
  info_product_sucursal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  sucursal_direccion_pago: {
    display: 'flex',
    gap: 20,
  },
  ss: {
    width: '50%',
    alignContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  gridItem: {
    width: '48%',
  },
  gridArts: {
    margin: 2,
    alignContent: 'center',
  },
  card_total: {
    width: '100%',
  },
  text_pr: {
    color: '#000000',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  card_art: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sucursal_total_pagar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 5,
  },
  container_carro_vacio: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 200,
  },
  text_carro_vacio: {},
  btn_carro_vacio: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
  },

  btns_detalle_prd: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'column',
  },
});

export default styles;
