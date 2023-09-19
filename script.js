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

