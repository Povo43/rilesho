let search_face_button = document.getElementById("search_face_button");
search_face_button.onclick = search_face;
var search_display = 0;

function search_face(){
    var search = document.getElementById("search_form");
    
    if(search_display == 0){
        search.style.display = 'block';
        search_face_button.style.display = 'none';
        search_display = 1;
    }else{
        search.style.display = 'none';
        search_face_button.style.display = 'block';
        search_display = 0;
    }
}