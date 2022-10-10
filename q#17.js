/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
    print a message to that person letting them know you’re sorry you can’t invite them to dinner
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

*/


let guestList = ['Ali', 'Hamza', 'Mahnoor', 'Shery', 'Ansar', 'Sajal'];
guestList.pop()
guestList.push('Khurshid Afsar')
guestList.forEach(e => {
    console.log(`${e},Welcome to Dinner.`)
});


console.log('Sorry For connivent,We just book bigger Dinner Table,Yours presence is highly appreciable');

//Adding element in Start of array
guestList.unshift('Omair Munir')


//Finding middle index of array
var middleIndex = Math.floor(guestList.length / 2)
console.log(middleIndex)

//Adding new element 
guestList.splice(middleIndex, 0, 'Komol');





console.log(`New Updated List of guests \n`);

// For Each loop 
guestList.forEach(e => {
    console.log(`Welcome to dinner,Mr/Mrs ${e}`)
})


//Q#17

console.log(`Sorry For connivent,We just book bigger Dinner,but that's late ,Yours presence is highly appreciable, We can invite only two people for dinner`);
totalguest = guestList.length;
console.log(totalguest)
guestList.forEach(e => {
    if (guestList.length !== 2) {
        guestList.pop()
        console.log(`${e}, Sorry not Invited`)
    }
});
console.log(guestList)