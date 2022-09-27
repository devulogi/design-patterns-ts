class Product {
    /**
     * The Builder is only responsible for constructing the different parts of
     * the product by implementing the `producePartA`, `producePartB` and
     * `producePartC` methods. The `getProduct` method is used to retrieve the
     * finished product.
     * @private
     */
    private _parts: string[] = [];

    public add(part: string): void {
        this._parts.push(part);
    }

    public show(): void {
        console.log("Product parts: " + this._parts.join(", "));
    }
}

interface IBuilder {
    buildPartA(): this;
    buildPartB(): this;
    buildPartC(): this;
    getResult(): Product;
}

/**
 * The Concrete Builder classes follow the Builder interface and provide
 * specific implementations of the building steps. Your program may have
 * several variations of Builders, implemented differently.
 * The Builder design pattern allows you to produce different types and
 * representations of an object using the same construction code.
 */
class Builder implements IBuilder {
    /**
     * The Builder's product is a complex object that requires extensive configuration.
     * The Builder provides an API for configuring the product's parts.
     * @private {Product}
     */
    private readonly _product: Product;

    constructor() {
        this._product = new Product();
    }

    buildPartA(): this {
        this._product.add("Part A");
        return this;
    }

    buildPartB(): this {
        this._product.add("Part B");
        return this;
    }

    buildPartC(): this {
        this._product.add("Part C");
        return this;
    }

    getResult(): Product {
        return this._product;
    }
}

class Director {
    // Builder Design Pattern uses a complex series of steps to create a product
    /**
     * The Director is only responsible for executing the building steps in a particular sequence.
     * @param builder {IBuilder}
     */
    static construct = (builder: IBuilder): Product => builder.buildPartA().buildPartB().buildPartC().getResult();
}

const builder = new Builder();
const product = Director.construct(builder);