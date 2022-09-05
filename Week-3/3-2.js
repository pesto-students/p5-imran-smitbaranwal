function Mobile(type, memorySpace) {
    this.type = type;
    this.memorySpace = memorySpace;
    console.log('called from Mobile fn ', this);
}

function callExample(brand) {
    this.brand = brand;
    Mobile.call(this, 'Smartphone', '128Gb');
}

function applyExample(capacity) {
    this.batteryCapacity = capacity;
    Mobile.apply(this, ['Non Smart', '32Gb']);
}

const smartPhone = new callExample('Samsung');
const nonSmart = new applyExample('4500MAh');
const bindExp = Mobile.bind(smartPhone, 'non smart', '13Gb');
bindExp();