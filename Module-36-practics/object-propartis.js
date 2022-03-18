const bottle = {
    color: "yellow",
    hold: "Water",
    price: "50",
    isCleaned: "true",
};


// keys ai proparti ta sodo object ar kyes golo k dy 
const keys = Object.keys(bottle);
// console.log(keys);

// Values  proparti ta key ar value golo k dekai
const values = Object.values(bottle);
// console.log(values);

// entries ai proparti ta kyes and values jodai jodai dekai
const pairs = Object.entries(bottle);
// console.log(pairs);


// freeze korle  kono proparti delete korte chaile hobe na value set korte chaile seta o hobe na .... 
Object.freeze(bottle);

//seal marar por kono proparti delete korte chaile hobe na ..... seal marar age delete korte parbe 
Object.seal(bottle);
// console.log(bottle);

//seal korar por proparti ar value set kra jabe 
bottle.price = 200;
console.log(bottle);


// delete ar proparti 
delete bottle.isCleaned;
// console.log(bottle);





const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);