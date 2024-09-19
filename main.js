const products = [
    {
        name: 'HP Essentials 255 G8 AMD',
        price: 289,
        stars: 4,
        reviews: 250,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1029/10294184/1713-hp-255-g8-amd-ryzen-3-5300u-8-gb-256gb-ssd-156.jpg',
        brand: 'HP',
        category: 'laptops',
        processor: 'AMD'
    },
    {
        name: 'Acer Aspire 5 A515-55G',
        price: 599,
        stars: 5,
        reviews: 150,
        seller: 'Acer Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1081/10818061/1288-acer-aspire-5-a515-58p-57jn-intel-core-i5-1335u-16gb-512gb-ssd-156.jpg',
        brand: 'Acer',
        category: 'laptops',
        processor: 'Intel'
    },
    {
        name: 'Dell XPS 13',
        price: 999,
        stars: 4,
        reviews: 300,
        seller: 'Dell Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/28/286308/dell-xps-7390-intel-core-i7-10510u-16gb-512gb-ssd-133.jpg',
        brand: 'Dell',
        category: 'laptops',
        processor: 'Intel'
    },
    {
        name: 'Apple MacBook Air',
        price: 1199,
        stars: 5,
        reviews: 400,
        seller: 'Apple Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/33/335377/1575-apple-macbook-air-apple-m1-8gb-256gb-ssd-gpu-hepta-core-133-gris-espacial.jpg',
        brand: 'Apple',
        category: 'laptops',
        processor: 'Apple M1'
    },
    {
        name: 'Lenovo ThinkPad X1 Carbon',
        price: 1399,
        stars: 5,
        reviews: 200,
        seller: 'Lenovo Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1079/10796143/1910-lenovo-thinkpad-x1-carbon-gen-11-intel-core-i5-1335u-16-gb-512gb-ssd-14.jpg',
        brand: 'Lenovo',
        category: 'laptops',
        processor: 'Intel'
    },
    {
        name: 'ASUS ROG Zephyrus',
        price: 1599,
        stars: 4,
        reviews: 350,
        seller: 'ASUS Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1082/10822019/1258-asus-rog-zephyrus-g16-2024-oled-gu605mi-qr043w-intel-core-ultra-9-185h-32gb-1tb-ssd-rtx-4070-16.jpg',
        brand: 'ASUS',
        category: 'laptops',
        processor: 'AMD'
    },
    {
        name: 'Samsung Galaxy Tab S7',
        price: 649,
        stars: 4,
        reviews: 150,
        seller: 'Samsung Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1057/10571787/1710-samsung-galaxy-tab-s7-fe-64gb-wifi-negra-version-importada-eu-0254991e-d045-463b-bc09-1e0b09577189.jpg',
        brand: 'Samsung',
        category: 'tablets',
        processor: 'Qualcomm'
    },
    {
        name: 'Microsoft Surface Pro 7',
        price: 899,
        stars: 4,
        reviews: 250,
        seller: 'Microsoft Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1032/10329715/1859-microsoft-surface-pro-7-intel-core-i5-1135g7-16gb-256gb-ssd-123-tactil-platino.jpg',
        brand: 'Microsoft',
        category: 'tablets',
        processor: 'Intel'
    },
    {
        name: 'MSI GF63 Thin',
        price: 899,
        stars: 4,
        reviews: 150,
        seller: 'MSI Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1080/10801806/1884-msi-bravo-15-c7ve-288xes-amd-ryzen-5-7535hs-16gb-512gb-ssd-rtx-3050-156.jpg',
        brand: 'MSI',
        category: 'laptops',
        processor: 'Intel'
    },
    {
        name: 'Huawei MateBook D 14',
        price: 799,
        stars: 4,
        reviews: 100,
        seller: 'Huawei Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1067/10676216/1327-huawei-matebook-d-16-intel-core-i5-12450h-16gb-512gb-ssd-16.jpg',
        brand: 'Huawei',
        category: 'laptops',
        processor: 'AMD'
    },
    {
        name: 'HP Spectre x360',
        price: 1299,
        stars: 5,
        reviews: 300,
        seller: 'HP Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1081/10815586/1231-hp-spectre-x360-14-eu0003ns-intel-core-ultra-7-155h-16gb-1tb-ssd-14-tactil.jpg',
        brand: 'HP',
        category: 'laptops',
        processor: 'Intel'
    },
    {
        name: 'Apple iPad Pro',
        price: 1099,
        stars: 5,
        reviews: 500,
        seller: 'Apple Store',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/1063/10635716/1518-apple-ipad-pro-2022-11-wifi-128gb-plata.jpg',
        brand: 'Apple',
        category: 'tablets',
        processor: 'Apple M1'
    }
];

