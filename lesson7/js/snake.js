var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300;
var isGameStarted = false;
var snakeTimer;

var score = 0;

var direction = 'top';

var snake = [];

var snakeCoordX;
var snakeCoordY;

function init() {
    prepareGameField(); 
    
    document.getElementById('snake-start').addEventListener('click', startGameHandler);
    
    document.getElementById('snake-renew').addEventListener('click', refreshGameHandler);
    
    window.addEventListener('keydown', changeDirectionHandler);
}

function prepareGameField() {
    var gameTable = document.createElement('table');
    gameTable.classList.add('game-table');
    gameTable.id = 'game-table';
    
    for(var i = 0; i < FIELD_SIZE_X; i++) {
        var row = document.createElement('tr');
        row.classList.add('game-table-row');
        
        for(var j = 0; j < FIELD_SIZE_Y; j++) {
            var cell = document.createElement('td');
            cell.classList.add('game-table-cell');
            
            row.appendChild(cell);
        } 
        
        gameTable.appendChild(row);
    }
    
    document.getElementById('snake-field').appendChild(gameTable);
}

function startGameHandler() {
    isGameStarted = true;
    respawn();
    
    snakeTimer = setInterval(move, SNAKE_SPEED);
    
    setTimeout(createFood, 500);
    setInterval(createObstruction, 3000);
}

function refreshGameHandler() {
    window.location.reload();
}

function changeDirectionHandler(event) {
    switch(event.keyCode) {
        case 37:
            if(direction != 'right') direction = 'left';
            break;
        case 38:
            if(direction != 'bottom') direction = 'top';
            break;
        case 39:
            if(direction != 'left') direction = 'right';
            break;
        case 40:
            if(direction != 'top') direction = 'bottom';
            break;
    }
}

function respawn() {
    snakeCoordX = Math.floor(FIELD_SIZE_X / 2);
    snakeCoordY = Math.floor(FIELD_SIZE_Y / 2);
    
    var gameTable = document.getElementById('game-table');
    // head
    var snakeHead = gameTable.children[snakeCoordX].children[snakeCoordY];
    snakeHead.classList.add('snake-unit');
    // tail
    var snakeTail = gameTable.children[snakeCoordX + 1].children[snakeCoordY];
    snakeTail.classList.add('snake-unit');
    
    snake.push(snakeTail);
    snake.push(snakeHead);
}

function move() {
    var gameTable = document.getElementById('game-table');
    var newUnit;
    
    switch(direction) {
        case 'top':
            newUnit = gameTable.children[--snakeCoordX].children[snakeCoordY];
            break;
        case 'bottom':
            newUnit = gameTable.children[++snakeCoordX].children[snakeCoordY];
            break;
        case 'right':
            newUnit = gameTable.children[snakeCoordX].children[++snakeCoordY];
            break;
        case 'left':
            newUnit = gameTable.children[snakeCoordX].children[--snakeCoordY];
            break;
    }

    if(!isSnakeUnit(newUnit) && !isObstruction(newUnit)) {
        inBounds();
        newUnit.classList.add('snake-unit');
        snake.push(newUnit);
        
        if(!isFood(newUnit)) {
            var snakeRemoved = snake.shift();
            snakeRemoved.classList.remove('snake-unit');   
        }        
    } else {
        gameOver();
    }
}

function isSnakeUnit(unit) {
    return snake.includes(unit);
}

function isFood(unit) {
    if(unit.classList.contains('food-unit')) {
        unit.classList.remove('food-unit');
        score++;
        gameScore(score);
        createFood();
        return true;
    } else {
        return false;
    }
}

function createFood() {
    var foodCreated = false;
    var gameTable = document.getElementById('game-table');
    
    while(!foodCreated) {
        var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
        var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);
        
        var foodCell = gameTable.children[foodX].children[foodY];
        
        if(!foodCell.classList.contains('snake-unit')) {
            foodCell.classList.add('food-unit');
            
            foodCreated = true;
        }
    }
}

function isObstruction(unit) {
    if(unit.classList.contains('obstruction-unit')) {
        return true;
    } else {
        return false;
    }
}

function createObstruction() {
    var obstructionCreated = false;
    var gameTable = document.getElementById('game-table');

    if (document.getElementsByClassName('obstruction-unit').length > 0) {
        var r = document.getElementsByClassName('obstruction-unit');
        r[0].classList.remove('obstruction-unit');
    }

    while(!obstructionCreated) {
        var obstructionX = Math.floor(Math.random() * FIELD_SIZE_X);
        var obstructionY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var obstructionCell = gameTable.children[obstructionX].children[obstructionY];

        if(!obstructionCell.classList.contains('snake-unit') && !obstructionCell.classList.contains('food-unit')) {
            obstructionCell.classList.add('obstruction-unit');

            obstructionCreated = true;
        }
    }
}

function inBounds() {
    if (snakeCoordX >= (FIELD_SIZE_X - 1)) {
        snakeCoordX = 0;
    } else if (snakeCoordX <= 0) {
        snakeCoordX = (FIELD_SIZE_X - 1);
    } else if (snakeCoordY >= (FIELD_SIZE_Y - 1)) {
        snakeCoordY = 0;
    } else if (snakeCoordY <= 0) {
        snakeCoordY = (FIELD_SIZE_Y - 1);
    }
}

function gameScore(score) {
    var playerScore = document.getElementById('score');
    playerScore.innerText = ' ';
    playerScore.innerText = score;
}

function gameOver() {
    isGameStarted = false;
    clearInterval(snakeTimer);
    alert('GAME OVER\n' + 'Счёт: ' + score);
}

window.onload = init;