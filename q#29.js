/*
Favorite Fruit: 
Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

Favorite_Fruit = ["bananas", "strawberries", "grapes"];

if (Favorite_Fruit.includes("bananas")) {
    console.log("You really like,bananas");
} else {
    console.log(`You enter a fruit that's is not in your favorite list`);
}

if (Favorite_Fruit.includes("strawberries")) {
    console.log("You really like,strawberries");
} else {
    console.log(`You enter a fruit that's is not in your favorite list`);
}
if (Favorite_Fruit.includes("grapes")) {
    console.log("You really like,grapes");
} else {
    console.log(`You enter a fruit that's is not in your favorite list`);
}

if (Favorite_Fruit.includes("orange")) {
    console.log("Orange is not in your favorite List");
} else {
    console.log(`You enter a fruit that's is not in your favorite list`);
}
if (Favorite_Fruit.includes("apple")) {
    console.log("apple is not in your favorite List");
} else {
    console.log(`You enter a fruit that's is not in your favorite list`);
}
