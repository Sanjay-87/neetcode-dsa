const target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3];

const carFleet = (target, position, speed) => {
    const cars = [];

    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]]);
    }

    cars.sort((a, b) => b[0] - a[0]);

    const stack = [];
    for (let [pos, spd] of cars) {
        let time = (target - pos) / spd;
        
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
    }

    return stack.length;
}

console.log(carFleet(target, position, speed))