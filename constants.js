//Constantes => DB de Ejemplo

export const usuarios = [
  {
    id: 1,
    usuario: 'chuchaboy',
    contraseña: 'B@6789',
    correo: 'user1@example.com',
    direccion: 'Calle Jota 433',
    fechaNacimiento: '1963/01/21',
    departamento: 'Valle del Cauca',
    municipio: 'Cali',
    favoritos: [], // Array para guardar los favoritos
    carrito: [], // Array para guardar el carro de compras
    compras: [], // Array para guardar las compras realizadas
  },
  {
    id: 2,
    usuario: 'rataboy',
    contraseña: 'A@4535',
    correo: 'user341@example.com',
    direccion: 'Calle Ene 4',
    fechaNacimiento: '1963/01/21',
    departamento: 'Valle Cauca',
    municipio: 'Bello',
    favoritos: [], // Array para guardar los favoritos
    carrito: [], // Array para guardar el carro de compras
    compras: [], // Array para guardar las compras realizadas
  },
];

// export const carros = [
//   {
//     id: 1,
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     color: 'Blanco',
//     matricula: 'ABC1234',
//     imgSrc:
//       'https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_640.jpg',
//     precio: 15000,
//     descripcion: 'Un sedán confiable y eficiente.',
//   },
//   {
//     id: 2,
//     marca: 'Honda',
//     modelo: 'Civic',
//     color: 'Negro',
//     matricula: 'XYZ5678',
//     imgSrc: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_640.jpg',
//     precio: 16000,
//     descripcion: 'Compacto con gran rendimiento de combustible.',
//   },
//   {
//     id: 3,
//     marca: 'Ford',
//     modelo: 'Mustang',
//     color: 'Rojo',
//     matricula: 'DEF1234',
//     imgSrc:
//       'https://cdn.pixabay.com/photo/2018/07/18/17/27/nissan-skyline-3546824_640.jpg',
//     precio: 35000,
//     descripcion: 'Deportivo con gran potencia.',
//   },
//   {
//     id: 4,
//     marca: 'Chevrolet',
//     modelo: 'Camaro',
//     color: 'Azul',
//     matricula: 'GHI5678',
//     imgSrc:
//       'https://cdn.pixabay.com/photo/2016/09/25/18/29/nissan-1694345_640.jpg',
//     precio: 37000,
//     descripcion: 'Potente y con diseño agresivo.',
//   },
//   {
//     id: 5,
//     marca: 'BMW',
//     modelo: 'Serie 3',
//     color: 'Gris',
//     matricula: 'JKL1234',
//     imgSrc:
//       'https://cdn.pixabay.com/photo/2016/08/04/10/52/infinity-1568821_640.jpg',
//     precio: 42000,
//     descripcion: 'Lujo y rendimiento en un sedán.',
//   },
//   {
//     id: 6,
//     marca: 'Mercedes-Benz',
//     modelo: 'Clase C',
//     color: 'Plateado',
//     matricula: 'MNO5678',
//     imgSrc:
//       'https://cdn.pixabay.com/photo/2021/05/07/13/59/nissan-gtr-6236210_640.jpg',
//     precio: 45000,
//     descripcion: 'Elegante y con tecnología avanzada.',
//   },
//   {
//     id: 7,
//     marca: 'Audi',
//     modelo: 'A4',
//     color: 'Blanco',
//     matricula: 'PQR1234',
//     imgSrc:
//       'https://cdn.pixabay.com/photo/2021/05/25/15/00/sports-car-6282702_640.jpg',
//     precio: 40000,
//     descripcion: 'Sedán de lujo con excelente manejo.',
//   },
//   {
//     id: 8,
//     marca: 'Toyota',
//     modelo: 'Civic',
//     color: 'Negro',
//     matricula: 'XYZ5678',
//     imgSrc:
//       'https://i.pinimg.com/236x/bf/81/79/bf8179e16b38a29b21268cd340ba59d4.jpg',
//     precio: 16000,
//     descripcion: 'Compacto con gran rendimiento de combustible.',
//   },
//   {
//     id: 9,
//     marca: 'Toyota',
//     modelo: 'Mustang',
//     color: 'Rojo',
//     matricula: 'DEF1234',
//     imgSrc:
//       'https://i.pinimg.com/236x/e4/c4/44/e4c444f335e59d8edf67f34e65e0a912.jpg',
//     precio: 35000,
//     descripcion: 'Deportivo con gran potencia.',
//   },
//   {
//     id: 10,
//     marca: 'Toyota',
//     modelo: 'Camaro',
//     color: 'Azul',
//     matricula: 'GHI5678',
//     imgSrc:
//       'https://i.pinimg.com/236x/7f/74/74/7f747497fc332122e6b0553f3fbc804a.jpg',
//     precio: 37000,
//     descripcion: 'Potente y con diseño agresivo.',
//   },
//   {
//     id: 11,
//     marca: 'Toyota',
//     modelo: 'Serie 3',
//     color: 'Gris',
//     matricula: 'JKL1234',
//     imgSrc:
//       'https://i.pinimg.com/236x/dd/a7/46/dda746c0a91543202de47299ea36cefe.jpg',
//     precio: 42000,
//     descripcion: 'Lujo y rendimiento en un sedán.',
//   },
//   {
//     id: 12,
//     marca: 'BMW',
//     modelo: 'Corolla',
//     color: 'X6 2025',
//     matricula: 'ABG154',
//     imgSrc:
//       'https://i.pinimg.com/236x/86/71/bf/8671bfe3e59c1e523abb2caac4ff6210.jpg',
//     precio: 15000,
//     descripcion: 'Un sedán confiable y eficiente.',
//   },
//   {
//     id: 13,
//     marca: 'BMW',
//     modelo: 'X4 2025',
//     color: 'Negro',
//     matricula: 'XTE5678',
//     imgSrc:
//       'https://i.pinimg.com/474x/da/d7/10/dad7105c95c77871e90cbc090900fe5f.jpg',
//     precio: 16000,
//     descripcion: 'Compacto con gran rendimiento de combustible.',
//   },
//   {
//     id: 14,
//     marca: 'BMW',
//     modelo: 'M60i',
//     color: 'Rojo',
//     matricula: 'DEUY1234',
//     imgSrc:
//       'https://i.pinimg.com/236x/fd/12/94/fd1294f7695270409d6253b6503e71df.jpg',
//     precio: 35000,
//     descripcion: 'Deportivo con gran potencia.',
//   },
//   {
//     id: 15,
//     marca: 'BMW',
//     modelo: 'XM 2025',
//     color: 'Azul',
//     matricula: 'GHI457',
//     imgSrc:
//       'https://i.pinimg.com/236x/d2/6e/75/d26e750ba09a45d94688a88c3253e431.jpg',
//     precio: 37000,
//     descripcion: 'Potente y con diseño agresivo.',
//   },
//   {
//     id: 16,
//     marca: 'Audi',
//     modelo: 'Aud 005',
//     color: 'Azul',
//     matricula: 'GHI457',
//     imgSrc:
//       'https://i.pinimg.com/236x/c2/c2/04/c2c204c7235834a9e75e6c596a82d4df.jpg',
//     precio: 37000,
//     descripcion: 'Potente y con diseño agresivo.',
//   },
//   {
//     id: 17,
//     marca: 'Audi',
//     modelo: 'Aud 006',
//     color: 'Azul',
//     matricula: 'GHI457',
//     imgSrc:
//       'https://i.pinimg.com/236x/ad/93/be/ad93bef33e4630742f13a92005409140.jpg',
//     precio: 37000,
//     descripcion: 'Potente y con diseño agresivo.',
//   },
//   {
//     id: 18,
//     marca: 'Audi',
//     modelo: 'Aud 00656',
//     color: 'Azul',
//     matricula: 'GHI457',
//     imgSrc:
//       'https://i.pinimg.com/236x/98/73/1c/98731c33ccb94ddcfcd3b0ecb553e80a.jpg',
//     precio: 37000,
//     descripcion: 'Potente y con diseño agresivo.',
//   },
//   {
//     id: 19,
//     marca: 'Chevrolet',
//     modelo: 'Chev PPP',
//     color: 'Azul',
//     matricula: 'GHI457',
//     imgSrc:
//       'https://i.pinimg.com/236x/d4/6f/d7/d46fd74ee157dec005f45f20e6289a63.jpg',
//     precio: 37000,
//     descripcion: 'Potente y con diseño agresivo.',
//   },
//   {
//     id: 20,
//     marca: 'Chevrolet',
//     modelo: 'Chev LLL',
//     color: 'Azul',
//     matricula: 'GHI457',
//     imgSrc:
//       'https://i.pinimg.com/236x/c2/c2/04/c2c204c7235834a9e75e6c596a82d4df.jpg',
//     precio: 37000,
//     descripcion: 'Potente y con diseño agresivo.',
//   },
//   {
//     id: 21,
//     marca: 'Chevrolet',
//     modelo: 'Chev KKK',
//     color: 'Azul',
//     matricula: 'GHI457',
//     imgSrc:
//       'https://i.pinimg.com/236x/66/20/07/6620077b74aefe9762d1c856b396ebae.jpg',
//     precio: 37000,
//     descripcion: 'Potente y con diseño agresivo.',
//   },
//   {
//     id: 22,
//     marca: 'Chevrolet',
//     modelo: 'Chev KLC',
//     color: 'Azul',
//     matricula: 'GHI457',
//     imgSrc:
//       'https://i.pinimg.com/236x/b7/10/8b/b7108bfdcc8e2a74dfb951c0ed20164f.jpg',
//     precio: 37000,
//     descripcion: 'Potente y con diseño agresivo.',
//   },
// ];

