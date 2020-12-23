//declare variales
var car,wall;


var speed, weight; 


function setup() {
	//makes the cnvas
  createCanvas(1600, 400);

   //makes random speeds and weights
	speed=random(55,90)
	weight=random(400,1500)

    //makes the car sprite
	car=createSprite(50, 200, 50,50);   

	//gives random X velocity for car
	car.velocityX = speed;

	//adds color to the car
	car.shapeColor=color(255);


  //makes wall
	  wall=createSprite(1500,200, 60, height/2)
	  //adds color to car
  	wall.shapeColor=color(80,80,80)
}


function draw() {
	//colors the backround and clears screen
  background(0);




  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  
	  var deformation=0.5 * weight * speed* speed/22500;
       //if any of thr deformations are less then 180 they will be colored to(255,0,0), (230,230,0) or (0,255,0)
	  if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}