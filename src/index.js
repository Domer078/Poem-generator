function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function Generate(event) {
  event.preventDefault();
  let poemInputElement = document.querySelector("#poem-input");

  let apikey = "63340413at53cc6c6ba7a81a11oc3f05";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a English poem about${poemInputElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${poemInputElement.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let formButtonElement = document.querySelector("#form-button");
formButtonElement.addEventListener("submit", Generate);