export const carros = [
  {
    id: 1,
    marca: 'Toyota',
    modelo: 'Corolla 2023',
    color: 'Blanco',
    matricula: 'ABC1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_640.jpg',
    precio: 15000,
    descripcion: 'Un sedán confiable y eficiente con tecnología avanzada.',
  },
  {
    id: 2,
    marca: 'Honda',
    modelo: 'Civic 2023',
    color: 'Negro',
    matricula: 'XYZ5678',
    imgSrc: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_640.jpg',
    precio: 16000,
    descripcion:
      'Compacto con gran rendimiento de combustible y estilo moderno.',
  },
  {
    id: 3,
    marca: 'Ford',
    modelo: 'Mustang GT',
    color: 'Rojo',
    matricula: 'DEF1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/07/18/17/27/nissan-skyline-3546824_640.jpg',
    precio: 35000,
    descripcion: 'Deportivo icónico con un motor potente y diseño agresivo.',
  },
  {
    id: 4,
    marca: 'Chevrolet',
    modelo: 'Camaro SS',
    color: 'Azul',
    matricula: 'GHI5678',
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/09/25/18/29/nissan-1694345_640.jpg',
    precio: 37000,
    descripcion: 'Muscle car clásico con una apariencia impresionante.',
  },
  {
    id: 5,
    marca: 'BMW',
    modelo: 'Serie 3 2023',
    color: 'Gris',
    matricula: 'JKL1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/08/04/10/52/infinity-1568821_640.jpg',
    precio: 42000,
    descripcion: 'Lujo y rendimiento en un sedán versátil y elegante.',
  },
  {
    id: 6,
    marca: 'Mercedes-Benz',
    modelo: 'Clase C 2023',
    color: 'Plateado',
    matricula: 'MNO5678',
    imgSrc:
      'https://cdn.pixabay.com/photo/2021/05/07/13/59/nissan-gtr-6236210_640.jpg',
    precio: 45000,
    descripcion: 'Un sedán premium con características innovadoras y confort.',
  },
  {
    id: 7,
    marca: 'Audi',
    modelo: 'A4 2023',
    color: 'Blanco',
    matricula: 'PQR1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2021/05/25/15/00/sports-car-6282702_640.jpg',
    precio: 40000,
    descripcion: 'Sedán de lujo con tecnología avanzada y excelente manejo.',
  },
  {
    id: 8,
    marca: 'Toyota',
    modelo: 'RAV4 2023',
    color: 'Negro',
    matricula: 'XYZ5678',
    imgSrc:
      'https://i.pinimg.com/236x/bf/81/79/bf8179e16b38a29b21268cd340ba59d4.jpg',
    precio: 26000,
    descripcion: 'SUV versátil con gran capacidad y eficiencia.',
  },
  {
    id: 9,
    marca: 'Ford',
    modelo: 'Mustang Mach-E',
    color: 'Rojo',
    matricula: 'DEF1234',
    imgSrc:
      'https://i.pinimg.com/236x/e4/c4/44/e4c444f335e59d8edf67f34e65e0a912.jpg',
    precio: 43000,
    descripcion:
      'SUV eléctrico con diseño deportivo y tecnología de vanguardia.',
  },
  {
    id: 10,
    marca: 'Chevrolet',
    modelo: 'Blazer 2023',
    color: 'Azul',
    matricula: 'GHI5678',
    imgSrc:
      'https://i.pinimg.com/236x/7f/74/74/7f747497fc332122e6b0553f3fbc804a.jpg',
    precio: 33000,
    descripcion: 'SUV con un diseño audaz y características avanzadas.',
  },
  {
    id: 11,
    marca: 'BMW',
    modelo: 'X5 2023',
    color: 'Gris',
    matricula: 'JKL1234',
    imgSrc:
      'https://i.pinimg.com/236x/dd/a7/46/dda746c0a91543202de47299ea36cefe.jpg',
    precio: 60000,
    descripcion: 'SUV de lujo con potencia y elegancia.',
  },
  {
    id: 12,
    marca: 'BMW',
    modelo: 'Serie 2 2023',
    color: 'X6 2025',
    matricula: 'ABG154',
    imgSrc:
      'https://i.pinimg.com/236x/86/71/bf/8671bfe3e59c1e523abb2caac4ff6210.jpg',
    precio: 30000,
    descripcion: 'Un sedán compacto que combina agilidad y lujo.',
  },
  {
    id: 13,
    marca: 'BMW',
    modelo: 'X3 2023',
    color: 'Negro',
    matricula: 'XTE5678',
    imgSrc:
      'https://i.pinimg.com/474x/da/d7/10/dad7105c95c77871e90cbc090900fe5f.jpg',
    precio: 52000,
    descripcion: 'SUV ágil con tecnología de última generación.',
  },
  {
    id: 14,
    marca: 'BMW',
    modelo: 'M4 2023',
    color: 'Rojo',
    matricula: 'DEUY1234',
    imgSrc:
      'https://i.pinimg.com/236x/fd/12/94/fd1294f7695270409d6253b6503e71df.jpg',
    precio: 72000,
    descripcion: 'Coupé deportivo con rendimiento excepcional.',
  },
  {
    id: 15,
    marca: 'BMW',
    modelo: 'Z4 2023',
    color: 'Azul',
    matricula: 'GHI457',
    imgSrc:
      'https://i.pinimg.com/236x/d2/6e/75/d26e750ba09a45d94688a88c3253e431.jpg',
    precio: 50000,
    descripcion: 'Roadster elegante con manejo deportivo.',
  },
  {
    id: 16,
    marca: 'Audi',
    modelo: 'Q5 2023',
    color: 'Azul',
    matricula: 'GHI457',
    imgSrc:
      'https://i.pinimg.com/236x/c2/c2/04/c2c204c7235834a9e75e6c596a82d4df.jpg',
    precio: 47000,
    descripcion: 'SUV de lujo con espacio y comodidad.',
  },
  {
    id: 17,
    marca: 'Audi',
    modelo: 'A6 2023',
    color: 'Azul',
    matricula: 'GHI457',
    imgSrc:
      'https://i.pinimg.com/236x/ad/93/be/ad93bef33e4630742f13a92005409140.jpg',
    precio: 59000,
    descripcion: 'Sedán de lujo con gran tecnología y rendimiento.',
  },
  {
    id: 18,
    marca: 'Audi',
    modelo: 'Q7 2023',
    color: 'Azul',
    matricula: 'GHI457',
    imgSrc:
      'https://i.pinimg.com/236x/98/73/1c/98731c33ccb94ddcfcd3b0ecb553e80a.jpg',
    precio: 75000,
    descripcion: 'SUV espacioso con un manejo ágil y elegante.',
  },
  {
    id: 19,
    marca: 'Chevrolet',
    modelo: 'Equinox 2023',
    color: 'Azul',
    matricula: 'GHI457',
    imgSrc:
      'https://i.pinimg.com/236x/d4/6f/d7/d46fd74ee157dec005f45f20e6289a63.jpg',
    precio: 29000,
    descripcion: 'SUV compacta con eficiencia y estilo.',
  },
];

