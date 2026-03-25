import { initMap, renderMap, enableMapScroll } from '../map/grid.js';
import { loadBuildings } from '../building/buildingData.js';
import { loadUnits } from '../unit/unitData.js';

const canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const resourcesDiv = document.getElementById('resources');
const levelDiv = document.getElementById('playerLevel');

let player = {
    gold: 1000,
    crystals: 0,
    level: 1
};

function updateOverlay() {
    resourcesDiv.textContent = `Gold: ${player.gold} | Crystals: ${player.crystals}`;
    levelDiv.textContent = `Level: ${player.level}`;
}

export function initGame() {
    initMap();
    loadBuildings();
    loadUnits();
    enableMapScroll(canvas);
    renderMap(ctx);
    updateOverlay();
}

initGame();
