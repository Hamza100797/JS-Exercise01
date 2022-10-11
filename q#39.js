// ity Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned


const city_country = (city = 'Default city Name', country = 'Default country Name') => {
    let msg = console.log(`${city}, ${country}`);
    return msg

}

city_country('Lahore', 'Pakistan');
city_country('Paris', 'Italy');
city_country('London', 'UK');
city_country('New Delhi', 'India');
