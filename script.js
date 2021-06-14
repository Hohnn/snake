const snakeboard = document.getElementById('gameCanvas')
const snakeboard_ctx = snakeboard.getContext("2d")
const board_border = 'black';
const board_background = "white";
const snake_col = 'lightblue';
const snake_border = 'darkblue';

let snake = [  {x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200},];
let meat = {x: 100, y: 100}



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

function drawMeat(params) {
    snakeboard_ctx.fillStyle = snake_col;
    snakeboard_ctx.fillRect(params.x, params.y, 10, 10);
}

function main() {
    // reset
    clearCanvas();
    drawSnake();
}

let timing = 100 //snake speed
function start () {
    let int = setInterval(function () {
        clearCanvas()
        move_snake()
        drawSnake()
        main()
        drawMeat(meat)
        eat()
        collapse(int)
    }, timing)
}

function random() {
    let random = Math.floor(Math.random() * 39) * 10
    return random
}

function eat() {
    if (snake[0].x == meat.x && snake[0].y == meat.y) {
        snake.push(meat);
        meat.x = random()
        meat.y = random()
        snake.forEach(el => { //don't put meat on snake part
            if (meat.x == el.x) {
                meat.x = random()
            }
            if (meat.y == el.y) {
                meat.y = random()
            }
        })
        timing -= 2
    }
}

let dx = 10
let dy = 0
function move_snake() {
    if (snake[0].x == 400 && dx == 10) {
        snake[0].x = 0
    } else if (snake[0].x == -10 && dx == -10) {
        snake[0].x = 400
    }
    if (snake[0].y == 400 && dy == 10) {
        snake[0].y = 0
    } else if (snake[0].y == -10 && dy == -10) {
        snake[0].y = 400
    }
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}

document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        if (dy != 10) { // don't reverse direction
            dx = 0
            dy = -10           
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        if (dy != -10) {
            dx = 0
            dy = 10           
        }

    }
    else if (e.keyCode == '37') {
        // left arrow
        if (dx != 10) {
            dx = -10
            dy = 0           
        }
    }
    else if (e.keyCode == '39') {
        // right arrow
        if (dx != -10) {
            dx = 10
            dy = 0           
        }
    }

}

function collapse(params) {
    let body = snake.slice(1)
    body.forEach(snakePart => {
        if (snake[0].x == snakePart.x && snake[0].y == snakePart.y) {
            console.log('boom');
            clearInterval(params)
        }
    })
}