import { Component, DecoratorA, DecoratorB } from "./class";
/**
 * The client code.
 */
(() => {
    const simple = new Component();
    console.log('Client: I\'ve got a simple component:');
    console.log(`RESULT: ${simple.operation()}`);
    console.log('');


    const decorator1 = new DecoratorA(simple);
    const decorator2 = new DecoratorB(decorator1);
    console.log('Client: Now I\'ve got a decorated component:');
    console.log(`RESULT: ${decorator2.operation()}`);
})();