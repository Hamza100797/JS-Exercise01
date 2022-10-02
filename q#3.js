// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = 'Hamza bin khurshid';

// upperCase
console.log(personName.toUpperCase())

// lowerCase
console.log(personName.toLowerCase())

// titleCase
const titleCase = (string) => {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    return sentence;
}
titleCase(`${personName}`);


