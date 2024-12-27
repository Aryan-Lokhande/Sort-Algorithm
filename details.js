let div = document.querySelector('#details');

let p = document.querySelector('p');

let bubble = document.querySelector('.bubble');
bubble.addEventListener("click", function () {
    div.classList.add("dBox");
    div.innerHTML = `
        <h2 class="temp"><b>Bubble Sort Algorithm</b></h2>
        <h3 class="orange">Algorithm:</h3>
        <pre>
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
        </pre>
        <h3 class="orange">Explanation:</h3>
        <p>
          Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. 
          This process is repeated until the list is sorted. The algorithm is called "Bubble Sort" because smaller elements bubble to the top of the list in each iteration.
        </p>
        <h3 class="orange">Complexities:</h3>
        <ul>
          <li class="orange"><strong>Time Complexity:</strong></li>
          <ul>
            <li>Best Case (Already Sorted): O(n)</li>
            <li>Average Case: O(n²)</li>
            <li>Worst Case (Reversed Order): O(n²)</li>
          </ul>
          <li ><strong class="orange">Space Complexity:</strong></li>
          <ul>
          <li>O(1) (In-place sorting, no extra memory required apart from variables)</li>
          </ul>
        </ul>
    `;
});

let quick = document.querySelector('.Quick');
quick.addEventListener("click", function () {
    div.classList.add("dBox");
    div.innerHTML = `
        <h2 class="temp"><b>Quick Sort Algorithm</b></h2>
        <h3 class="orange">Algorithm:</h3>
        <pre>
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
        </pre>
        <h3 class="orange">Explanation:</h3>
        <p>
          Quick Sort is a divide-and-conquer algorithm that picks an element as a pivot and partitions the array around the pivot. 
          Elements smaller than the pivot go to its left, and elements greater than the pivot go to its right. 
          This process is repeated recursively for the left and right partitions until the array is fully sorted.
        </p>
        <h3 class="orange">Complexities:</h3>
        <ul>
          <li class="orange"><strong>Time Complexity:</strong></li>
          <ul>
            <li>Best Case (Balanced partitions): O(n log n)</li>
            <li>Average Case: O(n log n)</li>
            <li>Worst Case (Unbalanced partitions): O(n²)</li>
          </ul>
          <li ><strong class="orange">Space Complexity:</strong></li>
          <ul>
            <li>O(log n) (Due to recursive stack usage)</li>
          </ul>
        </ul>
    `;
});

let heap = document.querySelector('.Heap');
heap.addEventListener("click", function () {
    div.classList.add("dBox");
    div.innerHTML = `
        <h2 class="temp"><b>Heap Sort Algorithm</b></h2>
        <h3 class="orange">Algorithm:</h3>
        <pre>
function heapSort(arr) {
  function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      heapify(arr, n, largest);
    }
  }

  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
  }
  return arr;
}
        </pre>
        <h3 class="orange">Explanation:</h3>
        <p>
          Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. 
          The array is first converted into a max heap, and the largest element (root) is swapped with the last element. 
          The heap size is reduced, and the heapify process is repeated until the array is sorted.
        </p>
        <h3 class="orange">Complexities:</h3>
        <ul>
          <li class="orange"><strong>Time Complexity:</strong></li>
          <ul>
            <li>Best Case: O(n log n)</li>
            <li>Average Case: O(n log n)</li>
            <li>Worst Case: O(n log n)</li>
          </ul>
          <li ><strong class="orange">Space Complexity:</strong></li>
          <ul>
            <li>O(1) (In-place sorting, no additional memory required)</li>
          </ul>
        </ul>
    `;
});

let insertion = document.querySelector('.insertion');
insertion.addEventListener("click", function () {
    div.classList.add("dBox");
    div.innerHTML = `
        <h2 class="temp"><b>Insertion Sort Algorithm</b></h2>
        <h3 class="orange">Algorithm:</h3>
        <pre>
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
        </pre>
        <h3 class="orange">Explanation:</h3>
        <p>
          Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. 
          It picks each element from the unsorted portion and inserts it into its correct position in the sorted portion. 
          The algorithm is efficient for small datasets and arrays that are already partially sorted.
        </p>
        <h3 class="orange">Complexities:</h3>
        <ul>
          <li class="orange"><strong>Time Complexity:</strong></li>
          <ul>
            <li>Best Case (Already Sorted): O(n)</li>
            <li>Average Case: O(n²)</li>
            <li>Worst Case (Reversed Order): O(n²)</li>
          </ul>
          <li ><strong class="orange">Space Complexity:</strong></li>
          <ul>
            <li>O(1) (In-place sorting, no additional memory required)</li>
          </ul>
        </ul>
    `;
});

let selection = document.querySelector('.Selection');
selection.addEventListener("click", function () {
    div.classList.add("dBox");
    div.innerHTML = `
        <h2 class="temp"><b>Selection Sort Algorithm</b></h2>
        <h3 class="orange">Algorithm:</h3>
        <pre>
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
        </pre>
        <h3 class="orange">Explanation:</h3>
        <p>
          Selection Sort is a simple sorting algorithm that repeatedly selects the smallest (or largest) element 
          from the unsorted portion of the array and swaps it with the first element of the unsorted portion. 
          This process is repeated for each position in the array until it is sorted.
        </p>
        <h3 class="orange">Complexities:</h3>
        <ul>
          <li class="orange"><strong>Time Complexity:</strong></li>
          <ul>
            <li>Best Case: O(n²)</li>
            <li>Average Case: O(n²)</li>
            <li>Worst Case: O(n²)</li>
          </ul>
          <li ><strong class="orange">Space Complexity:</strong> </li>
          <ul>
            <li>O(1) (In-place sorting, no additional memory required)</li>
           </ul>
        </ul>
    `;
});
