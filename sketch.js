//Create variables here
var dog,happyDog,database,foodS,foodStock,x;
function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  dog=createSprite(400,600);
  dog.addImage('hi',dogImg);
  dog.addImage('why',happyDog);

  dog.scale=0.2;

  

}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.changeImage('why');
  
}

  drawSprites();
  //add styles here
  textSize(20);
  fill(255)
  text("Press up arrow to feed Draco",250,100);
  text("food remaning:"+foodS,300,300);
}
function readStock(data){
  foodS=data.val();
  
}
function writeStock(x){
 if(x<=0){
   x=0
 }
 else{
   x=x-1
 }
 database.ref("/").update({
   Food:x
 })
 
}



