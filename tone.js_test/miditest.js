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

  // Get a reference to the <button> element
  const button = document.querySelector("button");

  // Set up a function to trigger the sampler when the <button> element is clicked
  button.addEventListener("click", function() {
    sampler.triggerAttackRelease(["A2"], 1);
  });
});