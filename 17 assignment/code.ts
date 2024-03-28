//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.




let guestList: string[] =['Adeeba ','Sara ','Azkia','Aqsa','Areeba','Saba','Isha','Zainab'];

//Add a new line that prints a message saying that you can invite only two people for dinner.

console.log('Due to limmited space because we just found out that new dinner table won’t arrive in time for the dinner, and now we have space for only two guests.');

//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while(guestList.length > 2){
   let removeGuest = guestList.pop();
   console.log(`Sorry Miss ${removeGuest}, You are not invited for dinnner due to not availability of big dinning table`);
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.

let message: string = 'you are still invited for the dinner "T H A N K Y O U !!" ';

for(let i=0; i<guestList.length; i++){
    console.log(guestList[i] + message);
}

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guestList.splice(0, 2);
console.log(guestList);