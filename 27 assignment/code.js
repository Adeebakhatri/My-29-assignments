//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//Write three versions of this program, making sure each message is printed for the appropriate color alien.
//If the alien is green, print a message that the player earned 5 points.
var color = 'Green';
if (color == 'Green') {
    console.log('Version 1:!!The player earned 5 points!!');
}
else if (color == 'Yellow') {
    console.log('Version 1:!!The player earned 10 points!!');
}
else if (color == 'Red') {
    console.log('Version 1:!!The player earned 15 points!!');
}
//If the alien is yellow, print a message that the player earned 10 points.
color = 'Yellow';
if (color == 'Green') {
    console.log('Version 2:!!The player just earned 5 points!!');
}
else if (color == 'Yellow') {
    console.log('Version 2:!!The player just earned 10 points!!');
}
else if (color == 'Red') {
    console.log('Version 2:!!The player just earned 15 points!!');
}
//If the alien is red, print a message that the player earned 15 points.
color = 'Red';
if (color == 'Green') {
    console.log('Version 3:!!The player just earned 5 points!!');
}
else if (color == 'Yellow') {
    console.log('Version 3:!!The player just earned 10 points!!');
}
else if (color == 'Red') {
    console.log('Version 3:!!The player just earned 15 points!!');
}
