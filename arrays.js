"use strict";


// 1. printIndices
function printIndices(items) {
  for(const i in items){
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {

  for (const i in items) {
    if (i % 2 === 0) {
      console.log(`${items[i]}`);
    }
  }
}


// 3. smallestNItems
function smallestNItems(items, n) {
  const itemSort = items.sort((a, b) => a - b);
  const itemSlice = itemSort.slice(0, n);
  itemSlice.reverse()
  console.log(itemSlice);
}
