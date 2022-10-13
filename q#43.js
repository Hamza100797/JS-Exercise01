/**
 Unchanged Magicians: 
 Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
  Because the original array will be unchanged, return the new array and store it in a separate array.
   Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
  
  
  
 */


const show_magicians = (e) => {
    console.log(e)
}

const make_great = () => {
    great_magicians = []

    i = 0;
    let newMagician = [...magicians]
    while (i < newMagician.length) {

        magician = newMagician.pop()
        great_magician = magician + ' the Great';
        great_magicians.push(great_magician);

    }
    console.log(great_magicians)
}



magicians = ['Harry Houdini', 'David Blaine', 'Teller', 'David Blaine']

console.log("\n")
make_great(magicians)
console.log('Original list ')
show_magicians(magicians)