var names = [
  "big",
  "tiny",
  "chungus",
  "semicolon",
  "hyphen",
  "garlic bread again?",
  "group dynamic",
  "kimberly",
  "chet",
  "dog",
  "mom's spaghetti",
  "Martha Stewart",
  "school project",
  "goldfish",
  "food stuck between your teeth",
  "taco bell",
  "literal fish",
  "ikea meatballs",
  "fluffy",
  "all stars",
  "shrek",
  "shakira shakira",
  "jason derulo",
  "groceries",
  "Animal",
  "fall out boy"
];
function newName() {
  var randomName = Math.floor(Math.random() * names.length);
  var randomOtherName = Math.floor(Math.random() * names.length);
  document.getElementById("namePlace").innerHTML =
    names[randomName] + " " + names[randomOtherName];
  // var randomOtherName = Math.floor(Math.random() * (names.length));
  // document.getElementById('namePlace')
}
