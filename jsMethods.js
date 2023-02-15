//chartAt - method of a String instance returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string. 
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`)

//charCodeAt - method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. 
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`)

// concat - method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3)

// includes - method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array4 = [1, 2, 3]
console.log(array4.includes(2))
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));

// indexOf - method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2)); //the 2 tells it to start at index 2, excluding 2.
console.log(beasts.indexOf('giraffe'));

// match - method retrieves the result of matching a string against a regular expression.
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found); // since we are excluding lower case, it's returning only upper-case chars

// repeat - method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. 
const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);

// replace - method returns a new string with one, some, or all matches of a pattern. It can be a string or a RegExp, and it can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const replacex = /Dog/i;
console.log(p.replace(replacex, 'ferret'))

// search - method looks for a match between a regular expression and this String object.
const par = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const r = /[^\w\s]/g; // Any character that is not a word character or whitespace
console.log(par.search(r))
console.log(par[par.search(r)])

// slice - method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. 
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2))
console.log(animals.slice(2, 4));
console.log(animals.slice(-1));

// split -method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ')
console.log(words[3])
const wordz = str.split('')
console.log(wordz[8])

// substr(depricated) using substring - method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
const astr = 'Mozilla';
console.log(astr.substring(1, 3));
console.log(astr.substring(2));

// toLowerCase -method returns the calling string value converted to lower case.
const thisStr = 'The quick brown fox jumps over the lazy dog.';
console.log(thisStr.toLowerCase())

// toUpperCase - method returns the calling string value converted to upper case.
console.log(thisStr.toUpperCase())

// trim - method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
const greeting = '   Hello world!   ';
console.log(greeting.trim())