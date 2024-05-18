window.onload = draw();

var x = 50;
var y = 50;

var compatibility = false;

document.body.addEventListener("keydown", function(e)
{
    if (e.key == "d")
    {
        var canvas = document.getElementById("canvas");

        var ctx = canvas.getContext("2d");

        ctx.clearRect(x, y, 55, 55);

        if (x < 195) x += 5;

        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, 55, 55);
    }

    if (e.key == "a")
        {
            var canvas = document.getElementById("canvas");
    
            var ctx = canvas.getContext("2d");
    
            ctx.clearRect(x, y, 55, 55);
    
            if (x > 0) x -= 5;
    
            ctx.fillStyle = "blue";
            ctx.fillRect(x, y, 55, 55);
        }

    if (e.key == "s")
        {
            var canvas = document.getElementById("canvas");
    
            var ctx = canvas.getContext("2d");
    
            ctx.clearRect(x, y, 55, 55);
    
            if (y < 145) y += 5;
    
            ctx.fillStyle = "blue";
            ctx.fillRect(x, y, 55, 55);
        }

    if (e.key == "w")
        {
            var canvas = document.getElementById("canvas");
    
            var ctx = canvas.getContext("2d");
    
            ctx.clearRect(x, y, 55, 55);
    
            if (y > 0) y -= 5;
    
            ctx.fillStyle = "blue";
            ctx.fillRect(x, y, 55, 55);
        }
})

function draw()
{
    createCanvas();

    var canvas = document.getElementById("canvas");

    if (!canvas.getContext)
    {
        window.alert("Unfortunately, your browser doesn`t has compatibility with canvas.");
    }
    else
    {
        compatibility = true;

        var ctx = canvas.getContext("2d");

        var x = 50;
        var y = 50;
    
        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, 55, 55);
    }
}