export const carros_oferta = [
  {
    id: 5,
    marca: 'BMW',
    modelo: 'Serie 3',
    color: 'Gris',
    matricula: 'JKL1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/08/04/10/52/infinity-1568821_640.jpg',
    precio: 42000,
    descripcion: 'Lujo y rendimiento en un sedán.',
    descuento: '5%',
  },
  {
    id: 6,
    marca: 'Mercedes-Benz',
    modelo: 'Clase C',
    color: 'Plateado',
    matricula: 'MNO5678',
    imgSrc:
      'https://cdn.pixabay.com/photo/2021/05/07/13/59/nissan-gtr-6236210_640.jpg',
    precio: 45000,
    descripcion: 'Elegante y con tecnología avanzada.',
    descuento: '10%',
  },
  {
    id: 7,
    marca: 'Audi',
    modelo: 'A4',
    color: 'Blanco',
    matricula: 'PQR1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2021/05/25/15/00/sports-car-6282702_640.jpg',
    precio: 40000,
    descripcion: 'Sedán de lujo con excelente manejo.',
    descuento: '20%',
  },
];

export const user_ejemplo = {
  nombre: 'Cristiano',
  apellidos: ['Ronlado', 'Dos Santos'],
  fecha: '02/15/2003',
  foto: 'https://cdn.pixabay.com/photo/2023/04/05/20/07/player-7902240_640.jpg',
};

