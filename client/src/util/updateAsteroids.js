
function updateAsteroids(asteroids) {

    let updatedAsteroids = { ...asteroids };


    for (let [key, value] of Object.entries(updatedAsteroids)) {
        
        if (value.thrust) {
            let { x, y, xB, yB, dir, vx, vy, thrust, spriteDim } = value;
            vx = -thrust * Math.cos((dir) * Math.PI / 180);
            vy = -thrust * Math.sin((dir) * Math.PI / 180);
            //constatley update momentum
            x += vx;
            y += vy;
            //calculate cenetr based of current x,y cord
            let center = { x: x + (spriteDim.w / 2), y: y + (spriteDim.h / 2) }
            //These numbers represent the actual image height and width in pixels
            if (center.y > 1080) y = 0;
            if (center.y < 0) y = 1080 - (spriteDim.h / 2);
            if (center.x > 1920) x = 0;
            if (center.x < 0) x = 1920 - (spriteDim.w / 2);
            updatedAsteroids[key] = {...value, x: x, y: y, xB: xB, yB:yB, vx: vx, vy: vy };
       
        } else {
            updatedAsteroids[key] = {}
        }
    };

    return updatedAsteroids;
}




export default updateAsteroids;
