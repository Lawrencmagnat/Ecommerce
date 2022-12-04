
const prompt = require("prompt-sync")({ siginit: true });

console.log('Welcome To Lawrence Ecommerce Service App');
const products = ['Shoes', 'Jeans', 'Earponds', 'Generators', 'Speaker', 'Television', 'Phones', 'Fans', 'Refrigerators']

function order(arg) {
    console.log('/**********')
    if (arg == '0') {
        console.log('You just ordered' + products[0])
    } else if (arg == '1') {
        console.log('You just ordered' + products[1])
    } else if (arg == '2') {
        console.log('You just ordered' + products[2])
    } else if (arg == '3') {
        console.log('You just ordered' + products[3])
    } else if (arg == '4') {
        console.log('You just ordered' + products[4])
    } else if (arg == '5') {
        console.log('You just ordered' + products[5])

    } else if (arg == '6') {
        console.log('You just ordered' + products[6])
    } else if (arg == '7') {
        console.log('You just ordered' + products[7])
    } else if (arg == '8') {
        console.log('You just ordered' + products[8])
    } else if (arg == '9') {
        console.log('You just ordered' + products[9])
    }
    console.log('/n**********');

}
let Lawrence = '';
while (Lawrence != 9) {
    console.log('Press 1 to show products');
    console.log('Press 2 to order');
    console.log('Press 9 to exit');
    Lawrence = prompt('')
    if (Lawrence == '1') {
        console.log(products);
    } 1
    if (Lawrence == '2') {
        products.forEach(function (item, index) {
            console.log(`press ${index} to order ${item}`);
        });
        let ord = prompt('')
        order(ord);
    }
}