export const compras_ejemplo = [
  {
    id: 3,
    marca: 'Ford',
    modelo: 'Mustang',
    color: 'Rojo',
    matricula: 'DEF1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/07/18/17/27/nissan-skyline-3546824_640.jpg',
    precio: 35000,
    descripcion: 'Deportivo con gran potencia.',
    estado: 'En transito',
  },
  {
    id: 4,
    marca: 'Chevrolet',
    modelo: 'Camaro',
    color: 'Azul',
    matricula: 'GHI5678',
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/09/25/18/29/nissan-1694345_640.jpg',
    precio: 37000,
    descripcion: 'Potente y con diseño agresivo.',
    estado: 'Entregado',
  },
  {
    id: 5,
    marca: 'BMW',
    modelo: 'Serie 3',
    color: 'Gris',
    matricula: 'JKL1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/08/04/10/52/infinity-1568821_640.jpg',
    precio: 42000,
    descripcion: 'Lujo y rendimiento en un sedán.',
    estado: 'Cancelado',
  },
  {
    id: 6,
    marca: 'Mercedes-Benz',
    modelo: 'Clase C',
    color: 'Plateado',
    matricula: 'MNO5678',
    imgSrc:
      'https://cdn.pixabay.com/photo/2021/05/07/13/59/nissan-gtr-6236210_640.jpg',
    precio: 45000,
    descripcion: 'Elegante y con tecnología avanzada.',
    estado: 'Entregado',
  },
  {
    id: 7,
    marca: 'Audi',
    modelo: 'A4',
    color: 'Blanco',
    matricula: 'PQR1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2021/05/25/15/00/sports-car-6282702_640.jpg',
    precio: 40000,
    descripcion: 'Sedán de lujo con excelente manejo.',
    estado: 'Entregado',
  },
];

