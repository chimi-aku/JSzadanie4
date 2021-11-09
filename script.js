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

const productsList = new ListArr

console.log(p1.ageYears());