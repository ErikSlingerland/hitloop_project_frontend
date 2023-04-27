document.addEventListener("DOMContentLoaded", function() {

const speed = 100; // loop speed in milliseconds
let rowIndex = 0;
let colIndex = 0;
let loopInterval;

function startLoop() {
	loopInterval = setInterval(() => {
		// check if current cell is on
		const cell = document.querySelector(`table tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`);
		const isOn = cell.classList.contains('on');

		// do something based on whether cell is on or off
		if (isOn) {
			// cell is on
			console.log(`Cell (${rowIndex}, ${colIndex}) is on`);
			// trigger audio or other action here
		} else {
			// cell is off
			console.log(`Cell (${rowIndex}, ${colIndex}) is off`);
			// do nothing
		}

		// increment column index
		colIndex++;
		if (colIndex >= 16) {
			// if end of row, reset column index and move to next row
			colIndex = 0;
			rowIndex++;
			if (rowIndex >= 5) {
				// if end of grid, reset row index
				rowIndex = 0;
			}
		}
	}, speed);
}

function toggleCell(cell) {
	cell.classList.toggle('on');
	if (cell.classList.contains('on')) {
		cell.setAttribute('data-state', 'on');
	} else {
		cell.setAttribute('data-state', 'off');
	}
}

function toggleCell(cell) {
	cell.classList.toggle('on');
}

const cells = document.querySelectorAll('td');
cells.forEach(cell => {
	cell.addEventListener('click', () => {
		toggleCell(cell);
	});
});

const loopBtn = document.getElementById('loop-btn');


let isLooping = false;
loopBtn.addEventListener('click', () => {
	if (!isLooping) {
		startLoop();
		loopBtn.textContent = 'Stop Loop';
	} else {
		stopLoop();
		loopBtn.textContent = 'Start Loop';
	}
	isLooping = !isLooping;
});

function loadState() {
	const cells = document.querySelectorAll('td');
	cells.forEach(cell => {
		const state = cell.getAttribute('data-state');
		if (state === 'on') {
			cell.classList.add('on');
		} else {
			cell.classList.remove('on');
		}
	});
}

loadState();

});