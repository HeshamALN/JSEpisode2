/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/

// var names = [
//   "Hesham",
//   "Nancy",
//   // "Fay",
//   // "Farah",
//   // "Sarah B",
//   // "Sarah K",
//   // "Nada",
//   // "Majed",
//   // "Hussain",
//   "Feras",
//   "Barak"
// ];
// let pairslist = [];

function pairs(names) {
  let pairslist = [];
  if (!names || names.length === 0) {
    pairslist = [];
  } else if (names === []) {
    pairslist = [];
  } else if (names.length === 2) {
    pairslist.push([names.getRandom(), names.getRandom()]);
  } else if (names.length % 2 !== 0) {
    while (names.length !== 1) {
      pairslist.push([names.getRandom(), names.getRandom()]);
    }
    pairslist.push([names.getRandom()]);
  } else {
    while (pairslist.length < names.length) {
      pairslist.push([names.getRandom(), names.getRandom()]);
    }
  }

  console.log(pairslist);

  return pairslist;
}

module.exports = pairs;

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function() {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

console.log(
  pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "Mr Potato"])
);
