let message = document.querySelector('#message');

let addMovie = (event) => {
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';

    document.querySelector('ul').appendChild(movie);
    inputField.value = " ";

    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);


}

document.querySelector('form').addEventListener('submit', addMovie);

let deleteMovie = (event) => {
    event.target.parentNode.remove();

    message.textContent = 'Movie deleted!';
    revealMessage();
}

let crossOffMovie = (event) => {
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked')) {
        message.textContent = 'Movie Watched!';
    }else {
        message.textContent = 'Movie added back!'
    }
    revealMessage()
}

let revealMessage = () => {
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000);
   
}