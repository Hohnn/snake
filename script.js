const snakeboard = document.getElementById('gameCanvas')
const snakeboard_ctx = snakeboard.getContext("2d")
const board_border = 'black';
const board_background = "white";
const snake_col = 'lightblue';
const snake_border = 'darkblue';

let snake = [  {x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200},];



main()
// draw a border around the canvas
function clearCanvas() {
    //  Select the colour to fill the drawing
    snakeboard_ctx.fillStyle = board_background;
    //  Select the colour for the border of the canvas
    snakeboard_ctx.strokestyle = board_border;
    // Draw a "filled" rectangle to cover the entire canvas
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    // Draw a "border" around the entire canvas
    snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
    }

    // Draw the snake on the canvas
function drawSnake() {
    // Draw each part
    snake.forEach(drawSnakePart)
    }
    
// Draw one snake part
function drawSnakePart(snakePart) {

// Set the colour of the snake part
snakeboard_ctx.fillStyle = snake_col;
// Set the border colour of the snake part
snakeboard_ctx.strokestyle = snake_border;
// Draw a "filled" rectangle to represent the snake part at the coordinates
// the part is located
snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
// Draw a border around the snake part
snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function main() {
    clearCanvas();
    drawSnake();
}

function start () {
    setInterval(function () {
        clearCanvas()
        move_snake()
        drawSnake()
        main()
    }, 100)
}

let dx = 10
let dy = 0
function move_snake() { 
    document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        dx = 0
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }
    
} 
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}

