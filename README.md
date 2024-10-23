# Bubble Sort

**Description**: This JavaScript implementation of the Bubble Sort algorithm sorts an array of numbers in ascending order. Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process repeats until the entire array is sorted.

**Function Signature**

	function bubbleSort(array) {
	  // function implementation
	}
 
**Parameters**:

array (Array of numbers): The input array that needs to be sorted.

**Returns**: 

Array: A sorted array in ascending order.


**Time and Space Complexity**

**Time Complexity:**

Worst-case and Average-case: O(n²), where n is the number of elements in the array. This happens because the algorithm uses nested loops to repeatedly compare and swap elements.

Best-case: O(n) when the array is already sorted. This happens when no swaps are needed in the first pass.

**Space Complexity:** O(1), since it sorts the array in place and uses a constant amount of extra space.

**How the Algorithm Works**

1. Initialization: A boolean variable swap is initialized to true to enter the while loop.
2. Outer Loop (while loop): The outer loop continues as long as there was at least one swap in the previous iteration, indicating that the array may not yet be fully sorted.
3. Inner Loop (for loop): The inner loop compares each pair of adjacent elements in the array.
4. If the current element is greater than the next element, the two elements are swapped.
5. If a swap happens, swap is set to true, so the outer loop will continue for another pass.
6. Termination: The outer loop terminates when no swaps are made during a full pass through the array, indicating that the array is sorted.
   

Example 1:

	const array = [64, 34, 25, 12, 22, 11, 90];
	console.log(bubbleSort(array)); 
	// Output: [11, 12, 22, 25, 34, 64, 90]
 
Example 2:

	const array = [5, 1, 4, 2, 8];
	console.log(bubbleSort(array)); 
	// Output: [1, 2, 4, 5, 8]
 
**Explanation**

The function starts by initializing a variable swap to true so that it enters the while loop. During each pass through the array, it checks each adjacent pair of elements. If the left element is greater than the right element, they are swapped. If at least one swap happens in a pass, the outer loop will run again to ensure the array is sorted. If no swaps happen, the array is sorted, and the loop terminates. Finally, the sorted array is returned.

**Edge Cases**

1. Empty Array: If the input array is empty, the function will return an empty array [] as there is nothing to sort.
2. Single Element: If the array has only one element, no sorting is needed, and the function will return the array as-is.
3. Already Sorted: If the array is already sorted, the best-case time complexity O(n) is achieved, as no swaps are required after one full pass.
   
**License**: This code is available under the MIT License.
