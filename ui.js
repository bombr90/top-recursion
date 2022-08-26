// ui.js
import { fibsRec, mergeSort } from './algos.js'

const ui = (() => {
  const fibonacciArray = document.getElementById('fibonacciDisplay');
  const fibonacciInput = document.getElementById('fibonacciInput'); 
  const fibonacciButton = document.getElementById('fibonacciButton');
  const mergeSortArray = document.getElementById("mergeSortDisplay");
  const mergeSortInput = document.getElementById("mergeSortInput");
  const mergeSortButton = document.getElementById("mergeSortButton");
  
  fibonacciButton.addEventListener('click', displayFibArray);
  mergeSortButton.addEventListener('click', displaymergeSortArray);
  
  const init = (() => {
    fibonacciArray.appendChild(document.createTextNode("Fibonacci(8): [0,1,1,2,3,5,8,13]"));
    mergeSortArray.appendChild(document.createTextNode("mergeSort(8,3,7,2,5,1,4,6): [1,2,3,4,5,6,7,8]"));
  })();

  function displayFibArray() {
    if(updateValidity(fibonacciInput)) {
      const content = document.createTextNode(
        "Fibonacci(" +
          fibonacciInput.value +
          "): [" +
          fibsRec(+fibonacciInput.value) +
          "]"
      );
      fibonacciArray.replaceChildren(content);       
    }
  }   

  function displaymergeSortArray() {
    if (updateValidity(mergeSortInput)) {
      const rawArr = mergeSortInput.value.split(',').map(el => {
      return parseInt(el)});
      console.log('rawarr:',rawArr);
      const content = document.createTextNode(
        "mergeSort(" +
          rawArr +
          "):\n[" +
          mergeSort(rawArr) +
          "]"
      );
    mergeSortArray.replaceChildren(content);
    }
  }  

  function updateValidity(input) {
    input.setCustomValidity("");
    if (input.validity.valid) {
      return true;
    } else {
      switch(input.id) {
        case 'fibonacciInput':
          console.log('fibin');
          input.setCustomValidity("Enter Value between 1 and 30");
          break;
        case 'mergeSortInput':
          input.setCustomValidity("Enter comma-seperated values");
          break;
      }
      input.reportValidity();
      return false;
    }
  }
})();

// testcode
// const rawArr = [8, 3, 7, 2, 5, 1, 4, 6];
// console.log('MergeSort Starting Array:',rawArr);
// console.log('MergeSort Sorted Array:',mergeSort(rawArr));
