
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const main = document.querySelector(".main");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "You Love Dogs <3";
      main.appendChild(img);
    });
}

document.querySelector(".images").addEventListener("click", addNewDoggo);

