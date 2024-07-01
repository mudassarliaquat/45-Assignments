// Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.

// Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”

let name1: string = "Mudassar Ali";

console.log(`Hello ${name1}, would you like to learn some TypeScript today?`)

// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "Mudassar Ali";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()) + personName.slice(10).toLowerCase();

// Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"

console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');


//Question 5: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_Person = "Albert Einstein once said";
let message = `${famous_Person}, “A person who never made a mistake never tried anything new.”`;
console.log(message);


// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let personsName = "\tMudassar Ali\t   ";
console.log(personsName);
console.log(personsName.trim());

// Question 7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.

console.log(4+4); // For Addition 
console.log(12-4); // For Subtraction
console.log(4*2); // For Multiplication
console.log(16/2); // For Division


// Question 8: You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5+3);
console.log(4+4);
console.log(6+2);
console.log(7+1);

// Question 9: Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.

let favoriteNumber : Number = 2809
console.log(`"My favoriteNumber is = ${favoriteNumber}"`);


// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.

console.log(4+4); // For Addition 
console.log(12-4); // For Subtraction
console.log(4*2); // For Multiplication
console.log(16/2); // For Division

// Question # 11
// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["Muhammad","Zeeshan","Rehman","Nadeem"];
for (let index = 0; index < names.length; index++) {
    console.log(names[index]); 

}

// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

let friendNames: string[] = ["Muhammad", "Zeeshan", "Rehman", "Nadeem"];

for (let name of friendNames) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}


// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests
let guest: string[] = ["Aman", "Muzammil", "Hammad"];
console.log("Great news! I found a bigger dinner table!");

guest.unshift("Burhan");
guest.splice(guest.length / 2, 0, "Usama");
guest.push("Farzil");

guest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});



// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

let guests: string[] = ["Aman", "Muzammil", "Hammad"];
console.log("Great news! I found a bigger dinner table!");

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests);



// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let places: string[] = ["Pakistan", "Indonesia", "Canada", "Russia", "SaudiArab"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);



// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing

let friends = ["Mati ur rehman", "Muzammil", "Muhammad", "Zeeshan"];
console.log(friends[4]);
    
friends[2] = "Muhammad";
    
// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
    
let car = "civic";
    
console.log("It car === civic ? I predict true");
console.log(car === "civic");
    
console.log("It car === corolla ? I predict false");
console.log(car === "corolla");
    
console.log("it car !== rikshaw ? I predict true" );
console.log(car !== "rikshaw");
    
console.log("it car === plane ? I predict false");
console.log(car === "plane");
    
console.log("it car !== bus ? I predict true");
console.log(car !== "bus");
     
console.log("it car !== civic ? I predict false");
console.log(car !== "civic");
    
console.log("it car !== train ? I predict true");
console.log(car !== "train");
    
console.log("it car === CIVIC ? I predict false");
console.log(car === "CIVIC");
    
console.log("it car !== Civic ? I predict true");
console.log(car !== "Civic");
    
console.log("it car === Civic ? I predict FALSE");
console.log(car === "Civic");
    
    
    
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
    
// Test with string 

let banana = "banana";
console.log("Testing equality with strings:");
console.log("banana" == "banana"); // True
// console.log("banana" == "Banana"); // False
    
// Test with lowercase
console.log("Testing with lower Cases");
console.log("BANANA".toLocaleLowerCase() == "banana");
    
// Numeric test
console.log("Numeric Test");
console.log(7 < 10); //true
console.log(5 > 6);  //false
    
// Test using 'and' and 'or' Operators
console.log("test with 'and' and 'or'");
console.log(2 + 2 == 4 && 2 + 2 == 6); // false
console.log(2 + 2 == 4 || 2 + 2 == 6); // true
    
// Test whether an item is in a array
let fruits =["apple", "banana", "mango", "orange",];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("mango")); //true
    
console.log("Is 'mango' is not in fruits");
console.log(!fruits.includes("mango")); //true

// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.

//Version that passes:
let aliencolor = "red";
if (aliencolor === "red") {
  console.log("you earned five points!");
}

//Version that fails(No Output)
aliencolor = "red";
if (aliencolor == "green") {
  // No output because the condition is false
}

// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.

//version that runs the if block:
let alienColor = "yellow";
if (alienColor === "yellow") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("you just earned 10 points");
}

//version that runs the else block:
alienColor = "yellow";
if (alienColor === "red") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("you just earned 10 points");
}

// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

//Yellow Alien Version
let Aliencolor = "yellow";
if (Aliencolor === "yellow") {
  console.log("you earned 5 points.");
} else if (Aliencolor === "red") {
  console.log("you earned 10 points.");
} else if (Aliencolor === "green") {
  console.log("you earned 15 points");
}

