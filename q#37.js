// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.



const make_shirt = (size = 'L', printedMsg) => {
    console.log(`You request shirt having ${size} size having message ${printedMsg}`);
}


make_shirt(...[, 'Kya Hum ghulam Hain'])