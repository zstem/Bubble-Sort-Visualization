nums = new Array(500);
let x = 0;
function setup() {
  createCanvas(nums.length, nums.length);
  
  for(i=0; i < nums.length; i++){
    nums[i] = floor(random(nums.length));
  }
  pg = createGraphics(500, 500);
}

function draw() {
  background(0);
  text(floor(x/nums.length*100) + "%", 0, nums.length)
  ellipse(mouseX, mouseY, 120);
  for(i = 0; i< nums.length; i++){
    if(i < x){
    stroke(173,216,230);
    line(i,0,i,nums[i]);
    }
    stroke(255);
    line(i,0,i,nums[i]);
  }
  if(x < nums.length){
    // Last i elements are already in place  
   for(var j = 0; j < ( nums.length - x -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(nums[j] > nums[j+1]){
       // If the condition is true then swap them
       swap(nums, j, j + 1)
     }
    }
    
    x++;
  }else{
    stroke(2,5,6);
    console.log("Bubble Sort Complete");
    noLoop();
  }
  
}

function swap(arr, xp, yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}