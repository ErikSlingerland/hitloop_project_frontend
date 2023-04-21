# hitloop_project_frontend
Javascript frontend repo for the hitloop project


## V1:
Version where we use the API to play it with tone.js polysynth

## V2:
Javascript sequencer. API talks to sequencer. Sequencer talks to sampler to play samples.

NEED TO DO:
- Create the sequencer like how Arthur showed
- Adjust API output to decrease unnecessary calculations


idea for api to sequencer:
- Each block has a specified PPQ start_point. if it is at a X% variation around it, play it. 
- For the JSON, check when the notes (for now 4) are played and put the blocks on 'Active'
- Loop over the sequencer. When true play the corresponding sampler. 

- Add button on top to change sample to apply



## Instructions:

TBD

## Requirements

TBD

## liscences

TBD
