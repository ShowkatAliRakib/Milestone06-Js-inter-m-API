//JSON = JavaScript object Notation


const shop = {
    name: "Rakib",
    address: " Bansbaria",
    Twon: " Chittagong",
    products: [
        "laptop", "mobail", "pepsi",
    ],

    owner: {
        name: " Showkat Ali Rakib",
        profession: " Teacher",
    },
    isExpensive: false
};

const shopStringified = JSON.stringify(shop);

console.log(shopStringified);

// convert object


const converted = JSON.parse(shopStringified);

console.log(converted);