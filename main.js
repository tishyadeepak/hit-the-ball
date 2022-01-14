var canvas= new fabric.canvas("mycanvas");
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fronURL("golf-h1.png", function(img){
		hole_obj =img;
		hole_obj =scleToWidth(50);
		hole_obj =scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.image.fronURL("ball.png", function(img){
		ball_obj=img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		document.getElementById("hd3").innerHTML.HTML=" You Have Hit The Goal!!!!!! ";
		document.getElementById("mycanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
	    if(ball_y>604)
		{
			ball_y = ball_y+ block_height_image;
			console.log("block image height "+ block_image_height);
			console.log("When up arrow key is pressed, x =" +ball_x + ", y ="+ball_y);
			canvas.remove(ball_obj);
			new_image;
		}
	}

	function down()
	{
		 if(ball_y<=450)
       {
		   ball_y = ball_y+ block_height_image;
		   console.log("block image height "+ block_image_height);
		   console.log("When Down arrow key is pressed, x =" +ball_x + ", y ="+ball_y);
		   canvas.remove(ball_obj);
		   new_image;
	   };
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_y = ball_y+ block_height_image;
			console.log("block image height "+ block_image_height);
			console.log("When Ieft arrow key is pressed, x =" +ball_x + ", y ="+ball_y);
			canvas.remove(ball_obj);
			new_image;
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y = ball_y+ block_height_image;
			console.log("block image height "+ block_image_height);
			console.log("When Right arrow key is pressed, x =" +ball_x + ", y ="+ball_y);
			canvas.remove(ball_obj);
			new_image;
		}
	}
	
}

