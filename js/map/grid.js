export let gameMap = [];
export const tileSize = 32;

export function initMap(rows = 150, cols = 150) {
    gameMap = Array.from({ length: rows }, () => Array(cols).fill(0));
}

let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let dragStart = { x: 0, y: 0 };

export function enableMapScroll(canvas) {
    canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) {
            isDragging = true;
            dragStart.x = e.touches[0].clientX - offsetX;
            dragStart.y = e.touches[0].clientY - offsetY;
        }
    });
    canvas.addEventListener('touchmove', e => {
        if (!isDragging || e.touches.length !== 1) return;
        offsetX = e.touches[0].clientX - dragStart.x;
        offsetY = e.touches[0].clientY - dragStart.y;
        e.preventDefault();
    }, { passive: false });
    canvas.addEventListener('touchend', () => { isDragging = false; });
    canvas.addEventListener('touchcancel', () => { isDragging = false; });
}

export function renderMap(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let y = 0; y < gameMap.length; y++) {
        for (let x = 0; x < gameMap[y].length; x++) {
            const screenX = x * tileSize + offsetX;
            const screenY = y * tileSize + offsetY;
            ctx.fillStyle = '#2a2a2a';
            ctx.fillRect(screenX, screenY, tileSize, tileSize);
            ctx.strokeStyle = '#444';
            ctx.strokeRect(screenX, screenY, tileSize, tileSize);
        }
    }
    requestAnimationFrame(() => renderMap(ctx));
}
