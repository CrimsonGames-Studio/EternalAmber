import { initMap, renderMap } from '../map/grid.js';
import { loadBuildings } from '../building/buildingData.js';
import { loadUnits } from '../unit/unitData.js';

const canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const overlay = document.getElementById('overlay');
const resourcesDiv = document.getElementById('resources');
const levelDiv = document.getElementById('playerLevel');

let player = {
    gold: 1000,
    crystals: 0,
    level: 1
};

export function initGame() {
    initMap();
    loadBuildings();
    loadUnits();
    renderMap(ctx);
    updateOverlay();
}

function updateOverlay() {
    resourcesDiv.textContent = `Gold: ${player.gold} | Crystals: ${player.crystals}`;
    levelDiv.textContent = `Level: ${player.level}`;
}

initGame();
