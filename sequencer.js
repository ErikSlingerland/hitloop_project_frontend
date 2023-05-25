//////////////////Calls to API before window is initialised/////////////////////
const Url = 'https://api-hitloop.responsible-it.nl/'
let sample_list_url
let sample_url

// Check if the url contains a parameter to select a sample pack
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("A")) {
sample_list_url = Url + 'samples_test_list?sample_pack=a'
sample_url = Url+'test_samples?sample_pack=a&file='
}
else if (urlParams.has("B")) {
	sample_list_url = Url + 'samples_test_list?sample_pack=b'
	sample_url = Url+'test_samples?sample_pack=b&file='
  }
else{
sample_list_url = Url + 'samples_list'
sample_url = Url+'samples?file='
}



window.addEventListener('load', function () {

///////////////// Pipeline for selecting samples/////////////////////////
// Create button variables
const loopBtn = document.getElementById('loop-btn');
const cells = document.querySelectorAll('.cell');
const tonebtn = document.getElementById('tone-btn');
const clearbtn = document.getElementById('clear_sequencer');
const tempoInput = document.getElementById('tempo-input');



// Create a variable to store the sampler relevant values
let selectedValue0
let selectedValue1
let selectedValue2
let selectedValue3
let selectedValue4
let sampler
let audio

// Function to update the sampler with a new sample
function updateSampler(selectedValue, sampleURL) {
  // Remove the existing sample
  sampler.releaseAll();

  // Add the new sample
  sampler.add(selectedValue, sampleURL);
}



////////  Create selection pipelines for each column (0-4)  ////////
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
  
  // Select a random sample after all samples have been loaded
  const randomIndex = Math.floor(Math.random() * samples.length);
  const randomSample = samples[randomIndex];
  sampleSelect_col0.value = randomSample;
  selectedValue0 = randomSample;
})
.catch(error => {
  console.error('Error fetching data:', error);
});

// Add an event listener to the select element to detect changes
sampleSelect_col0.addEventListener('change', (event) => {
  // Update the selectedValue variable with the new value and play this audio
  selectedValue0 = event.target.value;
  audio = new Audio(sample_url + selectedValue0);
  // Play the audio
  audio.play();
  console.log(selectedValue0);
  // Update the sampler with the new sample
  let newSampleURL = sample_url + selectedValue0;
  updateSampler("G2", newSampleURL);


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
  
  // Select a random sample after all samples have been loaded
  const randomIndex = Math.floor(Math.random() * samples.length);
  const randomSample = samples[randomIndex];
  sampleSelect_col1.value = randomSample;
  selectedValue1 = randomSample;
})
.catch(error => {
  console.error('Error fetching data:', error);
});

// Add an event listener to the select element to detect changes
sampleSelect_col1.addEventListener('change', (event) => {
  // Update the selectedValue variable with the new value
  selectedValue1 = event.target.value;
  audio = new Audio(sample_url + selectedValue1);
  // Play the audio
  audio.play();
  console.log(selectedValue1);
  let newSampleURL = sample_url + selectedValue1;
  updateSampler("F2", newSampleURL);

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
  
  // Select a random sample after all samples have been loaded
  const randomIndex = Math.floor(Math.random() * samples.length);
  const randomSample = samples[randomIndex];
  sampleSelect_col2.value = randomSample;
  selectedValue2 = randomSample;
})
.catch(error => {
  console.error('Error fetching data:', error);
});

// Add an event listener to the select element to detect changes
sampleSelect_col2.addEventListener('change', (event) => {1
  // Update the selectedValue variable with the new value
  selectedValue2 = event.target.value;
  audio = new Audio(sample_url + selectedValue2);
  // Play the audio
  audio.play();
  console.log(selectedValue2);
  let newSampleURL = sample_url + selectedValue2;
  updateSampler("E2", newSampleURL);
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
  
  // Select a random sample after all samples have been loaded
  const randomIndex = Math.floor(Math.random() * samples.length);
  const randomSample = samples[randomIndex];
  sampleSelect_col3.value = randomSample;
  selectedValue3 = randomSample;
})
.catch(error => {
  console.error('Error fetching data:', error);
});

// Add an event listener to the select element to detect changes
sampleSelect_col3.addEventListener('change', (event) => {
  // Update the selectedValue variable with the new value
  selectedValue3 = event.target.value;
  audio = new Audio(sample_url + selectedValue3);
  // Play the audio
  audio.play();
  console.log(selectedValue3);
  let newSampleURL = sample_url + selectedValue3;
  updateSampler("D2", newSampleURL);
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
  
  // Select a random sample after all samples have been loaded
  const randomIndex = Math.floor(Math.random() * samples.length);
  const randomSample = samples[randomIndex];
  sampleSelect_col4.value = randomSample;
  selectedValue4 = randomSample;
})
.catch(error => {
  console.error('Error fetching data:', error);
});

