//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ['Adeeba: ', 'Sara: ', 'Fazila: ', 'Aqsa: '];
var message = ('Hi!! i am planning a dinner tommorow at "ClockTower". So i would really like if you will come and join it. "T H A N K Y O U !!"');
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + message);
}
