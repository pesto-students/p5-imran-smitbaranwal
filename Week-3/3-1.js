function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        let key = args.join('+');
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn.apply(null, args));
        return cache.get(key);
    }
}

//Given reducer method:
function add(a,b=0) {
    return a + b;
}
//Create a method called memoize such that:
const memoizeAdd = memoize(add); //then calling...
console.log(memoizeAdd(100,100)); //returns 200
console.log(memoizeAdd(100)); //returns 100
console.log(memoizeAdd(100,200));//returns 300
console.log(memoizeAdd(100,100));//returns 200 without computing