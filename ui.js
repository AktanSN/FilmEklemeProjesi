function UI(){

}

UI.prototype.addFilmToUI= function(newfilm){
    const filmList = document.getElementById("films");

    filmList.innerHTML += `
        <tr>
            <td><img src="${newfilm.url}" class="img-fluid img-thumbnail" style=" max-width: 300px"></td>
            <td>${newfilm.title}</td>
            <td>${newfilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
    `;
    
    
}

UI.prototype.clearAllInputs= function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayAllAlerts = function(message,type){
    const cardBody = document.querySelectorAll(".card-body")[0];
    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message ;

    cardBody.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);

} 

UI.prototype.loadAllFilms = function(){
    const filmList = document.getElementById("films");
    
    let array = JSON.parse(localStorage.getItem("films"));

    array.forEach(element => {
        filmList.innerHTML +=     `
        <tr>
            <td><img src="${element.url}" class="img-fluid img-thumbnail" style=" max-width: 300px"></td>
            <td>${element.title}</td>
            <td>${element.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
    `
    });
}

UI.prototype.deleteFilmFromUI = function(targetElement){
    targetElement.parentElement.parentElement.remove();

}