export const handleIntegrateMP = async items => {
  const preferencia = {
    items: [
      {
        title: 'Producto',
        description: 'Sin descripción',
        category_id: 'No categoria',
        quantity: 1,
        currency_id: 'USD',
        unit_price: 10,
      },
    ],
  };

  try {
    const response = await fetch(
      'https://api.mercadopago.com/checkout/preferences',
      {
        method: 'POST',
        headers: {
          Authorization:
            'Bearer APP_USR-5615522427885606-102412-b371d23e501c42849d2f0b38bc3de926-666686066',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preferencia),
      },
    );

    const data = await response.json();
    return data.init_point;
  } catch (error) {
    console.log(error);
  }
};
