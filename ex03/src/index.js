var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
};
function myFunction(myObj) {
    var vegetableValue = myFood["vegetable"];
    var furitValue = myFood["fruit"];
    var drinkValue = myFood["drink"];
    return { vegetableValue, furitValue, drinkValue };
}

console.log(myFunction(myFood));
module.exports = myFunction(myFood);