let rover = {
    x: 0,
    y: 0,
    direction: "N",
    maxX : 0,
    maxY: 0,
}

const move = () => {
    if (rover.direction === "N"){
        rover.y += 1;
    }
    else if (rover.direction === "S"){
        rover.y -= 1;
    }
    else if (rover.direction === "E"){
        rover.x += 1;
    }
    else if (rover.direction === "W"){
        rover.x -= 1;
    }
}

const turnRight = () => {
    if (rover.direction === "N"){
        rover.direction = "W";
    }
    else if (rover.direction === "E"){
        rover.direction = "N";
    }
    else if (rover.direction === "S"){
        rover.direction = "E";
    }
    else if (rover.direction === "W"){
        rover.direction = "S";
    }
}

const turnLeft = () => {
    if (rover.direction === "N"){
        rover.direction = "W";
    }
    else if (rover.direction === "E"){
        rover.direction = "N";
    }
    else if (rover.direction === "S"){
        rover.direction = "E";
    }
    else if (rover.direction === "W"){
        rover.direction = "S";
    }
}

const initialize = (grid, initialPosition) => {
    rover.maxX = Number(grid[0]);
    rover.maxY = Number(grid[2]);
    rover.x = Number(initialPosition[0]);
    rover.y = Number(initialPosition[2]);
    rover.direction = initialPosition[4];
}

const marsRower = (grid, initialPosition, instructions) => {
    initialize(grid, initialPosition);
    for (char of instructions) {
        if(char === "M"){
            move();
        }
        else if (char === "L"){
            turnLeft();
        }
        else if (char === "R"){
            turnRight();
        }
    }
    console.log(`${rover.x}, ${rover.y}, ${rover.direction}`);
}

let givenGrid = "5 5"
let initialPosition = "3 3 E"
let instructions = "MMRMMRMRRM"

marsRower(givenGrid, initialPosition, instructions);