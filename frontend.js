//Run local server to test:
//python -m http.server --bind 127.0.0.1 8000//





////////////////////// Connect to API with models //////////////////////

// random integer between 0 and 99
let seed = Math.floor(Math.random() * 100)

// Set template
let template = 30
let fetch_basis = 'http://127.0.0.1:5000/test_json'
let start_parameters= '?seed='
let  second_parameter='&template='


let fetch_string = fetch_basis + start_parameters + seed + second_parameter + template

fetch(fetch_string)
.then(function(response){
    if(!response.ok){
        throw new Error('network response was not ok');
    }
    return response.json();
})
.then(function(midi){
    //console.log(midi);


////////////////////// Functions for tone.js //////////////////////
    //synth playback
    const synths = []
    document.querySelector("p").addEventListener("click",  (e) => {
        const playing = e.detail
        if (playing) {
            const now = Tone.now() + 0.5
            midi.tracks.forEach(track => {
                //create a synth for each track
                const synth = new Tone.PolySynth(Tone.Synth, {
                    envelope: {
                        attack: 0.02,
                        decay: 0.1,
                        sustain: 0.3,
                        release: 1
                    }
                }).toMaster()
                synths.push(synth)
                //schedule all of the events
                track.notes.forEach(note => {
                    synth.triggerAttackRelease(note.name, note.duration, note.time + now, note.velocity)
                })
            })
        } else {
            //dispose the synth and make a new one
            while (synths.length) {
                const synth = synths.shift()
                synth.dispose()
            }
        }
    })
})
.catch(error => console.error(error));