export const favo_ejemplo = [
  {
    id: 3,
    marca: 'Ford',
    modelo: 'Mustang',
    color: 'Rojo',
    matricula: 'DEF1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2018/07/18/17/27/nissan-skyline-3546824_640.jpg',
    precio: 35000,
    descripcion: 'Deportivo con gran potencia.',
    estado: 'Disponible',
  },
  {
    id: 4,
    marca: 'Chevrolet',
    modelo: 'Camaro',
    color: 'Azul',
    matricula: 'GHI5678',
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/09/25/18/29/nissan-1694345_640.jpg',
    precio: 37000,
    descripcion: 'Potente y con diseño agresivo.',
    estado: 'No Disponible',
  },
  {
    id: 5,
    marca: 'BMW',
    modelo: 'Serie 3',
    color: 'Gris',
    matricula: 'JKL1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/08/04/10/52/infinity-1568821_640.jpg',
    precio: 42000,
    descripcion: 'Lujo y rendimiento en un sedán.',
    estado: 'Disponible',
  },
  {
    id: 6,
    marca: 'Mercedes-Benz',
    modelo: 'Clase C',
    color: 'Plateado',
    matricula: 'MNO5678',
    imgSrc:
      'https://cdn.pixabay.com/photo/2021/05/07/13/59/nissan-gtr-6236210_640.jpg',
    precio: 45000,
    descripcion: 'Elegante y con tecnología avanzada.',
    estado: 'Disponible',
  },
  {
    id: 7,
    marca: 'Audi',
    modelo: 'A4',
    color: 'Blanco',
    matricula: 'PQR1234',
    imgSrc:
      'https://cdn.pixabay.com/photo/2021/05/25/15/00/sports-car-6282702_640.jpg',
    precio: 40000,
    descripcion: 'Sedán de lujo con excelente manejo.',
    estado: 'No Disponible',
  },
];

