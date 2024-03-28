//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// lower case 
var personName = "M.Aun";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
// tital case
console.log("titalcase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
