
var diam1 = 0; // diam1 is a variable assigned to the diameter
function setup() {
  // put setup code here
    createCanvas(600,600);
}

function draw() {
  // put drawing code here
    background("#173");
    fill("red");
    stroke("yellow");
    ellipse(mouseX,mouseY,diam1,diam1);
    diam1 = diam1+5
    if(diam1>500){
        diam1=100; 
    }
    
    function mousePressed(){
     ellipse(mouseX,mouseY,10,10);
     // prvent default
     return false;
 }
    textSize(70);// Adding a text/ here my first name
    textAlign(600,600);// text point
    fill(10,10,100,200);// text color
    textStyle(BOLD);
    text("Rasmane",100,100);

    triangle (30,75,58,200,86,75); // first two values represent first point /second two second point/ third two third point of the triangle
     
}

