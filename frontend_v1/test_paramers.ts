// random integer between 0 and 99
let seed = Math.floor(Math.random() * 100)

// Set template
let template = 30
let fetch_basis = 'http://127.0.0.1:5000/test_json'
let fetch_parameters = { 
    start_parameters: '?seed=',
    seed: seed,
    second_parameter:'&template=',
    template: template  
}


let fetch_string = fetch_basis + fetch_parameters.start_parameters + seed + fetch_parameters.second_parameter + template