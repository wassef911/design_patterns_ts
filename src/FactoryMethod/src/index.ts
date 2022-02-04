import { ConcreteCreator1 } from "./class";

/**
 * The client code.
 */
(() => {
    console.log('App: Launched with the ConcreteCreator1.');
    console.log(new ConcreteCreator1().factoryMethod().operation());
})()