fetch('https://api.thecatapi.com/v1/images/search')
    .then(data => data.json())
    .then(catImageURL => {
        const catImage = catImageURL[0].url;
        const imageElement = document.getElementById('image-element');

        imageElement.innerHTML = `<img src="${catImage}" alt="">`;
    })