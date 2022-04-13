function updatePlayer(globalPlayer, keysPressed) {

    let { x, y, xB, yB, dir, thrust, vx, vy, turnSpeed, spriteDim, alive } = globalPlayer;

    //if 'w' key opressed, add velocity in direction
    if (keysPressed.includes('w')) {
        vx -= thrust * Math.cos((dir) * Math.PI / 180);
        vy -= thrust * Math.sin((dir) * Math.PI / 180);
    }
    //Rotate ship whe A or D pressed
    if (keysPressed.includes('d')) {
        (dir < 360) ? dir += turnSpeed : dir = 0;
    }
    
    if (keysPressed.includes('a')) {
        (dir <= 0) ? dir = 360 : dir -= turnSpeed;
    }

    //constatley update momentum
    x += vx;
    y += vy;
    //calculate cenetr based of current x,y cord
    let center = { x: x + (spriteDim.w / 2), y: y + (spriteDim.h / 2) }

    //this loops the player around the screen. NOW BASED OFF CENTER POSITION
    //These numbers represent the actual image height and width in pixels
    if (center.y > 1080) y = 0;
    if (center.y < 0) y = 1080 - (spriteDim.h / 2);
    if (center.x > 1920) x = 0;
    if (center.x < 0) x = 1920 - (spriteDim.w / 2);


    //recalc center
    center = { x: x + (spriteDim.w / 2), y: y + (spriteDim.h / 2) }


  
    return { x, y, xB, yB, dir, thrust, vx, vy, turnSpeed, spriteDim, alive }
}

export default updatePlayer;