/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/


guestList = ['Ali', 'Hamza', 'Mahnoor', 'Shery', 'Ansar', 'Sajal'];
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