
// Übung Live-Coding

// let emailArr = ["batman@batcave.gotham", "flash@superspeed.nyc", "C3PO@droids.com", "R2D2@droid.com", "steffen@super-code.de"];

// let userAnfrage = "claudio@super-code.de";

// console.log(emailArr.indexOf("claudio@super-code.de"))


// if (emailArr.indexOf("claudio@super-code.de")== -1) {
//     console.log("die E-Mail ist nicht vorhanden")
// } else {
//     console.log("die E-Mail ist vorhanden");
// }

// if (emailArr.indexOf(userAnfrage)== -1) {
//     console.log("die E-Mail ist nicht vorhanden")
// } else {
//     console.log("die E-Mail ist bereits vorhanden");
// }

// ==========================
// Lvl_1_1 + Lvl_1_2
// ==========================

let person = ["Steffi" , "36 Jahre" , "Berlin"];
let friends = ["Verena" , "Stefano" , "Auguste"];
let food = ["Pizza" , "Arranccini" , "Pasta"];

console.log(person);
console.log(person[0])
console.log(person[2])

console.log(friends);
console.log(friends[1])
console.log(friends[2])

console.log(food);
console.log(food[1])


// ==========================
// Lvl_1_3          .length
// ==========================

console.log(person.length);

console.log(friends.length);

console.log(food.length);


// ==========================
// Lvl_1_4          .push
// ==========================

person.push("aus BW");
person.push("Hunde");
console.log(person);

friends.push("Jana" , "Bantam");
console.log(friends)

food.push("Schnitzel", "Eis", "Schokolade");
console.log(food);


// ==========================
// Lvl_1_5          .pop
// ==========================

console.log(person.pop())
// person.pop();
let lastValuePerson = person.pop()
console.log(lastValuePerson);
console.log(person)


console.log(food.pop())
// food.pop();
let lastValueFood = food.pop()
console.log(lastValueFood);
console.log(food)


// ==========================
// Lvl_1_6          .shift
// ==========================

console.log(person);

let firstValuePerson = person.shift();
console.log(firstValuePerson);
// person.shift();
console.log(person);


// ==========================
// Lvl_1_7          .unshift
// ==========================

console.log(food);
food.unshift("Burger" , "Spätzle");
console.log(food);


console.log(friends);
friends.unshift("Giorgia" , "Dani");
console.log(friends);



// ==========================
// Lvl_1_9          .slice
// ==========================

let travel = ["Madeira" , "DR" , "Costa Rica" , "Dominica" , "Saint Lucia"]

console.log(travel);
let travelFavs = travel.slice(1,3);
console.log(travelFavs)
console.log(travel);


// ==========================
// Lvl_1_10          .split
// ==========================

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

console.log(text);


let textSplit = text.split("");
console.log(textSplit);

let textSplit2 = text.split(" ");
console.log(textSplit2);

let textSplit3 = text.split(" " , 5);
console.log(textSplit3);
