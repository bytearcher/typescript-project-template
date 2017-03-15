
import Greeter from "./Greeter";

// to show more information when exception is thrown in async function
process.on("unhandledRejection", (reason: any, p: any) => {
    console.error("Unhandled Rejection at: Promise", p, "reason:", reason);
    process.exit(1);
});

let greeter = new Greeter();
console.log(greeter.greet("Mike"));
