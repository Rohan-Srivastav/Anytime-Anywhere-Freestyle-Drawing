var mouse_event="empty";
var last_x,last_y;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color;
width;


color="black";
width=3;



var screen_width = screen.width;
    var new_width = screen.width-70;
    var new_height = screen.height-300;
    if(screen_width < 992){
        document.getElementById("mycanvas").width = new_width;
        document.getElementById("mycanvas").height = new_height;
        document.body.style.overflow="hidden";

    }



    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        
        color = document.getElementById("color").value;
        width = document.getElementById("width").value;
        
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("touchmove");
         current_x = e.touches[0].clientX - canvas.offsetLeft;
         current_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();


        last_position_of_x = current_x; 
        last_position_of_y = current_y;
    }

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;


    mouse_event = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouse_event = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouse_event = "mouseup";
}


canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mousedown") {

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}
function clear_area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}