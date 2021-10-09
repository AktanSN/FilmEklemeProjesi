const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const ui = new UI();

const storage = new Storage();

EventListeners();

function EventListeners(e){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        ui.loadAllFilms();
    });

    cardbody.addEventListener("click",deleteFilm);
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
    }

    e.preventDefault();
}




function addFilm(e){
    
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){

        ui.displayAllAlerts("Lütfen tüm alanları doldurun","danger");

    }else{
        const newfilm = new Film(title,director,url);

        ui.addFilmToUI(newfilm);
        storage.addFilmsToStorage(newfilm);

        ui.displayAllAlerts("Film başarıyla eklendi","success");

    }

    ui.clearAllInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}