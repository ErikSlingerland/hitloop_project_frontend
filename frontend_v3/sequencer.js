const Url = 'https://api-hitloop.responsible-it.nl/'
let sample_list_url = Url + 'samples_list'
let sample_url = Url+'samples?file='
window.addEventListener('load', function () {


///////////////// Pipeline for selecting samples/////////////////////////
// Create selection pipelines for each column (0-4)

// Create col0 selection
const sampleSelect_col0 = document.getElementById('sampleselect_col0');
fetch(sample_list_url)
.then(response => response.json())
.then(data => {
  const samples = data.files;
 	  // Add empty option at start
	   const option = document.createElement('option');
	   option.value = '';
	   option.textContent = '';
	   sampleSelect_col0.appendChild(option);
	   // Create new option for each sample 
  samples.forEach(sample => {
	const option = document.createElement('option');
	option.value = sample;
	option.textContent = sample;
	sampleSelect_col0.appendChild(option);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
})
let  selectedValue0 
// Add an event listener to the select element to detect changes
sampleSelect_col0.addEventListener('change', (event) => {
	// Update the selectedValue variable with the new value
	selectedValue0 = event.target.value;
	console.log(selectedValue0);
});

// Create col1 selection
const sampleSelect_col1 = document.getElementById('sampleselect_col1');
fetch(sample_list_url)
.then(response => response.json())
.then(data => {
  const samples = data.files;
 	   // Add empty option at start
		const option = document.createElement('option');
		option.value = '';
		option.textContent = '';
		sampleSelect_col1.appendChild(option);
		// Create new option for each sample  
  samples.forEach(sample => {
	const option = document.createElement('option');
	option.value = sample;
	option.textContent = sample;
	sampleSelect_col1.appendChild(option);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
})
// Make selectedValue intereactive
let  selectedValue1
// Add an event listener to the select element to detect changes
sampleSelect_col1.addEventListener('change', (event) => {
	// Update the selectedValue variable with the new value
	selectedValue1 = event.target.value;

	// Do something with the new selected value here
	console.log(selectedValue1);
});

// Create col2 selection
const sampleSelect_col2 = document.getElementById('sampleselect_col2');
fetch(sample_list_url)
.then(response => response.json())
.then(data => {
  const samples = data.files;
    // Add empty option at start
	const option = document.createElement('option');
	option.value = '';
	option.textContent = '';
	sampleSelect_col2.appendChild(option);
	// Create new option for each sample 
  samples.forEach(sample => {
	const option = document.createElement('option'); 	
	option.value = sample;
	option.textContent = sample;
	sampleSelect_col2.appendChild(option);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
})
// Make selectedValue intereactive
let  selectedValue2
// Add an event listener to the select element to detect changes
sampleSelect_col2.addEventListener('change', (event) => {
	// Update the selectedValue variable with the new value
	selectedValue2 = event.target.value;

	// Do something with the new selected value here
	console.log(selectedValue2);
});



// Create col3 selection
const sampleSelect_col3 = document.getElementById('sampleselect_col3');
fetch(sample_list_url)
.then(response => response.json())
.then(data => {
  const samples = data.files;
   // Add empty option at start
   const option = document.createElement('option');
   option.value = '';
   option.textContent = '';
   sampleSelect_col3.appendChild(option);
   // Create new option for each sample 
  samples.forEach(sample => {
	const option = document.createElement('option');
	option.value = sample;
	option.textContent = sample;
	sampleSelect_col3.appendChild(option);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
})
// Make selectedValue intereactive
let  selectedValue3
// Add an event listener to the select element to detect changes
sampleSelect_col3.addEventListener('change', (event) => {
	// Update the selectedValue variable with the new value
	selectedValue3 = event.target.value;

	// Do something with the new selected value here
	console.log(selectedValue3);
});



// Create col4 selection
const sampleSelect_col4 = document.getElementById('sampleselect_col4');
fetch(sample_list_url)
.then(response => response.json())
.then(data => {
  const samples = data.files;
   // Add empty option at start
   const option = document.createElement('option');
   option.value = '';
   option.textContent = '';
   sampleSelect_col4.appendChild(option);
   // Create new option for each sample 
  samples.forEach(sample => {
	const option = document.createElement('option');
	option.value = sample;
	option.textContent = sample;
	sampleSelect_col4.appendChild(option);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
})
// Make selectedValue intereactive
let  selectedValue4
// Add an event listener to the select element to detect changes
sampleSelect_col4.addEventListener('change', (event) => {
	// Update the selectedValue variable with the new value
	selectedValue4 = event.target.value;

	// Do something with the new selected value here
	console.log(selectedValue4);
});





/////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////Sequencer pipeline//////////////////////////////

	// Global Variables
	const loopBtn = document.getElementById('loop-btn');
	const cells = document.querySelectorAll('.cell');
	const tonebtn = document.getElementById('tone-btn');
	let sampler;

	const numRows = 5;
	const numCols = 16;

	// Notes corresponded to each Column of the grid
	const notes = ['G2', 'F2', 'E2', 'D2', 'C2'];

	// Decides how long a note can take
	const noteLength = '8n';

	// Sets the seed to 1,2,3
	let seed = Math.floor(Math.random() * 4)
	//Static seed
	// seed = 120 

	// Uses input BPM to calculate wait-time between columns
	columnTime = (60 / parseFloat(document.getElementById('tempo-input').value)) * 1000;
	const tempoInput = document.getElementById('tempo-input');
	tempoInput.addEventListener('input', function () {
		const bpm = parseFloat(tempoInput.value);
		columnTime = (60 / bpm) * 1000;
	});

	// Initialize the MIDI data from sequencer_json
	let fetchUrl = Url + 'sequencer_json' + '?seed=' + seed
	fetch(fetchUrl)
  .then(response => response.json())
  .then(data => {
	console.log(data)
    // 'data' is the 2D array of grid values returned by the API
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] == 1.0) {
          // Cell is ON
          document.querySelector(`.cell[data-row="${j}"][data-col="${i}"]`).classList.add('on');
        } else {
          // Cell is not changed
        }
      }
    }
  });






   // Initialize the sampler when tonebtn is pressed
  tonebtn.addEventListener('click', function () {
	sampler = new Tone.Sampler({
		urls: {
		  C2: sample_url +selectedValue0,
		  D2: sample_url +selectedValue1,
		  E2: sample_url +selectedValue2,
		  F2: sample_url +selectedValue3,
		  G2: sample_url +selectedValue4,
		},
		onload: () => {
		  console.log("Sampler loaded");
		}
	  }).toDestination();
});
	
	// Define function to turn cell on/off
	function toggleCell(event) {
	  if (event.target.classList.contains('on')) {
		event.target.classList.remove('on');
	  } else {
		event.target.classList.add('on');
	  }
	}

	// Define function for playing all cells that are on in a column
	function playStep(col) {
		const playedNotes = {};
		for (let row = 0; row < numRows; row++) {
		  const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
		  console.log(`Checking cell [${row}, ${col}]. Cell is ${cell.classList.contains('on') ? 'on' : 'off'}.`);
		  if (cell && cell.classList.contains('on')) {
			const note = notes[row];
			if (!playedNotes[note]) {
				sampler.triggerAttackRelease(note, noteLength);
			  playedNotes[note] = true;
			}
		  }
		}
	  }

	   // Define function for playing a loop
	  function playLoop() {
		Tone.Transport.scheduleRepeat(function (time) {
		  for (let col = 0; col < numCols; col++) {
			setTimeout(function () {
			  playStep(col);
			  // Remove the highlight from the current column
			  const currentCol = document.querySelector(`.cell-header[data-col="${col}"]`);
			  currentCol.classList.remove('active');
	  
			  // Highlight the next column
			  const nextCol = document.querySelector(`.cell-header[data-col="${(col+1)%numCols}"]`);
			  nextCol.classList.add('active');
			}, columnTime * col);
		  }
		}, columnTime * numCols);
		
		// Set the loopEnd to repeat indefinitely
		Tone.Transport.loopEnd = numCols + 'm';
		Tone.Transport.start();
		Tone.Transport.loop = true;
	  }

	
	loopBtn.addEventListener('click', function () {
		Tone.start(); 
	  playLoop();
	});
	
	cells.forEach(function (cell) {
	  cell.addEventListener('click', function (event) {
		toggleCell(event);
	  });
	});



// Function for clearing all on cells in the sequencer
function removeOnClass(numRows, numCols) {
	for (let row = 0; row <= numRows; row++) {
	  for (let col = 0; col <= numCols; col++) {
		const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
		if (cell.classList.contains('on')) {
		  cell.classList.remove('on');
		}
	  }
	}
  }
  
  clear_sequencer.addEventListener('click', function() {
	removeOnClass(4, 15);
});

});