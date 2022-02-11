interface IOperation {
    operation(): string;
};

export class Component implements IOperation {
    public operation(): string { return 'Component' }
};

class Decorator implements IOperation {
    protected component: IOperation;

    constructor(component: IOperation) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    };
};


export class DecoratorA extends Decorator {
    public operation(): string {
        return `DecoratorA(${super.operation()})`
    };
};

export class DecoratorB extends Decorator {
    public operation(): string {
        return `DecoratorB(${super.operation()})`
    };
};
