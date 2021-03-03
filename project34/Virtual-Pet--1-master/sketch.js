 var dog, milk
 var happyDog, database, foodS, foodStock
function preload()
{
  this.dog = loadImage("images/dogImg.png");
  this.dog1 = loadImage("images/dogImg1.png"); 
}

function setup() {
  
database = firebase.database();
console.log(database);
createCanvas(500, 500);
dog = createSprite (300,200,20,20);
dog.addImage(this.dog);
foodStock = database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
  background(rgb(46,139,87));
  
if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog1);
}

  drawSprites();
  textSize(20)
  fill("white");
  stroke();
  text("Press UP_ARROW Key To Feed DISC Milk ", 250,150 )

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
function Milk () {
  if (keyDown(UP_ARROW)){
  var milk = createSprite(200,0,20,20);
  milk = createSprite(250,10,50,50);
  milk.shapeColor = "white";
  milk.setCollider("circle",0,0,10);
  milk.velocityY = 10;
  if(milk.istouching(dog)){
    dog.addImage("Images/dogImg1.png")
   milk.destroy();
  }
}
  }
