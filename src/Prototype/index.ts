class Prototype {
    public primitive: number;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

/**
 * The client code.
 */
(() => {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();
    // will result in error because of circular reference
    //const p2 = JSON.parse(JSON.stringify(p1));
    if (p1.primitive === p2.primitive)
        console.log('Primitive field values have been carried over to a clone. Yay!');

    if (p1.component !== p2.component)
        console.log('Simple component has been cloned. Yay!');


    if (p1.circularReference !== p2.circularReference)
        console.log('Component with back reference has been cloned. Yay!');


    if (p1.circularReference.prototype !== p2.circularReference.prototype)
        console.log('Component with back reference is linked to the clone. Yay!');

})()