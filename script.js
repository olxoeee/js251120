const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const kitty = {
    x: 50,
    y: canvas.height / 2,
    size: 50,
    speed: 5,
    dy: 0 // Direction of y-axis movement
};

function drawKitty() {
    ctx.font = `${kitty.size}px serif`;
    ctx.fillText('🐱', kitty.x, kitty.y);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    // Move kitty horizontally
    kitty.x += kitty.speed;

    // Move kitty vertically
    kitty.y += kitty.dy;

    // Wrap kitty around the screen
    if (kitty.x > canvas.width) {
        kitty.x = -kitty.size;
    }

    // Keep kitty within the canvas boundaries (top/bottom)
    if (kitty.y < 0) {
        kitty.y = 0;
    }

    if (kitty.y + kitty.size > canvas.height) {
        kitty.y = canvas.height - kitty.size;
    }
    
    clear();
    drawKitty();
    requestAnimationFrame(update);
}

function moveUp() {
    kitty.dy = -kitty.speed;
}

function moveDown() {
    kitty.dy = kitty.speed;
}

function stopMove() {
    kitty.dy = 0;
}


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        moveUp();
    } else if (e.key === 'ArrowDown') {
        moveDown();
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        stopMove();
    }
});

update();