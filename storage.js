function Storage(){

}

Storage.prototype.addFilmsToStorage = function(newfilm){
    let array = this.getFilmsFromStorage();

    array.push(newfilm);

    localStorage.setItem("films",JSON.stringify(array));
    

}

Storage.prototype.getFilmsFromStorage = function(){

    let array;

    if(localStorage.getItem("films")=== null){
        array = [];
    }
    else{
        array = JSON.parse(localStorage.getItem("films"));
    }

    return array;
}
Storage.prototype.deleteFilmFromStorage = function(title){
    const films = this.getFilmsFromStorage();

    films.forEach(function(film,index){
        if(title === film.title){
            films.splice(index,1);
        }
    });

    localStorage.setItem("films",JSON.stringify(films));

}