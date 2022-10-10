/*

Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:

    let car = 'subaru';
    console.log("Is car == 'subaru'? I predict True.")
    console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

*/

const IsAdult = (age) => {
    const Isbeverage = age >= 21 ? "Adult Enough offer Him Beer" : "Not adult, Offer him Juice";
    console.log(Isbeverage); // "Beer"
}
IsAdult(12);
IsAdult(21);
IsAdult(121);
IsAdult(45);
IsAdult(18);