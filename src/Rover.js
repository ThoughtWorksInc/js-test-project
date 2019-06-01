"use strict"

class Rover {
    constructor(x, y, direction) {
        this.x         = x
        this.y         = y
        this.direction = direction
    }

    get position() {
        return [this.x, this.y, this.direction].join(" ")
    }

    instruct(instructions) {
        for (let i = 0; i < instructions.length; i++) {
            let instruction = instructions.charAt(i)
            switch (instruction) {
                case 'L':
                case 'R':
                    this.rotate(instruction)
                    break;
                case 'M':
                    this.move()
                    break;
                default:
                    console.log("Unknown instruction: ", instruction)
                    break;
            }
        }
    }

    rotate(direction) {
        const directions = ['N', 'E', 'S', 'W']

        let currentIndex = directions.indexOf(this.direction);
        let nextIndex    = direction == 'L' ? currentIndex - 1 : currentIndex + 1

        if (nextIndex == 4) {
            nextIndex = 0
        } else if (nextIndex < 0) {
            nextIndex = 3
        }

        this.direction = directions[nextIndex]
    }

    move() 
    {
        let movements = {
            'N': {x: 0, y: 1},
            'E': {x: 1, y: 0},
            'S': {x: 0, y: -1},
            'W': {x: -1, y: 0}
        }

        let movement = movements[this.direction]

        this.x += movement.x
        this.y += movement.y
    }
}

module.exports = Rover
