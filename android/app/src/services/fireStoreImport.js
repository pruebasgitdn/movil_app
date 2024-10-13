import firestore from '@react-native-firebase/firestore';
import {readFile} from 'react-native-fs'; // leer archivos
import productsData from '../services/db.json';

// Importar datos desde el archivo JSON
export const importDataToFirestore = async () => {
  try {
    const products = productsData.products;

    // Subir cada producto a Firestore
    for (let product of products) {
      await firestore().collection('products').doc(product.id.toString()).set({
        title: product.title,
        description: product.description,
        imgSrc: product.imgSrc,
        category: product.category,
        price: product.price,
        brand: product.brand,
      });
      console.log(`Producto ${product.id} importado correctamente`);
    }
  } catch (error) {
    console.error('Error importando productos a Firestore:', error);
  }
};
