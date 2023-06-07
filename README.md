# Hitloop Frontend
This repository serves as the front-end of the initial Hitloop Project. It communicates with the [Hitloop Backend](https://github.com/responsibleIT/hitloop_project_backend) to achieve it's functionalities.

## Features

The frontend has the ability to communicate with the Hitloop backend to collect a list of available samples and a MIDI pattern. Afterwards the frontend creates a sequencer where the collected MIDI pattern is inserted into. The user can then adjust the MIDI pattern and specify what samples are played for which note(s).

To play the created musical loop, the [Tone.js module](https://github.com/Tonejs/Tone.js) is utilized.

## Instructions:

The application should be started by running it as a web server.

When this has been done, the main application will run on http://127.0.0.1:5500/

The main implementation of the Hitloop backend is found on this url. To recieve alternate versions of the backend API. The hyperlink parameters can be expanded. Current implementation includes two alternatives. 

- Firstly http://127.0.0.1:5500/?A which utilizes sample_pack A and the sequencer_random_json function from the backend API. 
- Secondly http://127.0.0.1:5500/?B which utilizes sample_pack B and the sequencer_json function from the backend API.

This version of the application only calls to the online released version of the Hitloop backend, located at https://api-hitloop.responsible-it.nl/

## Requirements

- Internet connection for communicating with the Hitloop Backend
- An internet browser (tested on chrome and firefox)
