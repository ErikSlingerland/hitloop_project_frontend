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
	const loopLength = 16; // number of columns in loop
	const numRows = 5; // number of rows in loop
	let loopInterval;
	let loopIndex = 0;
	let cells = [];

	const note_lookup = {
		0: 'C2',
		1: 'D2',
		2: 'E2',
		3: 'F2',
		4: 'G2'
	};

	function startLoop() {
		loopInterval = setInterval(() => {
			const notesToPlay = [];
			for (let i = 0; i < numRows; i++) {
				const cell = cells[i][loopIndex];
				if (cell.classList.contains('on')) {
					notesToPlay.push(note_lookup[i]);
				}
			}
			if (notesToPlay.length > 0) {
				console.log(`Playing notes ${notesToPlay} at loop index ${loopIndex}`);
				sampler.triggerAttackRelease(notesToPlay, 1);
			}
			loopIndex++;
			if (loopIndex >= loopLength) {
				loopIndex = 0;
			}
		}, speed);
	}

	function stopLoop() {
		clearInterval(loopInterval);
		loopIndex = 0;
	}

	function toggleCell(cell) {
		cell.classList.toggle('on');
		if (cell.classList.contains('on')) {
			cell.setAttribute('data-state', 'on');
		} else {
			cell.setAttribute('data-state', 'off');
		}
	}

	function init() {
		// initialize cells array
		for (let i = 0; i < numRows; i++) {
			cells[i] = [];
			for (let j = 0; j < loopLength; j++) {
				cells[i][j] = document.querySelector(`table tr:nth-child(${i + 1}) td:nth-child(${j + 1})`);
				cells[i][j].addEventListener('click', () => {
					toggleCell(cells[i][j]);
				});
			}
		}

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
			cells.forEach(row => {
				row.forEach(cell => {
					const state = cell.getAttribute('data-state');
					if (state === 'on') {
						cell.classList.add('on');
					} else {
						cell.classList.remove('on');
					}
				});
			});
		}

		loadState();
	}

	init();
});