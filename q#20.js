/* 

Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
Write a program that creates a list containing these items

*/

mountains = [];
const addMountain = (e) => {
    mountains.push(e);
}
addMountain('K-2');
addMountain('Nanga Parbat');
addMountain('Gashurbrum I');
addMountain('Broad Peak');
addMountain('Gasherbrum II');
console.log(mountains)