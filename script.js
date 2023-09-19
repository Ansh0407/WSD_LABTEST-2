const dogImage = document.getElementById('dogImage');
const fetchDogButton = document.getElementById('fetchDogButton');

fetchDogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.src = data.message;
    })
    .catch(error => console.error(error));
});

document.addEventListener("DOMContentLoaded", function () {
    const fetchDogsButton = document.getElementById("fetchDogs");
    const dogList = document.getElementById("dogList");

    fetchDogsButton.addEventListener("click", function () {

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "dogs.json", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    const dogs = JSON.parse(xhr.responseText);
                    displayDogs(dogs);
                } catch (error) {
                    console.error("Error parsing JSON: " + error.message);
                }
            } else {
                console.error("Error loading dogs: " + xhr.status);
            }
        };

        xhr.send();
    });

    function displayDogs(dogs) {
        let html = "";
        for (const dog of dogs) {
            html += `
                <div class="card">
                    <h2>${dog.Breed}</h2>
                    <p><strong>Color:</strong> ${dog.Color}</p>
                    <p><strong>Country:</strong> ${dog.Country}</p>
                </div>
            `;
        }
        dogList.innerHTML = html;
    }
});