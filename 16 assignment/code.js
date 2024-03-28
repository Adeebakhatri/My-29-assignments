var guestList = ['Adeeba', 'Sara', 'Azkia', 'Aqsa'];
guestList.unshift('Areeba', 'Saba', 'Isha', 'Zainab');
var message = 'Hi!! i am planning a dinner tommorow at "ClockTower". So i would really like if you will come and join it. "T H A N K Y O U !!" ';
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i] + message);
}
