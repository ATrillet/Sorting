let toSort = [];
let columns = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let nums = 0 ; nums < columns ; nums++) {
    toSort.push(random(0,100));
  }
  print(toSort);
}


function draw() {
  background(0);
  stroke('white');
  for (let i = 0 ; i < toSort.length ; i++) {
    rect(i*width/columns, height, width/columns - 5, -toSort[i]*7.16);
  }
  
  
  
}
