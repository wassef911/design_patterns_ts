import { Abstraction, ConcreteImplementationA, ConcreteImplementationB, ExtendedAbstraction } from "./class";

/**
 * The client code.
 */
(() => {
    let implementation = new ConcreteImplementationA();
    let bridge = new Abstraction(implementation);
    console.log(bridge.operation());

    implementation = new ConcreteImplementationB();
    bridge = new ExtendedAbstraction(implementation);
    console.log(bridge.operation());
})()