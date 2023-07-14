let button = document.querySelector('button');
let section = document.querySelector('section');

const createPlanetCard = (obj) => {
    const mainDiv = document.createElement('div');

    mainDiv.classList.add('card');
    mainDiv.innerHTML = `
    <h1>Name: ${obj.name}</h1>
    <ul>
        <li>${obj.climate}</li>
        <li>${obj.gravity}</li>
        <li>${obj.population}</li>
    </ul>`

    section.appendChild(mainDiv);
}

function webApi() {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then(res => {
        console.log('im working')
        console.log(res.data.results)
        res.data.results.map(planets => {
            axios.get(planets.url)
            .then(result => {
                console.log(result.data)
                createPlanetCard(result.data);
            })
            .catch(err => console.error(err));
        })
    })
    .catch(err => console.error(err));
}

button.addEventListener('click', webApi);