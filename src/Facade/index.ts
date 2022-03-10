class Facade {
    protected subSystem1: SubSystem1;
    protected subSystem2: SubSystem2;

    constructor() {
        this.subSystem1 = new SubSystem1();
        this.subSystem2 = new SubSystem2();
    }

    runAllSystems = () => {
        this.subSystem1.init();
        this.subSystem2.init();

        this.subSystem2.run();
        this.subSystem1.run();
    }
}

class SubSystem1 {
    init = () => console.log("SubSystem1 init...\n");
    run = () => console.log("SubSystem1 is running...\n");
}
class SubSystem2 {
    init = () => console.log("SubSystem2 init...\n");
    run = () => console.log("SubSystem2 is running...\n");
}
/**
 * The client code.
 */
(() => {
    const facade = new Facade();
    facade.runAllSystems();
})()