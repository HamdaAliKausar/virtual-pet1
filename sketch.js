//Create variables here
var dog;
var d1;
var d2;
var database;
var food;
var foodstock;

function preload(){
d1=loadImage("images/dogImg.png")
d2=loadImage("images/dogImg1.png")


	//load images here




}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
  dog = createSprite(250,300,150,150)
  dog.addImage("d1",d1)
dog.scale=0.15
foodstock=database.ref("food");
//.on listens to the firebase
foodstock.on("value",readposition)


}


function draw() {  
background("green")
if(keyWentDown(UP_ARROW)){
writePosition(food)
dog.addImage(d2)


}
  drawSprites();
  //add styles here
  text("foodRemaining:"+food,170,200)




}
function readposition(data){
  food=data.val();
  console.log(food);
  

  
  }
function writePosition(x){
if (x<=0) {
  x=0
}
else{x=x-1;





}


//refers to the main note and writes to the firebase
    database.ref("/").update({
   food:x
 

    })
  //  ball.x = ball.x + x;
   // ball.y = ball.y + y;
}


