// Time -> O(n^2) | Space -> O(1)
function bubbleSort(array) {
  
  let swap = true;
  let counter = 0;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      } 
    }
    counter++;
  }
  return array;
}

