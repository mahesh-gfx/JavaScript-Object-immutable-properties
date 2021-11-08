var obj1 = { name: "Mahesh", age: 22 };
console.log("Created object 1 with elements:", obj1);

console.log("Checking if obj1 is frozen...");
checkIfFrozen(obj1);

console.log("Checking if obj1 is sealed...");
checkIfSealed(obj1);

console.log("Checking if obj1 is extensible...");
checkIfExtensible(obj1);

console.log("Adding new property, Nationality: Indian");
obj1.nationality = "Indian";
console.log(obj1);

console.log("Frezing obj1");
freezeObject(obj1);

console.log("Updating Nationality to American");
obj1.nationality = "American";
console.log(obj1);

console.log("Adding new property, State: Sikkim");
obj1.state = "Sikkim";
console.log(obj1);

var obj2 = { name: "Anjali", age: 18 };
console.log("Created Object 2", obj2);

sealObject(obj2);
obj2.nationality = "Indian";
console.log("Adding new property, Nationality: Indian");

console.log("Adding new property, State: Sikkim");
obj2.state = "Sikkim";
console.log(obj2);

var obj3 = { name: "Prashant", age: 16 };
console.log("Created Object 3", obj3);

preventExtension(obj3);
obj3.nationality = "Indian";
console.log("Adding new property, Nationality: Indian");
checkElement(obj3, "nationality");

function freezeObject(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    Object.freeze(object);
    console.log("Object Freeze operation successful on object!");
  }
}

function sealObject(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    Object.seal(object);
    console.log("Object Seal operation successful on object!");
  }
}

function preventExtension(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    Object.preventExtensions(object);
    console.log("Prevent Extension operation successful on object!");
  }
}

function checkIfFrozen(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    var check = Object.isFrozen(object);
    if (check == true) console.log("Object is frozen!");
    else console.log("Object is not frozen!");
  }
}

function checkIfSealed(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    var check = Object.isSealed(object);
    if (check == true) console.log("Object is Sealed!");
    else console.log("Object is not sealed!");
  }
}

function checkIfExtensible(object) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    var check = Object.isExtensible(object);
    if (check == true) console.log("Object is Extensible!");
    else console.log("Object is not Extensible!");
  }
}

function checkElement(object, element) {
  if (object.constructor.name !== "Object")
    return "Please pass and Object as argument!";
  else {
    object.hasOwnProperty(element)
      ? console.log("Element Exists!", element)
      : console.log("Element Doesn't Exist!");
  }
}
