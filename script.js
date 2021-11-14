const energyPrice = 2;

class Product {
    constructor(id, name, productionYear, price, energyUsage) {
        this.id = id;
        this.name = name;
        this.productionYear = productionYear;
        this.price = price;
        this.energyUsage = energyUsage;
    }

    cost() {
        return this.price;
    }

    energyCost() {
        return this.energyUsage * energyPrice;
    }

    age() {
        return (new Date()).getFullYear() - this.productionYear;
    }

    ageYears() {
        if(this.age() === 1) return this.age() + ' rok';
        else if(this.age() <= 4) return this.age() + ' lata';
        else return this.age() + ' lat'
    }
}


const p1 = new Product(1, 'oven', 2015, 1400, 3);
const p2 = new Product(2, 'TV', 2018, 100, .5);
const p3 = new Product(3, 'DVD', 2020, 5, .2);

//----------------------------------------------------/


class ProductsList {
    constructor() {
        this.content = [];
    }

    printProduct(id) {
        const found = this.content.find(el => el.id == id);
        console.log(found)
    }

    printAllProducts(){
        console.log(...this.content);
    }

    findProduct(id) {
        const found = this.content.find(el => el.id == id);
        return found != null ? found : null;
    }

    addProduct(product){
        if(product instanceof Product) {
            if(this.findProduct(product.id) == null)
                this.content.push(product);
        }
        else {
            console.log('you aren\'t adding product');
        }
    }

    changeProduct(id, product) {
        if(product instanceof Product) {
            for(let el of this.content) {
                if(el.id == id) {
                    el.id = product.id;
                    el.name = product.name;
                    el.productionYear = product.productionYear;
                    el.price = product.price;
                    el.energyCost = product.energyUsage;
                }
            }
        }


    }
}

const list = new ProductsList();
list.addProduct(p1);
list.addProduct(p2);

list.printAllProducts();

list.changeProduct(2, p3);

list.printAllProducts();



//----------------------------------------------------/


class Storage extends ProductsList {
    constructor() {
        super()
        this.content = {} // key: idPruct, value: amount
    }

    addProductWithAmount(product, amount) {
        this.content
    }
}
