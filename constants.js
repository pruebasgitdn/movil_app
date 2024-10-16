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

export const products = [
  // Categoría: Tecnología
  {
    id: 1,
    title: 'Smartphone Galaxy S21',
    description:
      'Teléfono inteligente con pantalla AMOLED de 6.2 pulgadas y cámara de 64MP.',
    imgSrc:
      'https://i.pinimg.com/236x/8d/39/33/8d39338a3320f1027d3203e257f92186.jpg',
    category: 'Tecnología',
    price: 799,
    brand: 'Samsung',
  },
  {
    id: 2,
    title: 'Smart TV 55 pulgadas',
    description:
      'Televisor inteligente 4K con HDR y soporte para asistentes de voz.',
    imgSrc:
      'https://i.pinimg.com/236x/09/0e/13/090e132a0bb5b4997ea7094059c941b0.jpg',
    category: 'Tecnología',
    price: 1200,
    brand: 'Samsung',
  },
  {
    id: 3,
    title: 'Laptop HP Spectre',
    description: 'Laptop ultradelgada con procesador Intel i7 y 16GB de RAM.',
    imgSrc:
      'https://i.pinimg.com/236x/3d/64/1a/3d641a3cac8b0085e2c7db04b1be8ba5.jpg',
    category: 'Tecnología',
    price: 1500,
    brand: 'HP',
  },
  {
    id: 4,
    title: 'Impresora HP LaserJet',
    description: 'Impresora láser multifunción con conectividad Wi-Fi.',
    imgSrc:
      'https://i.pinimg.com/236x/ae/39/31/ae3931036c162470a6d9d7385ea62f73.jpg',
    category: 'Tecnología',
    price: 250,
    brand: 'HP',
  },
  {
    id: 5,
    title: 'Auriculares Bose QuietComfort 35',
    description:
      'Auriculares con cancelación de ruido y sonido de alta calidad.',
    imgSrc:
      'https://i.pinimg.com/control/236x/20/38/29/20382909d1d4f14f517f0ac347706526.jpg',
    category: 'Tecnología',
    price: 299,
    brand: 'Bose',
  },
  {
    id: 6,
    title: 'Barra de sonido Bose Soundbar 700',
    description:
      'Barra de sonido con subwoofer integrado y conectividad inalámbrica.',
    imgSrc:
      'https://i.pinimg.com/236x/07/de/f9/07def9a16aad85c948d4a1e157ae219f.jpg',
    category: 'Tecnología',
    price: 799,
    brand: 'Bose',
  },
  {
    id: 7,
    title: 'Monitor Dell UltraSharp 27',
    description: 'Monitor 4K con colores precisos y bisel ultra delgado.',
    imgSrc:
      'https://i.pinimg.com/236x/2e/65/94/2e6594a823f82b504a82483c8580b627.jpg',
    category: 'Tecnología',
    price: 600,
    brand: 'Dell',
  },
  {
    id: 8,
    title: 'Laptop Dell XPS 13',
    description: 'Laptop premium con pantalla táctil y procesador Intel i7.',
    imgSrc:
      'https://i.pinimg.com/236x/68/6c/62/686c62e9940dec3da4e8d7d27d749297.jpg',
    category: 'Tecnología',
    price: 1400,
    brand: 'Dell',
  },

  // Categoría: Autos
  {
    id: 9,
    title: 'Toyota Corolla 2024',
    description:
      'Sedán compacto con gran eficiencia de combustible y tecnología avanzada.',
    imgSrc:
      'https://i.pinimg.com/236x/5a/47/3a/5a473aac3afd00e06d03311f5396f34e.jpg',
    category: 'Autos',
    price: 20000,
    brand: 'Toyota',
  },
  {
    id: 10,
    title: 'Toyota RAV4 2024',
    description:
      'SUV confiable y espacioso con características de seguridad avanzadas.',
    imgSrc:
      'https://i.pinimg.com/control/236x/14/3e/a6/143ea6caccf8aeb424bfd71a38245759.jpg',
    category: 'Autos',
    price: 30000,
    brand: 'Toyota',
  },
  {
    id: 11,
    title: 'Honda Civic 2024',
    description: 'Sedán deportivo con gran rendimiento y diseño moderno.',
    imgSrc:
      'https://i.pinimg.com/control/236x/66/ac/97/66ac97ee39e92d2dd27c83ff8089d9a3.jpg',
    category: 'Autos',
    price: 22000,
    brand: 'Honda',
  },
  {
    id: 12,
    title: 'Honda CR-V 2024',
    description: 'SUV versátil con un interior espacioso y motor eficiente.',
    imgSrc:
      'https://i.pinimg.com/236x/90/79/eb/9079ebb14ffb6b42747676ee7a42b48f.jpg',
    category: 'Autos',
    price: 32000,
    brand: 'Honda',
  },
  {
    id: 13,
    title: 'Ford Mustang GT',
    description: 'Coupé deportivo con un motor V8 y diseño icónico.',
    imgSrc:
      'https://i.pinimg.com/236x/bf/45/e2/bf45e25fde2294e58bd9aa8b3d760445.jpg',
    category: 'Autos',
    price: 45000,
    brand: 'Ford',
  },
  {
    id: 14,
    title: 'Ford Explorer 2024',
    description:
      'SUV familiar con capacidad todoterreno y gran espacio de carga.',
    imgSrc:
      'https://i.pinimg.com/control/236x/96/02/64/9602643e4949cb5d6332f4964357b576.jpg',
    category: 'Autos',
    price: 37000,
    brand: 'Ford',
  },
  {
    id: 15,
    title: 'Chevrolet Camaro',
    description: 'Deportivo con un diseño aerodinámico y un motor potente.',
    imgSrc:
      'https://i.pinimg.com/control/236x/2f/f5/ad/2ff5ad0acb37c98d03fd7d2471fd81fe.jpg',
    category: 'Autos',
    price: 38000,
    brand: 'Chevrolet',
  },
  {
    id: 16,
    title: 'Chevrolet Tahoe',
    description:
      'SUV grande con capacidad para toda la familia y gran potencia.',
    imgSrc:
      'https://i.pinimg.com/control/236x/d1/98/ea/d198ea8d69a392bea16b00d772181c04.jpg',
    category: 'Autos',
    price: 48000,
    brand: 'Chevrolet',
  },

  // Categoría: Aseo
  {
    id: 17,
    title: 'Detergente Líquido Ariel',
    description: 'Detergente de alta eficiencia para ropa blanca y de color.',
    imgSrc:
      'https://i.pinimg.com/236x/23/f0/9d/23f09d434f092b9543d211783f5be287.jpg',
    category: 'Aseo',
    price: 15,
    brand: 'Ariel',
  },
  {
    id: 18,
    title: 'Suavizante de Telas Downy',
    description: 'Suavizante concentrado con fragancia duradera para tu ropa.',
    imgSrc:
      'https://i.pinimg.com/236x/b5/c7/ab/b5c7ab7b1421cfd56c414d0ce28e6db0.jpg',
    category: 'Aseo',
    price: 8,
    brand: 'Downy',
  },
  {
    id: 19,
    title: 'Jabón Líquido Dove',
    description: 'Jabón líquido hidratante para el cuidado de la piel.',
    imgSrc:
      'https://i.pinimg.com/236x/c5/2a/ce/c52acea713453687288313417261367e.jpg',
    category: 'Aseo',
    price: 6,
    brand: 'Dove',
  },
  {
    id: 20,
    title: 'Papel Higiénico Scott',
    description: 'Papel higiénico suave y resistente con varias capas.',
    imgSrc:
      'https://i.pinimg.com/736x/56/4d/7f/564d7fc9eeb1b1894874c6d3d75a81d6.jpg',
    category: 'Aseo',
    price: 10,
    brand: 'Scott',
  },
  {
    id: 21,
    title: 'Lavaplatos Axion',
    description: 'Lavaplatos líquido desengrasante con fórmula concentrada.',
    imgSrc:
      'https://i.pinimg.com/236x/89/3d/e0/893de0daa8a603793f832373e117e33d.jpg',
    category: 'Aseo',
    price: 3,
    brand: 'Axion',
  },
  {
    id: 22,
    title: 'Desinfectante Lysol',
    description: 'Desinfectante en aerosol para superficies y ambientes.',
    imgSrc:
      'https://i.pinimg.com/236x/77/f9/3f/77f93f1533a509d582d8283d524f54ea.jpg',
    category: 'Aseo',
    price: 7,
    brand: 'Lysol',
  },

  // Categoría: Hogar
  {
    id: 23,
    title: 'Sofá Seccional de Cuero',
    description:
      'Sofá seccional espacioso con tapizado de cuero y diseño moderno.',
    imgSrc:
      'https://i.pinimg.com/236x/52/ec/b7/52ecb7cbfa12a385a67ed78197803be6.jpg',
    category: 'Hogar',
    price: 1200,
    brand: 'Ashley',
  },
  {
    id: 24,
    title: 'Mesa de Comedor de Madera',
    description:
      'Mesa de comedor rústica de madera maciza con capacidad para 6 personas.',
    imgSrc:
      'https://i.pinimg.com/236x/f5/1a/a4/f51aa4459f04fccda250ef2dc715c90a.jpg',
    category: 'Hogar',
    price: 500,
    brand: 'Ashley',
  },
  {
    id: 25,
    title: 'Refrigerador LG Inverter',
    description:
      'Refrigerador de alta eficiencia energética con tecnología Inverter.',
    imgSrc:
      'https://i.pinimg.com/236x/7a/f9/5c/7af95c52a9248160067f92340c35708e.jpg',
    category: 'Hogar',
    price: 900,
    brand: 'LG',
  },
  {
    id: 26,
    title: 'Lavadora LG TurboWash',
    description:
      'Lavadora de alta capacidad con tecnología TurboWash para un lavado rápido y eficiente.',
    imgSrc:
      'https://i.pinimg.com/236x/8d/f6/12/8df612631c2d8012733d4a54fbe0a597.jpg',
    category: 'Hogar',
    price: 800,
    brand: 'LG',
  },
  {
    id: 27,
    title: 'Microondas Whirlpool 1.1 Cu Ft',
    description: 'Microondas con tecnología de cocción rápida y fácil de usar.',
    imgSrc:
      'https://i.pinimg.com/236x/b3/6e/9a/b36e9a7d9ecb7ffadd60980d250365cd.jpg',
    category: 'Hogar',
    price: 150,
    brand: 'Whirlpool',
  },
  {
    id: 28,
    title: 'Horno Whirlpool Eléctrico',
    description: 'Horno eléctrico con múltiples funciones y control digital.',
    imgSrc:
      'https://i.pinimg.com/236x/b2/1e/c6/b21ec6472873116b472c7b04f557fa62.jpg',
    category: 'Hogar',
    price: 700,
    brand: 'Whirlpool',
  },
  {
    id: 29,
    title: 'Cama King Size Sealy',
    description: 'Cama de tamaño King con colchón ortopédico y base de madera.',
    imgSrc:
      'https://i.pinimg.com/236x/90/18/d3/9018d3945a44a10ae1863ae12e860588.jpg',
    category: 'Hogar',
    price: 1500,
    brand: 'Sealy',
  },
  {
    id: 30,
    title: 'Colchón Sealy Ortopédico',
    description: 'Colchón ortopédico de alta calidad con soporte lumbar.',
    imgSrc:
      'https://i.pinimg.com/474x/8a/63/86/8a638642fea6e227b49ccb089a2eb2d0.jpg',
    category: 'Hogar',
    price: 1000,
    brand: 'Sealy',
  },

  // Categoría: Ropa
  {
    id: 31,
    title: 'Chaqueta de cuero Zara',
    description:
      'Chaqueta de cuero auténtico con un diseño moderno y ajustado.',
    imgSrc:
      'https://i.pinimg.com/236x/58/b0/6e/58b06ef8b347731ad82e67dc28c12d73.jpg',
    category: 'Ropa',
    price: 200,
    brand: 'Zara',
  },
  {
    id: 32,
    title: 'Pantalón Vaquero Zara',
    description:
      'Pantalón vaquero ajustado con un diseño moderno y de alta durabilidad.',
    imgSrc:
      'https://i.pinimg.com/236x/80/53/07/8053071497fb86ce1cb2c63be7544931.jpg',
    category: 'Ropa',
    price: 50,
    brand: 'Zara',
  },
  {
    id: 33,
    title: 'Vestido Casual H&M',
    description: 'Vestido casual con diseño floral, perfecto para el verano.',
    imgSrc:
      'https://i.pinimg.com/474x/ad/3e/45/ad3e45f589120094bb0014622c685bce.jpg',
    category: 'Ropa',
    price: 40,
    brand: 'H&M',
  },
  {
    id: 34,
    title: 'Chaqueta de Mezclilla H&M',
    description:
      'Chaqueta de mezclilla clásica con un estilo relajado y moderno.',
    imgSrc:
      'https://i.pinimg.com/236x/56/bb/fb/56bbfbb394dcb11fbf28618ee7dc9eb6.jpg',
    category: 'Ropa',
    price: 60,
    brand: 'H&M',
  },
  {
    id: 35,
    title: 'Camiseta Básica Nike',
    description:
      'Camiseta de algodón suave con el logo de Nike estampado en el pecho.',
    imgSrc:
      'https://i.pinimg.com/236x/a6/5d/bf/a65dbf179d3479d3f0ea2158314c102f.jpg',
    category: 'Ropa',
    price: 25,
    brand: 'Nike',
  },
  {
    id: 36,
    title: 'Zapatos Deportivos Nike Air',
    description:
      'Zapatos deportivos ligeros y cómodos con tecnología Air para mayor amortiguación.',
    imgSrc:
      'https://i.pinimg.com/474x/f7/28/12/f72812a4c1cc4cbe8bc8b46d144c5aa5.jpg',
    category: 'Ropa',
    price: 100,
    brand: 'Nike',
  },
  {
    id: 37,
    title: 'Chaqueta Adidas Clásica',
    description: 'Chaqueta deportiva con las icónicas tres rayas de Adidas.',
    imgSrc:
      'https://i.pinimg.com/236x/56/97/ab/5697ab49229d24694cb930ba908351a3.jpg',
    category: 'Ropa',
    price: 75,
    brand: 'Adidas',
  },
  {
    id: 38,
    title: 'Sudadera Adidas',
    description: 'Sudadera cómoda con capucha y el logo de Adidas estampado.',
    imgSrc:
      'https://i.pinimg.com/236x/c5/82/23/c58223210d40a6f6c1c85c32ac7c6b2c.jpg',
    category: 'Ropa',
    price: 65,
    brand: 'Adidas',
  },
  // Continuación de "Hogar"
  {
    id: 39,
    title: 'Juego de Sartenes Antiadherentes',
    description:
      'Set de sartenes antiadherentes de alta calidad para cocinar con menos aceite.',
    imgSrc:
      'https://i.pinimg.com/236x/9a/66/d7/9a66d75dc7f9ba88115d316933e080c6.jpg',
    category: 'Hogar',
    price: 80,
    brand: 'Tefal',
  },
  {
    id: 40,
    title: 'Cafetera de Cápsulas',
    description:
      'Cafetera rápida y fácil de usar compatible con cápsulas de varias marcas.',
    imgSrc:
      'https://i.pinimg.com/236x/b9/61/28/b961289628e4bdd66673667abf065228.jpg',
    category: 'Hogar',
    price: 120,
    brand: 'Tefal',
  },
  {
    id: 41,
    title: 'Aspiradora Sin Cable',
    description:
      'Aspiradora ligera y sin cable para limpiar cualquier rincón de la casa.',
    imgSrc:
      'https://i.pinimg.com/236x/b1/20/91/b120917f8ff6332a86913042db5f1fc2.jpg',
    category: 'Hogar',
    price: 220,
    brand: 'Tefal',
  },
  {
    id: 42,
    title: 'Plancha de Vapor Tefal',
    description:
      'Plancha con tecnología de vapor para un planchado rápido y eficiente.',
    imgSrc:
      'https://i.pinimg.com/236x/b8/5c/87/b85c877316c015d971bc8f30c8903c3f.jpg',
    category: 'Hogar',
    price: 60,
    brand: 'Tefal',
  },
  {
    id: 43,
    title: 'Televisor OLED 55 pulgadas',
    description:
      'Televisor OLED con resolución 4K y sistema de sonido Dolby Atmos.',
    imgSrc:
      'https://i.pinimg.com/236x/80/a8/9b/80a89bbaf279af96d9fc8bed31e2f5b9.jpg',
    category: 'Hogar',
    price: 1300,
    brand: 'Samsung',
  },
  {
    id: 44,
    title: 'Aire Acondicionado Inverter',
    description: 'Aire acondicionado de bajo consumo con tecnología Inverter.',
    imgSrc:
      'https://i.pinimg.com/236x/86/86/7f/86867ffda3484f1ed24cd8e7694f016b.jpg',
    category: 'Hogar',
    price: 950,
    brand: 'Samsung',
  },
  {
    id: 45,
    title: 'Lavavajillas Samsung',
    description:
      'Lavavajillas inteligente con múltiples modos de lavado y bajo consumo.',
    imgSrc:
      'https://i.pinimg.com/736x/a3/c4/4e/a3c44e4fca74a384b9e79ab2598e327b.jpg',
    category: 'Hogar',
    price: 750,
    brand: 'Samsung',
  },
  {
    id: 46,
    title: 'Microondas Samsung',
    description: 'Microondas con grill y tecnología de descongelado rápido.',
    imgSrc:
      'https://i.pinimg.com/236x/74/42/32/7442321583bdb1500e1ac5848a020d30.jpg',
    category: 'Hogar',
    price: 170,
    brand: 'Samsung',
  },

  // Continuación de "Ropa"
  {
    id: 47,
    title: 'Zapatillas Deportivas Nike',
    description: 'Zapatillas ligeras para correr con amortiguación avanzada.',
    imgSrc:
      'https://i.pinimg.com/236x/77/6e/83/776e83db82f77ef6eca6de5f5c017b0c.jpg',
    category: 'Ropa',
    price: 110,
    brand: 'Nike',
  },
  {
    id: 48,
    title: 'Sudadera Nike Sportswear',
    description: 'Sudadera de corte ajustado con capucha y bolsillo frontal.',
    imgSrc:
      'https://i.pinimg.com/236x/3c/e6/c2/3ce6c2c411a4792c9d14263c001b5fd8.jpg',
    category: 'Ropa',
    price: 55,
    brand: 'Nike',
  },
  {
    id: 49,
    title: 'Chaqueta Cortaviento Adidas',
    description:
      'Chaqueta ligera resistente al viento y al agua, ideal para correr.',
    imgSrc:
      'https://i.pinimg.com/236x/c9/53/08/c95308bc50ef3203f9ad0b9cdff295e2.jpg',
    category: 'Ropa',
    price: 90,
    brand: 'Adidas',
  },
  {
    id: 50,
    title: 'Leggings Adidas',
    description: 'Leggings deportivos de compresión con diseño ergonómico.',
    imgSrc:
      'https://i.pinimg.com/236x/7b/02/74/7b02740e65035d2202758bc2dded3501.jpg',
    category: 'Ropa',
    price: 40,
    brand: 'Adidas',
  },
  {
    id: 51,
    title: 'Camisa Casual Zara',
    description:
      'Camisa casual de manga larga, perfecta para eventos formales o informales.',
    imgSrc:
      'https://i.pinimg.com/236x/12/f3/5a/12f35a70e44ed662b84af2b7739f8f5c.jpg',
    category: 'Ropa',
    price: 45,
    brand: 'Zara',
  },
  {
    id: 52,
    title: 'Abrigo de Lana Zara',
    description:
      'Abrigo de lana con diseño clásico y elegante para el invierno.',
    imgSrc:
      'https://i.pinimg.com/236x/5f/ae/b4/5faeb49e5c7796739b9725c241e85e88.jpg',
    category: 'Ropa',
    price: 220,
    brand: 'Zara',
  },
  {
    id: 53,
    title: 'Camiseta Estampada H&M',
    description: 'Camiseta con diseño estampado moderno y tejido ligero.',
    imgSrc:
      'https://i.pinimg.com/control/236x/99/ba/2c/99ba2c5ec52d856dd01ce064fa42ead7.jpg',
    category: 'Ropa',
    price: 25,
    brand: 'H&M',
  },
  {
    id: 54,
    title: 'Chaqueta Bomber H&M',
    description:
      'Chaqueta bomber con relleno cálido, ideal para la temporada de frío.',
    imgSrc:
      'https://i.pinimg.com/236x/d3/ca/bb/d3cabbe6dda2643b5225ddcff2c31aaf.jpg',
    category: 'Ropa',
    price: 70,
    brand: 'H&M',
  },
  // Continuación de "Tecnología"
  {
    id: 55,
    title: 'Smartwatch Samsung Galaxy',
    description:
      'Reloj inteligente con múltiples funciones para monitorear la salud y fitness.',
    imgSrc:
      'https://i.pinimg.com/236x/8c/0d/6b/8c0d6bd84a8ade01857d44d98bc3df23.jpg',
    category: 'Tecnología',
    price: 200,
    brand: 'Samsung',
  },
  {
    id: 56,
    title: 'Auriculares Bluetooth Samsung',
    description: 'Auriculares inalámbricos con cancelación de ruido activa.',
    imgSrc:
      'https://i.pinimg.com/236x/86/23/d3/8623d337aea7822effed7b65689ba80e.jpg',
    category: 'Tecnología',
    price: 130,
    brand: 'Samsung',
  },
  {
    id: 57,
    title: 'Tableta Samsung Galaxy Tab',
    description:
      'Tableta con pantalla AMOLED de 10 pulgadas y 128 GB de almacenamiento.',
    imgSrc:
      'https://i.pinimg.com/236x/2b/59/be/2b59befc736c0fbf0087366f9171237c.jpg',
    category: 'Tecnología',
    price: 400,
    brand: 'Samsung',
  },
  {
    id: 58,
    title: 'Monitor Curvo 27 pulgadas',
    description: 'Monitor curvo Full HD con tasa de refresco de 144 Hz.',
    imgSrc:
      'https://i.pinimg.com/236x/89/91/ba/8991ba5760385a358b0fc3003d13ac31.jpg',
    category: 'Tecnología',
    price: 300,
    brand: 'Samsung',
  },
  {
    id: 59,
    title: 'Smartphone Xiaomi Mi 11',
    description:
      'Teléfono inteligente con cámara de 108 MP y procesador Snapdragon.',
    imgSrc:
      'https://i.pinimg.com/236x/d6/89/82/d68982fe5defe3548fc7daa086c109a0.jpg',
    category: 'Tecnología',
    price: 600,
    brand: 'Xiaomi',
  },
  {
    id: 60,
    title: 'Smartwatch Xiaomi Mi Band',
    description:
      'Pulsera inteligente con sensor de ritmo cardíaco y seguimiento de sueño.',
    imgSrc:
      'https://i.pinimg.com/236x/ec/21/5d/ec215da80293c62b5d1bce40f7f211da.jpg',
    category: 'Tecnología',
    price: 50,
    brand: 'Xiaomi',
  },
  {
    id: 61,
    title: 'Xiaomi Redmi Note 10',
    description:
      'Teléfono móvil de gama media con batería de larga duración y pantalla AMOLED.',
    imgSrc:
      'https://i.pinimg.com/236x/33/e4/15/33e415f3d91db8a62105e2cdaae26e16.jpg',
    category: 'Tecnología',
    price: 200,
    brand: 'Xiaomi',
  },
  {
    id: 62,
    title: 'Televisor Xiaomi Mi TV',
    description:
      'Televisor 4K con sistema operativo Android TV y control por voz.',
    imgSrc:
      'https://i.pinimg.com/736x/63/dd/c2/63ddc2543dbe72004b6ca82a8b2a0eb3.jpg',
    category: 'Tecnología',
    price: 450,
    brand: 'Xiaomi',
  },

  {
    id: 71,
    title: 'Gel Antibacterial Dettol',
    description:
      'Gel antibacterial de rápida absorción para mantener tus manos limpias.',
    imgSrc:
      'https://i.pinimg.com/236x/ab/3b/d6/ab3bd63db401a3a430a605f92c321b5a.jpg',
    category: 'Aseo',
    price: 10,
    brand: 'Dettol',
  },
  {
    id: 72,
    title: 'Jabón Líquido Dettol',
    description: 'Jabón líquido antibacterial con acción protectora.',
    imgSrc:
      'https://i.pinimg.com/236x/c2/e5/e3/c2e5e3ddd895338a71d3283c7743cd8d.jpg',
    category: 'Aseo',
    price: 15,
    brand: 'Dettol',
  },
  {
    id: 73,
    title: 'Limpiador Multiusos Ajax',
    description:
      'Limpiador multiusos con fórmula avanzada para cualquier superficie.',
    imgSrc:
      'https://i.pinimg.com/236x/6b/c4/5f/6bc45fdaf33c5dfb136dcfb697321c82.jpg',
    category: 'Aseo',
    price: 7,
    brand: 'Ajax',
  },
  {
    id: 74,
    title: 'Limpiador de Pisos Ajax',
    description:
      'Limpiador de pisos con fragancia a lavanda que deja un brillo impecable.',
    imgSrc:
      'https://i.pinimg.com/236x/8f/6f/df/8f6fdfe0446abaf3e38b7b497dd3498b.jpg',
    category: 'Aseo',
    price: 12,
    brand: 'Ajax',
  },
  {
    id: 75,
    title: 'Shampoo Dove Cuidado Intenso',
    description: 'Shampoo hidratante que deja tu cabello suave y manejable.',
    imgSrc:
      'https://i.pinimg.com/236x/f4/80/8e/f4808eb27f3fd7543c50a4e9df08f9d3.jpg',
    category: 'Aseo',
    price: 8,
    brand: 'Dove',
  },
  {
    id: 76,
    title: 'Jabón Dove en Barra',
    description: 'Jabón en barra con crema hidratante para una piel suave.',
    imgSrc:
      'https://i.pinimg.com/236x/89/79/fb/8979fba28864e20f96113bb90b18e417.jpg',
    category: 'Aseo',
    price: 5,
    brand: 'Dove',
  },
  {
    id: 77,
    title: 'Papel Higiénico Scott',
    description:
      'Papel higiénico de doble capa con máxima suavidad y resistencia.',
    imgSrc:
      'https://i.pinimg.com/736x/56/4d/7f/564d7fc9eeb1b1894874c6d3d75a81d6.jpg',
    category: 'Aseo',
    price: 10,
    brand: 'Scott',
  },
  {
    id: 78,
    title: 'Toallas de Cocina Scott',
    description:
      'Toallas absorbentes para limpiar derrames de manera eficiente.',
    imgSrc:
      'https://i.pinimg.com/236x/ea/eb/29/eaeb29f7a1e38f5dbd0a0b814f112f81.jpg',
    category: 'Aseo',
    price: 6,
    brand: 'Scott',
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
