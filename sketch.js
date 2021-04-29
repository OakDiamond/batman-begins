var drops
var canvas
function preload(){
    
}

function setup(){
   
    
}

function draw(){
var canvas = createCanvas(300,500);
    background("black")
    var maxDrops = 100
    for (var i=0; i<maxDrops; i++){
        
        drops.push(new CreateDrop(random(0,400),random(0,400)));
    }
}   

