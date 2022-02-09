import { Implementation } from "./interface";

export class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    operation = (): string => {
        const result = this.implementation.operationImplementation();
        return `Abstraction: Base operation with:\n${result}`;
    }
}

export class ExtendedAbstraction extends Abstraction {
    operation = (): string => {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Extended operation with:\n${result}`;
    }
}

export class ConcreteImplementationA implements Implementation {
    operationImplementation = () => 'ConcreteImplementationA: Here\'s the result on the platform A.';
}

export class ConcreteImplementationB implements Implementation {
    operationImplementation = () => 'ConcreteImplementationB: Here\'s the result on the platform B.';
}