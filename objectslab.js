// Problem 1

// Declare a JS object called carThree with
// A property called wheels with a number value
// A property called owner with a string value
// A property called isBroken with a boolean value
// A property called color with a string value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isBroken property
// Use dot notation to read the value of owner
// Create a new variable (not part of the object) called clientIsInterested that has no value.
// Check if car color is blue. If true, set clientIsInterested to true, else false.
// Delete the owner property of carThree.

const carThree = {
    wheels : 4,
    owner : 'Jason',
    isBroken : false,
    color : "Black"
}

carThree.price = 20000;
carThree['year'] = 2020;
carThree.isBroken = true;
carThree.owner;

const clientIsInterested = carThree.color === 'blue' ? true : false;

delete carThree.owner;

console.log(carThree)
console.log(clientIsInterested)

// Problem 2

// Declare a JS object called store with
// A property called profit with a number value
// A property called manager with a string value
// A property called isOpenNow with a boolean value
// A property called isVeryExpensive with a boolean value
// Use dot notation to add a new property called location with a string value
// Use bracket notation to add a new property called storeType with a string value
// Use dot notation to change the value of the isOpenNow property
// Use dot notation to read the value of isVeryExpensive 
// Create a new variable (not part of the object) called canShopHere that has no value.
// Check if isOpenNow and NOT isVeryExpensive. If true set canShopHere to true, else false
// Delete the profit property of store.

const store = {
    profit : 100000,
    manager : 'Parul',
    isOpenNow : true,
    isVeryExpensive : true,
}

store.location = 'Los Angeles';
store['storeType'] = 'Jewelry';
store.isOpenNow = false;
store.isVeryExpensive;
store.isOpenNow 

const canShopHere = () => {
    if (store.isOpenNow === true && store.isVeryExpensive === false) {
      return true;
    } else {
      return false;
    }
  }
  delete store.profit;

  console.log(canShopHere());


// Problem 3


// Declare a JS object called home with
// A property called rooms with a number value
// A property called bathrooms with a number value
// A property called isForSale with a boolean value
// A property called isInGoodLocation with a boolean value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isForSale property
// Use dot notation to read the value of bathrooms
// Create a new variable (not part of the object) called buyHouse that has no value.
// Check if isForSale and isInGoodLocation. If true set buyHouse to true, else false
// Delete the isForSale property of home.
 
const home = {
    rooms : 4,
    bathrooms : 2.5,
    isForSale : true,
    isInGoodLocation : true,
}
home.price = 500000;
home ['year'] = 2020; 
home.isForSale = false;
home.bathrooms;

const buyHouse = () => {
    if (store.isForSale === true && store.isInGoodLocation === true) {
      return true;
    } else {
      return false;
    }
  }
delete home.isForSale;
// Problem 4, 5, 6

// Declare a JS object with 4 properties (4 keys and 4 values).
// Use dot notation to add a new property.
// Use bracket notation to add a new property.
// Use dot notation to change the value of one of the properties.
// Use dot notation to read the value of one of the properties.
// Create a new variable (not part of the object) that has no value.
// Write some kind of if / else statement to check some information of the object. Based on true / false set the value of the variable you made in number 6 to true or false.
// Delete one of the object properties.