const products = [
    {
      name: 'HP Essentials 255 G8 AMD',
      price: 289,
      stars: 4,
      reviews: 250,
      seller: 'PcComponentes',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    },
    {
      name: 'Acer Aspire 5 A515-55G',
      price: 599,
      stars: 5,
      reviews: 150,
      seller: 'Acer Store',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1002/10028652/1507-acer-aspire-5-a515-55g.jpg'
    },
    {
      name: 'Dell XPS 13',
      price: 999,
      stars: 4.5,
      reviews: 100,
      seller: 'Dell Store',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1003/10031704/1351-dell-xps-13.jpg'
    },
    {
      name: 'MacBook Air',
      price: 1099,
      stars: 5,
      reviews: 200,
      seller: 'Apple Store',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1012/10123796/1411-macbook-air.jpg'
    },
    {
      name: 'Lenovo IdeaPad 3',
      price: 399,
      stars: 4,
      reviews: 180,
      seller: 'Lenovo Store',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1004/10040736/1507-lenovo-ideapad-3.jpg'
    },
    {
      name: 'ASUS VivoBook 15',
      price: 499,
      stars: 4.5,
      reviews: 170,
      seller: 'ASUS Store',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1002/10025750/1507-asus-vivobook-15.jpg'
    },
    {
      name: 'Samsung Galaxy Book',
      price: 799,
      stars: 4.5,
      reviews: 120,
      seller: 'Samsung Store',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1009/10096208/1451-samsung-galaxy-book.jpg'
    },
    {
      name: 'Microsoft Surface Laptop',
      price: 1299,
      stars: 5,
      reviews: 90,
      seller: 'Microsoft Store',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1003/10031004/1511-microsoft-surface-laptop.jpg'
    },
    {
      name: 'MSI Modern 14',
      price: 699,
      stars: 4,
      reviews: 130,
      seller: 'MSI Store',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1007/10076908/1507-msi-modern-14.jpg'
    },
    {
      name: 'Huawei MateBook D15',
      price: 649,
      stars: 4.5,
      reviews: 110,
      seller: 'Huawei Store',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1006/10062636/1507-huawei-matebook-d15.jpg'
    }
  ];
  
  // Seleccionamos el contenedor donde se agregarán las tarjetas de productos
  const productList = document.getElementById('product-list');
  
  // Iteramos sobre los productos
  products.forEach(function(product) {
    // Creamos un div para la tarjeta del producto
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
  
    // Creamos la estructura interna de la tarjeta
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.stars} stars (${product.reviews} reviews)</p>
      <p>Seller: ${product.seller}</p>
    `;
  
    // Añadimos la tarjeta al contenedor de la lista de productos
    productList.appendChild(productCard);
  });
  