export const item_detalle_ejemplo = {
  descripcion: 'Sedán de lujo con excelente manejo.',
  imgSrc:
    'https://cdn.pixabay.com/photo/2021/05/25/15/00/sports-car-6282702_640.jpg',
  precio: 40000,
  valor: 34000,
  caracteristicas: ['Electrico', 'Eco-Amigable', '400 km/h'],
};

export const categoria_toyoya = [
  {
    id: 1,
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Blanco',
    matricula: 'ABC1234',
    imgSrc:
      'https://i.pinimg.com/236x/d8/02/5e/d8025e1cfb098c771636815be548df2e.jpg',
    precio: 15000,
    descripcion: 'Un sedán confiable y eficiente.',
  },
  {
    id: 2,
    marca: 'Toyota',
    modelo: 'Civic',
    color: 'Negro',
    matricula: 'XYZ5678',
    imgSrc:
      'https://i.pinimg.com/236x/bf/81/79/bf8179e16b38a29b21268cd340ba59d4.jpg',
    precio: 16000,
    descripcion: 'Compacto con gran rendimiento de combustible.',
  },
  {
    id: 3,
    marca: 'Toyota',
    modelo: 'Mustang',
    color: 'Rojo',
    matricula: 'DEF1234',
    imgSrc:
      'https://i.pinimg.com/236x/e4/c4/44/e4c444f335e59d8edf67f34e65e0a912.jpg',
    precio: 35000,
    descripcion: 'Deportivo con gran potencia.',
  },
  {
    id: 4,
    marca: 'Toyota',
    modelo: 'Camaro',
    color: 'Azul',
    matricula: 'GHI5678',
    imgSrc:
      'https://i.pinimg.com/236x/7f/74/74/7f747497fc332122e6b0553f3fbc804a.jpg',
    precio: 37000,
    descripcion: 'Potente y con diseño agresivo.',
  },
  {
    id: 5,
    marca: 'Toyota',
    modelo: 'Serie 3',
    color: 'Gris',
    matricula: 'JKL1234',
    imgSrc:
      'https://i.pinimg.com/236x/dd/a7/46/dda746c0a91543202de47299ea36cefe.jpg',
    precio: 42000,
    descripcion: 'Lujo y rendimiento en un sedán.',
  },
];

export const categoria_bmw = [
  {
    id: 1,
    marca: 'BMW',
    modelo: 'Corolla',
    color: 'X6 2025',
    matricula: 'ABG154',
    imgSrc:
      'https://i.pinimg.com/236x/86/71/bf/8671bfe3e59c1e523abb2caac4ff6210.jpg',
    precio: 15000,
    descripcion: 'Un sedán confiable y eficiente.',
  },
  {
    id: 2,
    marca: 'BMW',
    modelo: 'X4 2025',
    color: 'Negro',
    matricula: 'XTE5678',
    imgSrc:
      'https://i.pinimg.com/474x/da/d7/10/dad7105c95c77871e90cbc090900fe5f.jpg',
    precio: 16000,
    descripcion: 'Compacto con gran rendimiento de combustible.',
  },
  {
    id: 3,
    marca: 'BMW',
    modelo: 'M60i',
    color: 'Rojo',
    matricula: 'DEUY1234',
    imgSrc:
      'https://i.pinimg.com/236x/fd/12/94/fd1294f7695270409d6253b6503e71df.jpg',
    precio: 35000,
    descripcion: 'Deportivo con gran potencia.',
  },
  {
    id: 4,
    marca: 'BMW',
    modelo: 'XM 2025',
    color: 'Azul',
    matricula: 'GHI457',
    imgSrc:
      'https://i.pinimg.com/236x/d2/6e/75/d26e750ba09a45d94688a88c3253e431.jpg',
    precio: 37000,
    descripcion: 'Potente y con diseño agresivo.',
  },
  {
    id: 5,
    marca: 'BMW',
    modelo: 'iX 2025',
    color: 'Gris',
    matricula: 'JEE1234',
    imgSrc: '',
    precio: 42000,
    descripcion: 'Lujo y rendimiento en un sedán.',
  },
];
