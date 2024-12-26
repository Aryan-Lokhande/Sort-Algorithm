// alert("click on 'array size' to proceed");
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var canvasWidthPercent = 80;
var canvasHeightPercent = 65;

function resizeCanvas() {
  myCanvas.width = (window.innerWidth * canvasWidthPercent) / 100;
  myCanvas.height = (window.innerHeight * canvasHeightPercent) / 100;
}
resizeCanvas();

window.addEventListener("resize", resizeCanvas, false);

var arrclick = document.querySelector(".arrsize");
var arrsize = 20;
arrclick.addEventListener("click", function () {
  arrsize = prompt("Size of Array? [optimum max size - 30]");
  if (arrsize > 30) {
    alert("Array size should not be more than 30,\nArray size is set to the default  20");
    arrsize = 20;
  } else {
    console.log("array size taken--- " + arrsize);
  }
  alert("Please select a sort now , Array's size has been set to -" + arrsize);
});

document.querySelector(".Quick").addEventListener("click", function () {
  all(arrsize, "quick");
  console.log(arrsize + "quick");
});

document.querySelector(".bubble").addEventListener("click", function () {
  all(arrsize, "bubble");
  console.log(arrsize + "bubble");
});

document.querySelector(".Selection").addEventListener("click", function () {
  all(arrsize, "selection");
  console.log(arrsize + "Selection");
});
document.querySelector(".Heap").addEventListener("click", function () {
  all(arrsize, "heap");
  console.log(arrsize + "heap");
});

document.querySelector(".insertion").addEventListener("click", function () {
  all(arrsize, "insertion");
  console.log(arrsize + "insertion");
});

function all(arrsize, stringy) {
  console.log("array size taken- " + arrsize);
  var margin = (4 * myCanvas.width) / 100;
  var array = [];
  var cols = [];
  var spacing = (myCanvas.width - margin * 2) / arrsize;
  console.log("spacing" + spacing);

  for (let i = 0; i < arrsize; i++) {
    array[i] = Math.random();
  }
  console.log(array);
  var ctx = myCanvas.getContext("2d");
  for (let index = 0; index < array.length; index++) {
    var x = index * spacing + spacing / 2 + margin;
    console.log("x " + x);
    var y = myCanvas.height - margin - index * 3;
    console.log("y " + y);
    var width = spacing - myCanvas.width / 100;
    console.log("width " + spacing);

    var height = ((myCanvas.height * 70) / 100) * array[index];
    console.log("height " + height);
    cols[index] = new Column(x, y, width, height);
    cols[index].draw(ctx);
  }
  let moves = [];
  if (stringy === "bubble") {
    moves = bubblesort(array);
  } else if (stringy === "selection") {
    moves = selectionSort(array);
  } else if (stringy === "insertion") {
    moves = insertionSort(array);
  } else if (stringy === "quick") {
    quickSort(array, 0, array.length - 1, moves);
  } else if (stringy === "heap") {
    moves = heapSort(array);
  }
  console.log("moves" + moves);
  animate();
  function animate() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    let changed = false;
    for (let index = 0; index < cols.length; index++) {
      changed = cols[index].draw(ctx) || changed;
    }
    if (moves.length > 0 && !changed) {
      var move = moves.shift();
      var [i, j] = move.indices;
      if (move.swap) {
        cols[i].moveTo(cols[j]);
        cols[j].moveTo(cols[i], -1);
        [cols[i], cols[j]] = [cols[j], cols[i]];
      }
    }
    requestAnimationFrame(animate);
  }
  console.log("all executed");
}


function bubblesort(array) {
  var moves = [];
  do {
    var swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swapped = true;
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        moves.push({ indices: [i, i + 1], swap: true });
      } else {
        moves.push({ indices: [i, i + 1], swap: false });
      }
    }
  } while (swapped);
  return moves;
}
//Need work
function insertionSort(array) {
  const moves = [];
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    const temp = array[i];
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
      moves.push({ indices: [j + 1, j + 2], swap: true });
    }
    array[j + 1] = temp;
    // moves.push({ indices: [j + 1, i], swap: true });
  }
  return moves;
}

function selectionSort(array) {
  var moves = [];
  var n = array.length;
  do {
    var swapped = false;
    for (let i = 0; i < n - 1; i++) {
      var minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        swapped = true;
        var temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        moves.push({ indices: [i, minIndex], swap: true });
      } else {
        moves.push({ indices: [i, minIndex], swap: false });
      }
    }
  } while (swapped);
  return moves;
}
function quickSort(array, start = 0, end = array.length - 1, moves) {
  if (start >= end) {
    return;
  }

  var index = partition(array, start, end, moves);
  quickSort(array, start, index - 1, moves);
  quickSort(array, index + 1, end, moves);
}

function partition(array, start, end, moves) {
  var pivotIndex = end;
  var pivotValue = array[pivotIndex];
  var i = start;

  for (var j = start; j < end; j++) {
    if (array[j] <= pivotValue) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;

      moves.push({ indices: [i, j], swap: true });

      i++;
    } else {
      moves.push({ indices: [i, j], swap: false });
    }
  }

  var temp = array[i];
  array[i] = array[pivotIndex];
  array[pivotIndex] = temp;

  moves.push({ indices: [i, pivotIndex], swap: true });

  return i;
}

function heapSort(array) {
  var moves = [];

  // Swap function
  function swap(i, j) {
    [array[i], array[j]] = [array[j], array[i]];
    moves.push({ indices: [i, j], swap: true });
  }

  // Heapify function
  function heapify(start, end) {
    let parent = start;
    let child = parent * 2 + 1;
    while (child <= end) {
      if (child + 1 <= end && array[child] < array[child + 1]) {
        child++;
      }
      if (array[parent] < array[child]) {
        swap(parent, child);
        parent = child;
        child = parent * 2 + 1;
      } else {
        break;
      }
    }
  }

  // Build heap
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(i, array.length - 1);
  }

  // Sort
  for (let i = array.length - 1; i > 0; i--) {
    swap(0, i);
    heapify(0, i - 1);
  }

  return moves;
}