// Función para mostrar los productos en la página
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar productos

    products.forEach(product => {
        const productCard = document.createElement('li');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Precio: ${product.price}€</p>
            <p>Vendedor: ${product.seller}</p>
            <p>Estrellas: ${'★'.repeat(product.stars)} (${product.reviews} reseñas)</p>
        `;
        productContainer.appendChild(productCard);
    });
}

// Inicializa la vista con todos los productos al cargar la página
displayProducts(products);

// Función para filtrar los productos
function filterProducts() {
    const priceRange = document.getElementById('price-range').value;
    const [minPrice, maxPrice] = priceRange ? priceRange.split('-').map(Number) : [0, Infinity];
    const brand = document.getElementById('brand').value;
    const category = document.getElementById('category').value;
    const processor = document.getElementById('processor').value;

    const filteredProducts = products.filter(product => 
        product.price >= minPrice &&
        product.price <= maxPrice &&
        (brand === '' || product.brand === brand) &&
        (category === '' || product.category === category) &&
        (processor === '' || product.processor === processor)
    );

    displayProducts(filteredProducts);
}

// Añadir evento al botón de filtro
document.getElementById('filter-button').addEventListener('click', filterProducts);


//Funcionalidad del Botón de Búsqueda

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productName = product.querySelector('h2').innerText.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
 

// Función para buscar productos por cualquier atributo en la barra de búsqueda
// Función para buscar productos por nombre en el buscador
const buscarProductos = () => {
    const terminoBusqueda = document.getElementById('search-bar').value.toLowerCase(); // El término de búsqueda
  
    const productosFiltrados = products.filter(product =>
      product.name.toLowerCase().includes(terminoBusqueda) ||
      product.stars.toLowerCase().includes(terminoBusqueda) ||
      product.reviews.toLowerCase().includes(terminoBusqueda) ||
      product.seller.toLowerCase().includes(terminoBusqueda) ||
      product.processor.toLowerCase().includes(terminoBusqueda) ||
      product.brand.toLowerCase().includes(terminoBusqueda) ||
      product.category.toLowerCase().includes(terminoBusqueda)

    );
    
    listaProductos(productosFiltrados); // Actualiza la lista de productos
  };

//Para que al pulsar enter o hacer click en la lupa filtre los resultados


document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');
    
    // Función para ejecutar la búsqueda
    function executeSearch() {
        const searchText = searchBar.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const productName = card.querySelector('h2').textContent.toLowerCase();
            if (productName.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Event listener para el botón de búsqueda
    searchButton.addEventListener('click', executeSearch);
    
    // Event listener para la tecla Enter en el campo de búsqueda
    searchBar.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            executeSearch();
        }
    });
});


/* Para hacer que la barra lateral de filtros se desplace hacia arriba y se oculte cuando el usuario hace scroll hacia abajo en la página. 
Cuando el usuario hace scroll hacia arriba, los filtros vuelven a ser visibles. */

document.addEventListener("DOMContentLoaded", function() {
    const filters = document.getElementById('filters');
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down - hide filters
            filters.style.top = `-${filters.offsetHeight}px`;
        } else {
            // Scroll up - show filters
            filters.style.top = "0";
        }
        lastScrollTop = scrollTop;
    });
});