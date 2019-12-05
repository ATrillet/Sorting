let toSort = [];
let columns = 5;
let bubblei = 0;
let bubblej = 0;
let col = 'white';
let fil = 'white';
let factor;
let max = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let nums = 0 ; nums < columns ; nums++) {
    toSort.push(random(0,max));
  }
  factor = height/max;
}

function bubbleSort(arr, i, j) {
   n = arr.length;
   if (i < n) {
     if (j < n-i-1) {
       if (arr[j] > arr[j+1]) {
         let temp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = temp;
       }
     } else {
       bubblei++;
       bubblej=0;
     }
   } else {
    col='green'; 
    fil = 'green';
   }
   //bubblej++; test and stuff
   return arr;
}


function draw() {
  background(0);
  stroke(col);
  fill(fil);
  for (let i = 0 ; i < toSort.length ; i++) {
    rect(i*width/columns, height, width/columns - 5, -toSort[i]*factor);
  }
  print(bubblei);
  print(bubblej);
  bubbleSort(toSort, bubblei, bubblej++);
  stroke(col);
}
