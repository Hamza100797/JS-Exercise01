/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
*/

const show_magicians = (e) => {
    console.log(e)
}

const make_great = () => {
    great_magicians = []

    i = 0;
    console.log(magicians.length)
    while (i < magicians.length) {

        magician = magicians.pop()
        great_magician = magician + ' the Great';
        great_magicians.push(great_magician);

    }
    console.log(great_magicians)
}



magicians = ['Harry Houdini', 'David Blaine', 'Teller', 'David Blaine']

console.log("\n")
make_great(magicians)
// show_magicians(magicians)//