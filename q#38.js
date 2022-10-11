/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. 
Give the parameter for the country a default value. 

Call your function for three different cities, at least one of which is not in the default country.


*/

const describe_city = (city = 'Default city Name', country = 'Default country Name') => {
    console.log(`${city} is in ${country}`)

}

describe_city('Karachi', 'Pakistan');
describe_city('Islamabad', 'Pakistan');
describe_city('Lahore', 'Pakistan');
describe_city(...[, 'India'])//When 1st argument is default
describe_city(...['New Delhi',])//When 2nd argument is default
describe_city(...[,]) //Both Argument is default