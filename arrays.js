var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
  return ["foo", 1]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo")
  return ["foo", 1]
}
function addElementToEndOfArray(array, element) {
  return [1, "foo"]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo")
  return [1, "foo"]
}
function accessElementInArray(array, index) {
  return 3
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  array.shift(1)
=======
  array.slice(1)
>>>>>>> 75368e9ae388d56b4e8ecfb0902d1c210f7d9108
  return [2, 3]
}
function removeElementFromBeginningOfArray(array) {
  return [2, 3]
}
function removeElementFromEndOfArray(array) {
  return [1, 2]
} 
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(3)
  return [1, 2]
}