// Add an event listener to the select element to detect changes
sampleSelect_col4.addEventListener('change', (event) => {
  // Update the selectedValue variable with the new value
  selectedValue4 = event.target.value;
  audio = new Audio(sample_url + selectedValue4);
  // Play the audio
  audio.play();
  console.log(selectedValue4);
  let newSampleURL = sample_url + selectedValue4;
  updateSampler("C2", newSampleURL);
});



   // Initialize the sampler when tonebtn is pressed //
   tonebtn.addEventListener('click', function () {
	if (sampler === undefined) {
	sampler = new Tone.Sampler({
		urls: {
		  C2: sample_url +selectedValue4,
		  D2: sample_url +selectedValue3,
		  E2: sample_url +selectedValue2,
		  F2: sample_url +selectedValue1,
		  G2: sample_url +selectedValue0,
		},
		onload: () => {
		  console.log("Sampler loaded");
		}
	  }).toDestination();
	// change the tonebtn text to 'update samples'
  tonebtn.classList.add('hidden-button');

	loopBtn.classList.remove('hidden-button');
	loopBtn.classList.add('btn-pos');
	
	clearbtn.classList.remove('hidden-button');
	clearbtn.classList.add('btn-neg');


	} else {
	// Update the sampler
	sampler.dispose();
	sampler = new Tone.Sampler({
		urls: {
					  C2: sample_url +selectedValue4,
					  D2: sample_url +selectedValue3,
					  E2: sample_url +selectedValue2,
					  F2: sample_url +selectedValue1,
					  G2: sample_url +selectedValue0,
					},
					onload: () => {
											  console.log("Sampler loaded");
					}
	}).toDestination();
	}
});


///////////////////////Sequencer pipeline//////////////////////////////
	let isLoopPlaying = false;

	const numRows = 5;
	const numCols = 16;

	let col = 0; // Initialize the column index
	let intervalId // Initialize the intervalId


	// Notes corresponded to each Column of the grid
	const notes = ['G2', 'F2', 'E2', 'D2', 'C2'];

	// Decides how long a note can take
	const noteLength = '8n';

	// Sets the seed to 1,2,3
	let seed = Math.floor(Math.random() * 10)
	//Static seed
	// seed = 120 

	// Uses input BPM to calculate wait-time between columns
	columnTime = (60 / parseFloat(document.getElementById('tempo-input').value)) * 1000;
	tempoInput.addEventListener('input', function () {
		const bpm = parseFloat(tempoInput.value);
		columnTime = (60 / bpm) * 1000;
	});

	// Initialize the MIDI data from sequencer_json
	let fetchUrl = ' '

	if (urlParams.has("A")) {
		fetchUrl = Url + 'sequencer_random_json' + '?seed=' + seed
		}
		else{
			fetchUrl = Url + 'sequencer_json' + '?seed=' + seed
		}

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


	
	// Define function to turn cell on/off
	function toggleCell(event) {
	  if (event.target.classList.contains('on')) {
		event.target.classList.remove('on');
	  } else {
		event.target.classList.add('on');
	  }
	}


	  function playStep(col) {
		const playedNotes = {};
		
		// Remove 'current' class from all header elements
		const headerElements = document.querySelectorAll('.cell-header');
		headerElements.forEach((header) => {
		  header.classList.remove('current');
		});
	  
		// Set the 'current' class for the header element corresponding to the given column
		const currentHeader = document.querySelector(`.cell-header[data-col="${col}"]`);
		if (currentHeader) {
		  currentHeader.classList.add('current');
		}
		
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
	intervalId = setInterval(function() {
		if (isLoopPlaying) { // Check if isLoopPlaying is true
			playStep(col);
		}
		col++; // Increment the column index

		if (col === numCols) {
			col = 0; // Reset the index to 0
		}
	}, columnTime);

	// Set the loopEnd to repeat indefinitely
	Tone.Transport.loopEnd = numCols - 1;
	Tone.Transport.start();
	Tone.Transport.loop = true;
  }
		


	
	loopBtn.addEventListener('click', function () {
		if (loopBtn.classList.contains('btn-pos')) {
			loopBtn.classList.remove('btn-pos');
			loopBtn.classList.add('btn-med');
			loopBtn.textContent = 'Stop Loop';
			Tone.start();
			isLoopPlaying = true;
			playLoop();
		}
		 else if (loopBtn.classList.contains('btn-med')) {
			loopBtn.classList.remove('btn-med');
			loopBtn.classList.add('btn-pos');
			loopBtn.textContent = 'Start Loop';
			isLoopPlaying = false;
			Tone.Transport.stop()
			clearInterval(intervalId); 
			col = 0;
		}
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