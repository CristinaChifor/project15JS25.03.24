// Creaza o clasa Product cu proprietati name, price, description si image
// - toate proprietatile sunt parametri in constructor
// - name - string
// - price - number
// - description - string
// - image - string sub forma cale de fisier ce indica catre o imagine din directorul img 
//          -ex: 'img/jeans1.jpg'
// instantiaza un obiect de test si afiseaza-l in consola
class Product {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

const testProduct = new Product('Golden Ring', 1199.90, 'Some demo description', 'img/jeans2');

console.log(testProduct)

// Creaza o clasa DiscountProduct ce mosteneste din clasa Product:
// - are o proprietate noua discount - numar intreg parametru in constructor (ex: 20)
// - are o metoda getDiscountedPrice() - intoarce pretul produsului cu discount aplicat
// instantiaza un obiect de test si afiseaza-l in consola
class DiscountProduct extends Product {
    constructor(name, price, description, image, discount) {
        super(name, price, description, image);
        this.discount = discount;
    }

    getDiscountedPrice() {
        const discount = (this.discount / 100) * this.price;
        return this.price - discount;
    }
}

const testJeans = new DiscountProduct('Retro Jeans', 120.90, 'Cool retro jeans', 'img/jeans1.jpg', 20);

console.log(testJeans);
console.log(testJeans.getDiscountedPrice());

// creaza un array numit products
// - instantiaza 3 obiecte din clasa DiscountProduct si adauga-le in array-ul creat
// afiseaza array-ul creat in consola
const products = [];
products.push(new DiscountProduct('Retro Jeans', 120.90, 'Cool retro jeans', 'img/jeans1.jpg', 20));
products.push(new DiscountProduct('Slim Jeans', 120.90, 'Cool retro jeans', 'img/jeans2.jpg', 20));
products.push(new DiscountProduct('Flare Jeans', 120.90, 'Cool retro jeans', 'img/jeans3.jpg', 20));
console.log(products);

// folosind 'for...of' itereaza array-ul de obiecte si creeaza elemente HTML sub forma de mai jos
// si adauga-le ca si copii in elementul din DOM cu id='products-list'
/**
 * <div class="card">
        <img src="${product.image}" alt="Denim Jeans">
        <h1>${product.name}</h1>
        <p class="price">
            <span class="full-price">${product.price}</span>
            <span class="discounted-price">${product.getDiscountedPrice()}</span>
        </p>
        <p>${product.description}</p>
        <p><button>Add to Cart</button></p>
    </div>
 */

    const container = document.getElementById('products-list');

    for (const product of products) {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `<img src="${product.image}" alt="Denim Jeans">
                          <h1>${product.name}</h1>
                          <p class="price">
                              <span class="full-price">${product.price}RON</span>
                              <span class="discounted-price">${product.getDiscountedPrice()}RON</span>
                          </p>
                          <p>${product.description}</p>
                          <p><button>Add to Cart</button></p>`;
        
        container.appendChild(card);
    }
    