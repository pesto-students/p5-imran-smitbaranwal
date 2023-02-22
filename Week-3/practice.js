
// ---------proxy starts
const target = {
    fullname: 'smit baranwal'
};
//const handler = {};
// const handler = {
//     get(target, keyname) {
//         console.log(`trap is called as getter for key '${keyname}'`);
//         return 'hero'; //override the actual value return withour get function
//     }
// }
const handler = {
    get(target, keyname) {
        console.log(`trap is called as getter for key '${keyname}'`);
        return target[keyname];
    }
}
const proxys = new Proxy(target, handler);
console.log(proxys.fullname);
//----------------------

const target4 = {
    firstname: 'smit',
    lastname: 'baranwal'
};

const handler1 = {
        get(obj, propname) {
            console.log(`${propname} is retrieved from object and value is ${obj[propname]}`);
            return obj[propname];
        },
        set(target, property, value) {
            target[property] = value;
        }
        };
        


const {proxy, revoke} = Proxy.revocable(target4, handler1);
proxy.fullname = 'smit baranwal'; 

console.log(proxy.fullname);
revoke();
console.log(proxy.fullname);

//-----------------------------------------------
const arr = [{name: 'smit', b: 6}, {name: 'gaurav', b: 44}];
//arr.map(obj => delete obj.name);
arr.map(obj => Reflect.deleteProperty(obj, 'name'));
console.log(arr);
//----------------------------------------
const target3 = {
    firstname: 'smit',
    lastname: 'baranwal'
};

function logger(obj) {
    return new Proxy(obj, {
        get(obj, propname) {
            console.log(`${propname} is retrieved from object and value is ${obj[propname]}`);
            return obj[propname];
        },
        set(target, property, value) {
            //target['hello'] = value;
        }
    })
}

let log = logger(target3);
log.fullname = 'smit baranwal'; 
//log.firstname;
//console.log(log.firstname);
console.log(target3.hello);
//--------------------------

const targetnew = {
    firstname: 'smit',
    lastname: 'baranwal'
};

function logger(obj) {
    return new Proxy(obj, {
        get(obj, propname) {
            console.log(`${propname} is retrieved from object and value is ${obj[propname]}`);
            return obj[propname];
        }
    })
}

let log = logger(targetnew);
//log.firstname;
console.log(log.firstname);




//----------proxy end-------

const obj1 = {
    // toString: function(){
    //     console.log('to string function');
    // }
};
console.log((() => {
    let arr = [];
    for(k in obj1) {
        arr.push(k);
    }
    return arr;
})());
console.log('toLocaleString' in obj1);
console.log(obj1.hasOwnProperty('toString'));


Object.prototype.isMyProp = 68;
let obj = {
    enumerable: 'is Enumerable'
};
Object.defineProperty(obj, 'nonEnumerable', {
    value: 'is not enumerable',
    enumerable: false
});
function forIn(obj) {
    let result = [];
    for(let k in obj) {
        result.push(k);
    }
    return result;
}
function getAllProperties(obj) {
    let result = [];
    let i = 0;
    while(obj) {
        console.log('iteration', ++i);
        result = result.concat(Object.getOwnPropertyNames(obj));
        obj = Object.getPrototypeOf(obj);
    }
    return result;
}
console.log(Object.keys(obj));
console.log(forIn(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(getAllProperties(obj));


//-------------------
// class Parent{
//     constructor(name) {
//         this.name = name;
//     }
//     printName() {
//         console.log(`name is ${this.name}`);
//     }
// }
// class Child extends Parent {
//     constructor(name, id) {
//         //super(name);
//         this.id = id;
//     }
//     printId() {
//         console.log(`Id is ${this.id}`);
//     }
// }
// var c = new Child('smit', 48);
// c.printName();
// c.printId();

//-------------------


// function Parent(name) {
//     this.name = name;
// }
// Parent.prototype.printName = function() {
//     console.log(`name is ${this.name}`);
// }
// function Child (name, id) {
//     Parent.call(this, name);
//     this.id = id;
// }
// Object.setPrototypeOf(Child.prototype, Parent.prototype);
// Child.prototype.printId = function() {
//     console.log(`ID is ${this.id}`);
// }

// let c = new Child('smit', 29);
// c.printName();
// c.printId();

//-------------------
// let parent = {name: 'parent'};
// let child = Object.create(parent);
// child.lastName = 'baba';
// console.log(child);
// console.log(child.name);
// console.log(parent.__proto__);
// console.log(Object.getPrototypeOf(child));
// console.log(Reflect.getPrototypeOf(parent));
// console.log(Object.getPrototypeOf(parent));

//-------------------
// function fib(x) {    //3
//     if (x<2) {        //3 + 2 + 
//         return x;
//     }
//     return fib(x-1) + fib(x-2);
// }

// function time(fn) {
//     console.time();
//     fn();
//     // console.log(fn());
//     console.timeEnd();
// }

// function memoize(fn) {
//     const cache = new Map();
//     return function(...args) {
//         let key = args.toString();
//         if (!cache.has(key)) {
//             cache.set(key, fn(key));
//         }
//         return cache.get(key);
//     }
// }
// const fibM = memoize(fib);
// time(() => fibM(35));
// time(() => fibM(40));
// time(() => fibM(40));
// time(() => fibM(40));
// time(() => fibM(35));
// time(() => fibM(27));


// for (var i=0; i < 3; i++) {
//     setTimeout((
//         function cc(i) {
//             return function abc() {
//         console.log(i);
//     }
//         }
//         )(i), 1000);
// }


function isVowel(char){
    return "aeiou".includes(char);
}
function vowelCount(str){
    const vowelMap=newMap();
    for(letcharofstr) {
        letlowerCaseChar=char.toLowerCase();
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
            }else{
                vowelMap.set(lowerCaseChar,1);
            }
        }
    }
    returnvowelMap;
}