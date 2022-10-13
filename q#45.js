/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.
*/

const CarsDetails = (manufacturer, model, ...rest) => {
    car_dict = {
        'manufacturer': manufacturer,
        'model': model,
        ...rest
    }


    return car_dict
}

hondaCivic = CarsDetails('Honda', 'reborn', color = 'black', tow_package = true);
console.log(hondaCivic)
swift = CarsDetails('Suzuki', 'Suzuki Draft', year = 1991, color = 'white', headlights = 'popup')
console.log(swift)