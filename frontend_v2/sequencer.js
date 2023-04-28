// Wait for the context to be initialized
window.addEventListener('load', () => {
	// Create a new Tone.js sampler
	const sampler = new Tone.Sampler({
	  urls: {
		A2: "A2.mp3",
	  },
	  baseUrl: "https://tonejs.github.io/audio/casio/",
	  onload: () => {
		console.log("Sampler loaded");
	  }
	}).toDestination();

const speed = 100; // loop speed in milliseconds
let rowIndex = 0;
let colIndex = 0;
let loopInterval;

const note_lookup = {
	0: 'C2',
	1: 'D2',
	2: 'E2',
	3: 'F2',
	4: 'G2'
  };

function startLoop() {
	loopInterval = setInterval(() => {
		// check if current cell is on
		const cell = document.querySelector(`table tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`);
		const isOn = cell.classList.contains('on');

		// do something based on whether cell is on or off
		if (isOn) {
			const note = note_lookup[rowIndex]
			// cell is on
			console.log(`Cell (${rowIndex}, ${colIndex}) is on`);
			// trigger audio or other action here
			sampler.triggerAttackRelease([note], 1);


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