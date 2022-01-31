class Singleton {
    private static instance: Singleton;

    private constructor() { }

    static getInstance = () => {
        if (!Singleton.instance) Singleton.instance = new Singleton();
        return Singleton.instance;
    }
    connectToDatabase = () => {
        console.log("Connecting To DB...");
    }
}

/**
 * The client code.
 */
(() => {
    const i = Singleton.getInstance();
    const j = Singleton.getInstance();

    if (i === j) console.log('Singleton works, both variables contain the same instance.');
})()