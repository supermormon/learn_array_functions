/*
What does it do?
    - Removes the last element in an array
Does it edit the current array?
    - Yes
What does it return?
    - The last element in the array
*/
//------------------------------------------------------------------------
// How can I use it? -- If you have a shopping list and want to remove
// the next item and view it
let array = ['e1', 'e2', 'e3'];
console.log("Before the pop, size = " + array.length);
// 3
console.log("Element popped: " + array.pop());
// e3
console.log("After the pop, size = " + array.length);
// 2
//------------------------------------------------------------------------
// Real World Example!
let shoppingList = {
    list: ['chips', 'salsa', 'sour cream', 'oj'],
    getNextItem: function () {
        return this.list.pop();
    }
};

let nextItem = shoppingList.getNextItem(); // What's the next item find?
console.log("Next item is: " + nextItem);
// oj
//------------------------------------------------------------------------