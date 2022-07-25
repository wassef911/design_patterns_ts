interface ISubject {
    request(): void;
}

class RealSubject implements ISubject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }
}

class Proxy implements ISubject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request = () => {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess = (): boolean => {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }

    private logAccess = () => console.log('Proxy: Logging the time of request.');

}


(() => {
    console.log('Client: Executing the client code with a real subject:');
    const realSubject = new RealSubject();
    realSubject.request();


    console.log('Client: Executing the same client code with a proxy:');
    const subject = new Proxy(realSubject);
    subject.request();

})()