//red Alien Version
let Alien_color = "red";
if (Alien_color === "green") {
  console.log("you earned 5 points.");
} else if (Alien_color === "red") {
  console.log("you earned 10 points.");
} else if (Alien_color === "yellow") {
  console.log("you earned 15 points");
}

//green Alien Version
let AlienColor = "green";
if (AlienColor === "yellow") {
  console.log("you earned 5 points.");
} else if (AlienColor === "red") {
  console.log("you earned 10 points.");
} else if (AlienColor === "green") {
  console.log("you earned 15 points");
}

// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let age = 4;
if(age <= 2 ){
    console.log("the person is baby");
    
} else if(age <= 4){
    console.log("the person is toddler");
    
}else if(age <= 13){
    console.log("the person is kid");

}else if(age <= 20){
    console.log("the person is teenager");
    
}else if(age <= 65){
    console.log("the person is elder");
    
}else{
    console.log("the person is elder");
    
};


// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

let fruitsName = ["Pomegranate", "Pineapple", "Mango", "Apple"];
if(fruitsName.includes("Pomegranate")){
    console.log(" wow you like Pogemgrate");
    
}else if( fruitsName.includes("Pineapple")){
    console.log(" wow you like Pineapple");
    
};


// Question 30: Hello Admin: Greet users differently, especially 'admin'.

let usernames = ["Mudassar Ali", "hamza", "usama", "ali"];
usernames.forEach(usernames => {
    if(usernames === "Mudassar Ali"){
        console.log(" Assalam-u-Alaikum Admin, would you like to see a status?");
        
    }else{
        console.log(`Assalam-u-Alaikum ${usernames}, thank you for logging in again.`);
        
    }
});

// Question 31: No Users: Ensure your user list isn’t empty.

let userNames = [];
if (userNames.length == 0) {
  console.log("we need to find some users");
} else {
  console.log("salam");
}

// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let current_users: string[] = ["mudassar ali", "aman", "hamza", "bilal", "suleman"];
let new_users: string[] = ["Moiz", "Hamza", "abdullah", "aman", "imran"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});

// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  let suffix = "th";
  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = "nd";
  } else if (number === 3) {
    suffix = "rd";
  }
  console.log(`${number}${suffix}`);
});

// Question 34: Pizzas: Share your favorite pizzas and express your love for them.

let fav_pizza = ["chikken", "beef", "cheese"];
for(let pizza of fav_pizza ){
    console.log(`i like ${pizza} pizza`);

};
console.log("i really like pizzas");



// Animals: Highlight animals with a common trait.

let animals = ["rabbit", "horse", "cat",];

for(let animal of animals){
    console.log(`A ${animal} would make a great pet`);

};
console.log("Any of these animals would make a great pet!");



// T-Shirt: Create a function for customizing t-shirts

function make_shirt(size: string, text: string) {
  console.log(`\n you selected ${size} shirt with ${text} print on shirt`);
}
make_shirt("large", '"sky is the limited"');
make_shirt("small", '"whole world"');




































// Question 37: Large Shirts: Default values in make_shirt().

function makeShirt(size: string = 'large', text: string = 'I love typescript') {
  console.log(`you have order a ${size}, shirt that says ${text}`)
}
makeShirt()
makeShirt('medium')

// different message 
makeShirt('small', 'need a big shirt to wear');



// Question 38: Cities: Describing cities with a function.

function describe_city(city: string, country: string = 'pakistan'): void {
  console.log(`${city} is in ${country}`);

}

describe_city('karachi')
describe_city('Fraunce', 'Europe')
describe_city('lahore', ' punjab');



// Question 39: City Names: Formatting city-country pairs.

function citycountry(city: string, country: string): string {
  return `${city}, ${country}`
}
let c1 = citycountry('lahore', 'pakistan')
let c2 = citycountry('tokyo', 'japan')
let c3 = citycountry('paris', 'france')
console.log(c1);
console.log(c2);
console.log(c3);


// Array of magician's names
let magicians: string[] = ["Ayesha", "hafsa", "Maryam", "Moiz"];

function make_great(magicians: string[]): string[] {
  let greatMagicians: any = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} the Great`);
  });
  return greatMagicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names

// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items: string[]) {
  console.log(`Making a sandwich with: ${items.join(", ")}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

// Question 45: Cars: Create detailed car objects with flexible properties.

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(
  manufacturer: string,
  model: string,
  ...extras: [string, any][]
): Car {
  let car: Car = {
    manufacturer: manufacturer,
    model: model,
  };
  for (let extra of extras) {
    car[extra[0]] = extra[1];
  }

  return car;
}
let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2024]);

console.log(myCar);
