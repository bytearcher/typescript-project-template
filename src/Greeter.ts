
export = class Greeter {
    greet(name: string) {
        return `Hello, ${name}`;
    }

    greetAsync(name: string): Promise<string> {
        return Promise.resolve(`I'm asynchronous. ${this.greet(name)}`);
    }
}
