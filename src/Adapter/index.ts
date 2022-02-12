class Adaptee {
    public specificRequest = (): string => '.eetpadA eht fo roivaheb laicepS';
}

class Target {
    public request = (): string => 'Target: The default target\'s behavior.';
}

class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request = (): string => {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}



const adaptee = new Adaptee();
console.log('adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
console.log(adapter.request());
