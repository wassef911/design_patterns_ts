import { Product } from "./interface";

abstract class Creator {

    constructor() { }

    public abstract factoryMethod(): Product;
    // optionally define general operation here  
    public someOperation = () => { }
}
// any new product should implement the default product interface...
export class ConcreteProduct1 implements Product {
    public operation = (): string => '{Result of the ConcreteProduct1}'
}

// any new product should have a creator class extending default C and defining the factory
export class ConcreteCreator1 extends Creator {
    public factoryMethod = (): Product => new ConcreteProduct1()
}

