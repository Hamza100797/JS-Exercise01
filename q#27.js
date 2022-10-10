/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/


const alien_killed = (alien_color) => {
    if (alien_color === 'green') {
        console.log('You earned 5 point');

    }
    else if (alien_color === 'red') {
        console.log('You earned 10 points')
    }
    else if (alien_color === 'yellow') {
        console.log('You earned 15 points')
    }
    else {
        console.log('Please select [green,red,yellow]')
    }
}
alien_killed('green');
alien_killed('red');
alien_killed('yellow');
alien_killed('pink');