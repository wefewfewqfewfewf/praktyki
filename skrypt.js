const products = [
    { name: "Karma dla psów", price: 50, manufacturer: "DogFood Inc." },
    { name: "Karma dla kotów", price: 45, manufacturer: "CatFood Co." },
    { name: "Karma dla ptaków", price: 30, manufacturer: "BirdFeeder Ltd." },
    { name: "Buda dla psa", price: 120, manufacturer: "DogFood Inc." },
    { name: "Buda dla kota", price: 35, manufacturer: "CatFood Co." },
    { name: "Buda dla ptaka", price: 25, manufacturer: "BirdFeeder Ltd." },
    { name: "Zabawka dla psa", price: 10, manufacturer: "DogFood Inc." },
    { name: "Zabawka dla kota", price: 5, manufacturer: "CatFood Co." },
    { name: "Zabawka dla ptaka", price: 15, manufacturer: "BirdFeeder Ltd." }
];

function renderProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4', 'mb-3');
        productCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Cena: ${product.price}zł | Producent: ${product.manufacturer}</p>
                </div>
            </div>
        `;
        productList.appendChild(productCard);

        const cardTitle = productCard.querySelector('.card-title');
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        if (searchTerm.length >= 3 && product.name.toLowerCase().includes(searchTerm)) {
            const highlightedText = product.name.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlight">${match}</span>`);
            cardTitle.innerHTML = highlightedText;
        }
    });
}

document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
    
    renderProducts(filteredProducts);
});

function renderManufacturers() {
    const manufacturersDiv = document.getElementById('manufacturers');
    manufacturersDiv.innerHTML = '';

    const manufacturers = [...new Set(products.map(product => product.manufacturer))];
    manufacturers.forEach(manufacturer => {
        const manufacturerButton = document.createElement('button');
        manufacturerButton.classList.add('btn', 'btn-dark', 'mr-2');
        manufacturerButton.textContent = manufacturer;
        manufacturerButton.addEventListener('click', function() {
            const filteredByManufacturer = products.filter(product => product.manufacturer === manufacturer);
            renderProducts(filteredByManufacturer);
        });
        manufacturersDiv.appendChild(manufacturerButton);
    });
}

function filterProducts() {
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;

    let filteredProducts = products;

    if (minPrice !== '' && !isNaN(minPrice)) {
        filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
    }

    if (maxPrice !== '' && !isNaN(maxPrice)) {
        filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));
    }

    renderProducts(filteredProducts);
}

document.getElementById('filterButton').addEventListener('click', filterProducts);

renderProducts(products);
renderManufacturers();





function goToPage(page) {
		


    var content = "";
    switch (page) {
        case 1:
            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum imperdiet bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam rhoncus nunc non augue imperdiet lacinia. Donec ultrices nec metus et semper. Curabitur velit odio, iaculis dignissim elit eu, commodo tincidunt felis. Mauris eu nulla finibus, dictum mi a, rutrum nulla. Etiam nec bibendum sapien. Quisque a eros quis mi tristique elementum. Cras est leo, gravida et lectus hendrerit, lobortis facilisis arcu. Quisque luctus, neque sit amet sollicitudin sollicitudin, metus nulla dignissim quam, sed suscipit enim justo ac massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vulputate gravida consectetur.";
            
            break;
        case 2:
            content = "<a href='hahaha.html'><img src='facebook-app-symbol.png'  width='50px' height='50px'></a> <a href='hahaha.html'><img src='tik-tok.png'  width='50px' height='50px'></a> <a href='hahaha.html'><img src='instagram.png'  width='50px' height='50px'></a>";
            break;
        case 3:
            content = "<img src='envelope.png' width='50px' height='50px'>  orzel@o2.pl <br><img src='phone-call.png' width='50px' height='50px'>123-456-789";
            break;
           
           

    
    }
    document.getElementById("content").innerHTML = content;
    
}