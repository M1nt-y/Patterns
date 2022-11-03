class Singleton {
    private static instance: Singleton;

    data: string;

    private constructor(d: string) {
        this.data = d;
    }

    public static getInstance(d: string) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(d);
        }

        return Singleton.instance;
    }
}

const singleton1 = Singleton.getInstance('Singleton');

console.log(singleton1.data);

const singleton2 = Singleton.getInstance('Some another string');

console.log(singleton2.data);

console.log(singleton1 === singleton2);