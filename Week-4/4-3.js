const Fib = (fibTill) => ({
    [Symbol.iterator]: () => {
        //let i = 0;
        let prev = 0, next = 0;
        return {
            next: () => {
                if (next <= fibTill) {
                    [prev, next] = [next, (prev + next) || 1];
                    return {value: prev, done: false};
                } else {
                    return {done: true};
                }
            }
        }
    }
});

// console.log([...Fib(6)]);
for (let num of Fib(700)) {
    console.log(num);
}