//EXERCISE 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//part "a"
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.


let guestList: string[]= ['Adeeba ','Sara ','Fazila ','Aqsa '];
let personNotAttending : string='Fazila ';
console.log(personNotAttending + 'will not reachout for dinner due to her busy schedule' );

let newGuest: string = 'Azkia';
guestList [2] = newGuest;

let message: string = 'Hi!! i am planning a dinner tommorow at "ClockTower". So i would really like if you will come and join it. "T H A N K Y O U !!" ';

for(let i=0; i<guestList.length; i++){
    console.log( guestList[i] + message );
}