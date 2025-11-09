function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: none,
  });
}

function Generate(event) {
  event.preventDefault();

  let apikey = "63340413at53cc6c6ba7a81a11oc3f05";
  let context =
    "You are an expert when it comes to poems, please write a short four lines of a poem. Sign at the end of the poem 'SheCodes AI ' and should have a <strong> element";
  let prompt = `Generate a english poem about ${poemInputElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  let poemInputElement = document.querySelector("poem-input");

  axios.get(apiUrl).then(displayPoem);
}

let formButtonElement = document.querySelector("#form-button");
formButtonElement.addEventListener("submit", Generate);
