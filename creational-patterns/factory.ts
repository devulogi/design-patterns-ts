interface IProduct {
    name: string
    getName: () => string
    setName: (name: string) => void
}

abstract class ConcreteProduct implements IProduct {
    protected constructor(public name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
}

interface IOptional {
    productPrice?: number
    setPrice?: (price: number) => void
    getPrice?: () => number
}

export class ConcreteProductA extends ConcreteProduct {
    private price: number = 0;
    constructor(optional?: IOptional) {
        super('ConcreteProductA');
        if (optional?.productPrice) {
            this.price = optional?.productPrice;
        }
    }
    getPrice(): number {
        return this.price;
    }
    setPrice(price: number): void {
        this.price = price;
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super('ConcreteProductB');
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super('ConcreteProductC');
    }
}

export class Creator {
    /**
     * Factory method
     * @param someProperty: string
     * @param optional: IOptional
     * @returns {IProduct}: IProduct
     */
    static createObject(someProperty: string, optional?: IOptional): IProduct {
        if (someProperty === 'a') {
            return new ConcreteProductA(optional);
        } else if (someProperty === 'b') {
            return new ConcreteProductB();
        } else {
            return new ConcreteProductC();
        }
    }
}
