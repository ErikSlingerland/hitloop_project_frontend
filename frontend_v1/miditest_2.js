// // headers to read json
// const express = require('express');
// const app = express();

// app.use(express.static(__dirname));

// app.get('/generated_test_json.json', (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.sendFile(__dirname + '/generated_test_json.json');
// });

// app.listen(8000, () => console.log('Server listening on port 8000'));


// actual code
fetch('generated_test_json.json')
.then(response => response.json())
.then(function(midi){


//python -m http.server --bind 127.0.0.1 8000//


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